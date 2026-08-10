/* ==================================================================
   app.js — tudo roda no navegador, os dados ficam no localStorage.
   Faça backup pela aba Backup de vez em quando (ou commite o JSON).
   ================================================================== */

const KEY = "cyber-tracker-v1";

const state = load();

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return Object.assign(base(), JSON.parse(raw));
  } catch (e) { console.warn("estado corrompido, recomeçando", e); }
  return base();
}
function base() {
  return { checks: {}, notes: [], sessions: [], inicio: null, alvo: null };
}
function save() {
  localStorage.setItem(KEY, JSON.stringify(state));
}

/* ---------------- utilidades ---------------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

const esc = (s = "") =>
  String(s).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

const hoje = () => new Date().toISOString().slice(0, 10);
const fmtBR = (iso) => { const [a, m, d] = iso.split("-"); return `${d}/${m}/${a}`; };
const DIAS = ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"];
const diaSemana = (iso) => DIAS[new Date(iso + "T12:00:00").getDay()];

function slug(s) {
  return (s || "nota")
    .normalize("NFD").replace(/[^\x00-\x7F]/g, "")
    .toLowerCase().replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "").slice(0, 50) || "nota";
}

let toastT;
function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("on");
  clearTimeout(toastT);
  toastT = setTimeout(() => t.classList.remove("on"), 2600);
}

function baixar(nome, conteudo) {
  const b = new Blob([conteudo], { type: "text/plain;charset=utf-8" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(b);
  a.download = nome;
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 4000);
}

async function copiar(txt) {
  try {
    await navigator.clipboard.writeText(txt);
    toast("Copiado para a área de transferência.");
  } catch {
    toast("Não consegui copiar — selecione o texto manualmente.");
  }
}

/* ---------------- métricas ---------------- */
function todosItens() {
  return PLANO.fases.flatMap((f) => f.grupos.flatMap((g) => g.itens));
}
function progressoFase(f) {
  const it = f.grupos.flatMap((g) => g.itens);
  const feitos = it.filter((i) => state.checks[i.id]).length;
  return { feitos, total: it.length, pct: it.length ? Math.round((feitos / it.length) * 100) : 0 };
}
function progressoGeral() {
  const it = todosItens();
  const feitos = it.filter((i) => state.checks[i.id]).length;
  return { feitos, total: it.length, pct: it.length ? Math.round((feitos / it.length) * 100) : 0 };
}

function diasComSessao() {
  return new Set(state.sessions.map((s) => s.data));
}
function streak() {
  const set = diasComSessao();
  if (!set.size) return 0;
  const d = new Date();
  // se ainda não estudou hoje, a corrente pode continuar viva contando de ontem
  if (!set.has(d.toISOString().slice(0, 10))) d.setDate(d.getDate() - 1);
  let n = 0;
  while (set.has(d.toISOString().slice(0, 10))) { n++; d.setDate(d.getDate() - 1); }
  return n;
}
function horasTotais() {
  return state.sessions.reduce((a, s) => a + (Number(s.min) || 0), 0) / 60;
}
function sessoesUltimasSemanas(sem = 8) {
  const lim = new Date();
  lim.setDate(lim.getDate() - sem * 7);
  const li = lim.toISOString().slice(0, 10);
  return state.sessions.filter((s) => s.data >= li).length;
}
/** Regra 2: duas sessões-alvo (seg/sex) perdidas seguidas acende o alerta. */
function alertaRegra2() {
  const set = diasComSessao();
  if (!set.size) return false; // o plano ainda não começou — não há corrente para quebrar
  const alvos = [];
  const d = new Date();
  for (let i = 0; i < 21 && alvos.length < 2; i++) {
    const dt = new Date(d); dt.setDate(d.getDate() - i);
    const dow = dt.getDay();
    if (dow === 1 || dow === 5) {
      const iso = dt.toISOString().slice(0, 10);
      if (iso < hoje() || (iso === hoje() && new Date().getHours() >= 23)) alvos.push(iso);
    }
  }
  return alvos.length === 2 && alvos.every((a) => !set.has(a));
}

/* ---------------- render: painel ---------------- */
function renderPainel() {
  const g = progressoGeral();
  const st = streak();
  const h = horasTotais();

  $("#streakNum").textContent = st;
  $("#streakChip").classList.toggle("cold", st === 0);

  $("#ringVal").textContent = g.pct + "%";
  const circ = 2 * Math.PI * 56;
  const fill = $("#ringFill");
  fill.style.strokeDasharray = circ;
  fill.style.strokeDashoffset = circ * (1 - g.pct / 100);

  $("#pgResumo").innerHTML =
    `<strong>${g.feitos}</strong> de ${g.total} marcos concluídos.` +
    (g.pct === 0 ? " O plano ainda não começou — e tudo bem, ele começa na próxima segunda, 19h." : "");

  $("#mSessoes").textContent = state.sessions.length;
  $("#mHoras").textContent = h.toFixed(1).replace(".", ",");
  $("#mNotas").textContent = state.notes.length;
  $("#mUlt8").textContent = sessoesUltimasSemanas(8);

  // barras por fase
  $("#fasesProg").innerHTML = PLANO.fases
    .map((f) => {
      const p = progressoFase(f);
      return `<div class="progress-row">
        <div class="nm">${esc(f.nome)}<small>${esc(f.periodo)} · ${p.feitos}/${p.total}</small></div>
        <div class="bar"><i style="width:${p.pct}%"></i></div>
        <div class="pct">${p.pct}%</div>
      </div>`;
    })
    .join("");

  // alerta da regra 2
  const box = $("#alertaBox");
  if (alertaRegra2()) {
    box.innerHTML = `<div class="callout warn"><strong>Regra 2 acendeu.</strong>
      Você perdeu as duas últimas sessões-alvo (segunda e sexta). Uma falha é acidente, duas é começo de abandono.
      Não tente recuperar tudo: faça <strong>25 minutos hoje</strong> e registre. Só isso.</div>`;
  } else if (st === 0 && state.sessions.length) {
    box.innerHTML = `<div class="callout">A corrente está em zero. Regra 1: <strong>25 minutos</strong> resolvem isso hoje.</div>`;
  } else if (!state.sessions.length) {
    box.innerHTML = `<div class="callout">Nada registrado ainda. O roteiro da primeira noite está na aba
      <a href="#rotina">Rotina</a> — e a Fase 0 inteira cabe numa semana.</div>`;
  } else {
    box.innerHTML = "";
  }

  renderHeat();
  renderRevisao();
}

function renderHeat() {
  const SEM = 26;
  const map = {};
  state.sessions.forEach((s) => { map[s.data] = (map[s.data] || 0) + (Number(s.min) || 0); });

  const fim = new Date();
  fim.setDate(fim.getDate() + (6 - fim.getDay())); // sábado desta semana
  const ini = new Date(fim);
  ini.setDate(ini.getDate() - (SEM * 7 - 1));

  let html = "";
  const hj = hoje();
  for (let i = 0; i < SEM * 7; i++) {
    const d = new Date(ini);
    d.setDate(ini.getDate() + i);
    const iso = d.toISOString().slice(0, 10);
    const min = map[iso] || 0;
    const l = min === 0 ? 0 : min <= 30 ? 1 : min <= 75 ? 2 : 3;
    const fut = iso > hj ? " future" : "";
    const t = min ? `${fmtBR(iso)} — ${min} min` : fmtBR(iso);
    html += `<i data-l="${l}" class="${fut.trim()}" title="${t}"></i>`;
  }
  $("#heat").innerHTML = html;
}

function renderRevisao() {
  $("#revisaoLista").innerHTML = PLANO.revisao8semanas
    .map((q, i) => `<li><strong style="color:var(--neon)">${i + 1}.</strong> ${q}</li>`)
    .join("");
}

/* ---------------- render: roteiro ---------------- */
function renderRoteiro() {
  $("#roteiro").innerHTML = PLANO.fases
    .map((f) => {
      const p = progressoFase(f);
      const grupos = f.grupos
        .map((g) => {
          const feitos = g.itens.filter((i) => state.checks[i.id]).length;
          return `<div class="chk-group">
            <div class="gh"><h3>${esc(g.nome)}</h3><span class="cnt">${feitos}/${g.itens.length}</span></div>
            ${g.desc ? `<p class="chk-desc">${g.desc}</p>` : ""}
            ${g.itens.map(itemHTML).join("")}
          </div>`;
        })
        .join("");

      const tabela = f.tabela
        ? `<div class="table-wrap" style="margin:18px 0 4px"><table>
            <thead><tr>${f.tabela.head.map((h) => `<th>${esc(h)}</th>`).join("")}</tr></thead>
            <tbody>${f.tabela.rows.map((r) => `<tr>${r.map((c) => `<td>${esc(c)}</td>`).join("")}</tr>`).join("")}</tbody>
          </table></div>`
        : "";

      return `<section class="card neon" style="margin-bottom:20px">
        <div style="display:flex;align-items:baseline;gap:14px;flex-wrap:wrap">
          <div style="flex:1;min-width:220px">
            <div class="eyebrow">${esc(f.periodo)}</div>
            <h2 style="font-size:1.2rem">${esc(f.nome)}</h2>
          </div>
          <div class="pct" style="font-family:var(--mono);color:var(--neon);font-size:1.1rem">${p.pct}%</div>
        </div>
        <div class="bar big" style="margin:12px 0 16px"><i style="width:${p.pct}%"></i></div>
        <p class="muted" style="margin-top:0">${f.objetivo}</p>
        ${tabela}
        ${grupos}
        ${f.nota ? `<div class="callout">${f.nota}</div>` : ""}
      </section>`;
    })
    .join("");

  $$("#roteiro input[type=checkbox]").forEach((c) =>
    c.addEventListener("change", () => {
      if (c.checked) state.checks[c.dataset.id] = true;
      else delete state.checks[c.dataset.id];
      save();
      renderRoteiro();
      renderPainel();
      if (c.checked) toast("Marco concluído. Bom trabalho.");
    })
  );
}

const CHECK_SVG =
  '<svg viewBox="0 0 24 24" fill="none" stroke="#04121a" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>';

function itemHTML(i) {
  const on = !!state.checks[i.id];
  return `<label class="chk">
    <input type="checkbox" data-id="${i.id}" ${on ? "checked" : ""}>
    <span class="box">${CHECK_SVG}</span>
    <span class="txt">${i.txt}</span>
  </label>`;
}

/* ---------------- render: rotina / regras / recursos ---------------- */
function renderRotina() {
  $("#rotina").innerHTML = PLANO.rotina
    .map(
      (d) => `<section class="card rotina-card">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:4px">
        <h2 style="margin:0">${esc(d.dia)}</h2>
        <span class="tag ${d.tom === "leve" ? "leve" : ""}">${d.tom === "leve" ? "leve" : "densa"}</span>
      </div>
      <div class="faint" style="margin-bottom:12px">${esc(d.sub)}</div>
      <div class="table-wrap"><table><tbody>
        ${d.blocos.map((b) => `<tr><td>${esc(b[0])}</td><td>${b[1]}</td></tr>`).join("")}
      </tbody></table></div>
      ${d.obs ? `<div class="callout">${d.obs}</div>` : ""}
    </section>`
    )
    .join("");

  $("#primeiroDia").innerHTML = PLANO.primeiroDia
    .map((p) => `<tr><td>${esc(p[0])}</td><td>${p[1]}</td></tr>`)
    .join("");
}

function renderRegras() {
  $("#regras").innerHTML = PLANO.regras
    .map(
      (r) => `<div class="regra ${r.destaque ? "destaque" : ""}">
      <div class="n">${r.n}</div>
      <div><h3>${esc(r.titulo)}</h3><p>${r.txt}</p></div>
    </div>`
    )
    .join("");

  $("#foco").innerHTML = PLANO.foco
    .map((f) => `<li><strong style="color:var(--neon-soft)">${esc(f[0])}.</strong> ${f[1]}</li>`)
    .join("");
}

function renderRecursos() {
  $("#recursos").innerHTML = PLANO.recursos
    .map(
      (g) => `<section class="card" style="margin-bottom:18px">
      <div class="eyebrow">${esc(g.grupo)}</div>
      <div class="table-wrap"><table>
        <thead><tr><th>Recurso</th><th>Quando usar</th><th>Custo</th></tr></thead>
        <tbody>${g.itens
          .map(
            (i) => `<tr>
              <td><a href="${esc(i[1])}" target="_blank" rel="noopener">${esc(i[0])} ↗</a></td>
              <td class="muted">${i[2]}</td>
              <td class="faint">${esc(i[3])}</td>
            </tr>`
          )
          .join("")}</tbody>
      </table></div>
    </section>`
    )
    .join("");
}

/* ---------------- notas ---------------- */
let notaSel = null;

function renderNotas() {
  const lista = [...state.notes].sort((a, b) => (b.data + b.id).localeCompare(a.data + a.id));
  const el = $("#notaLista");

  if (!lista.length) {
    el.innerHTML = `<div class="empty">Nenhuma anotação ainda.<br>Regra 6: cinco linhas no fim de cada sessão. Sem capricho.</div>`;
  } else {
    el.innerHTML = lista
      .map(
        (n) => `<div class="note-item ${n.id === notaSel ? "sel" : ""}" data-id="${n.id}">
        <div class="t">${esc(n.titulo || "(sem título)")}</div>
        <div class="d">${fmtBR(n.data)} · ${diaSemana(n.data)}${n.tags ? " · " + esc(n.tags) : ""}</div>
        <div class="p">${esc((n.corpo || "").replace(/\s+/g, " ").slice(0, 70))}</div>
      </div>`
      )
      .join("");

    $$(".note-item", el).forEach((d) =>
      d.addEventListener("click", () => abrirNota(d.dataset.id))
    );
  }
  $("#notaCount").textContent = state.notes.length;
}

function novaNota() {
  notaSel = null;
  $("#nData").value = hoje();
  $("#nTitulo").value = "";
  $("#nTags").value = "";
  $("#nCorpo").value = "";
  $("#nDel").style.display = "none";
  renderNotas();
  $("#nTitulo").focus();
}

function abrirNota(id) {
  const n = state.notes.find((x) => x.id === id);
  if (!n) return;
  notaSel = id;
  $("#nData").value = n.data;
  $("#nTitulo").value = n.titulo || "";
  $("#nTags").value = n.tags || "";
  $("#nCorpo").value = n.corpo || "";
  $("#nDel").style.display = "";
  renderNotas();
}

function salvarNota() {
  const data = $("#nData").value || hoje();
  const titulo = $("#nTitulo").value.trim();
  const corpo = $("#nCorpo").value;
  const tags = $("#nTags").value.trim();

  if (!titulo && !corpo.trim()) return toast("Escreva alguma coisa antes de salvar.");

  if (notaSel) {
    const n = state.notes.find((x) => x.id === notaSel);
    Object.assign(n, { data, titulo, corpo, tags, edit: Date.now() });
  } else {
    const id = "n" + Date.now().toString(36);
    state.notes.push({ id, data, titulo, corpo, tags, edit: Date.now() });
    notaSel = id;
  }
  save();
  renderNotas();
  renderPainel();
  $("#nDel").style.display = "";
  toast("Anotação salva.");
}

function apagarNota() {
  if (!notaSel) return;
  if (!confirm("Apagar esta anotação? Não tem como desfazer.")) return;
  state.notes = state.notes.filter((n) => n.id !== notaSel);
  save();
  novaNota();
  renderPainel();
  toast("Anotação apagada.");
}

function notaMD(n) {
  const tags = n.tags ? n.tags.split(/[,\s]+/).filter(Boolean).map((t) => "#" + t.replace(/^#/, "")).join(" ") : "";
  return `# ${n.titulo || "Anotação"}\n\n> ${fmtBR(n.data)} (${diaSemana(n.data)})${tags ? " · " + tags : ""}\n\n${n.corpo || ""}\n`;
}

function exportarNotaAtual() {
  const n = notaSel ? state.notes.find((x) => x.id === notaSel) : null;
  const alvo = n || {
    data: $("#nData").value || hoje(),
    titulo: $("#nTitulo").value,
    corpo: $("#nCorpo").value,
    tags: $("#nTags").value,
  };
  baixar(`${alvo.data}-${slug(alvo.titulo)}.md`, notaMD(alvo));
  toast("Baixado. Mova o arquivo para a pasta notas/ e commite.");
}

function exportarTodasNotas() {
  if (!state.notes.length) return toast("Não há anotações para exportar.");
  const md = [...state.notes]
    .sort((a, b) => a.data.localeCompare(b.data))
    .map(notaMD)
    .join("\n---\n\n");
  baixar(`anotacoes-${hoje()}.md`, `# Anotações — cyber\n\n${md}`);
  toast(`${state.notes.length} anotações exportadas.`);
}

/* ---------------- sessões ---------------- */
function renderSessoes() {
  const lista = [...state.sessions].sort((a, b) => b.data.localeCompare(a.data));
  const el = $("#sessLista");
  if (!lista.length) {
    el.innerHTML = `<div class="empty">Nenhuma sessão registrada.<br>Registre até as de 25 minutos — principalmente as de 25 minutos.</div>`;
  } else {
    el.innerHTML = lista
      .map(
        (s, i) => `<div class="sess-item">
        <div class="dt">${fmtBR(s.data)}</div>
        <div class="ty">${esc(s.tipo)}</div>
        <div class="mi">${s.min} min</div>
        <div class="rs">${esc(s.resumo || "—")}</div>
        <button class="btn ghost sm" data-del="${esc(s.id || String(i))}">apagar</button>
      </div>`
      )
      .join("");
    $$("[data-del]", el).forEach((b) =>
      b.addEventListener("click", () => {
        state.sessions = state.sessions.filter((x) => (x.id || "") !== b.dataset.del);
        save();
        renderSessoes();
        renderPainel();
        toast("Sessão removida.");
      })
    );
  }
  $("#sessCount").textContent = state.sessions.length;
}

function registrarSessao() {
  const data = $("#sData").value || hoje();
  const tipo = $("#sTipo").value;
  const min = Number($("#sMin").value) || 0;
  const resumo = $("#sResumo").value.trim();
  if (min <= 0) return toast("Quantos minutos? Mesmo 25 conta.");

  state.sessions.push({ id: "s" + Date.now().toString(36), data, tipo, min, resumo });

  // a Regra 6 vira anotação automaticamente
  if (resumo && $("#sVirarNota").checked) {
    state.notes.push({
      id: "n" + (Date.now() + 1).toString(36),
      data,
      titulo: `Sessão ${fmtBR(data)} — ${tipo}`,
      corpo: resumo,
      tags: "sessao",
      edit: Date.now(),
    });
  }
  save();
  $("#sResumo").value = "";
  $("#sMin").value = "";
  renderSessoes();
  renderNotas();
  renderPainel();

  const st = streak();
  toast(st > 1 ? `Registrado. Corrente: ${st} dias.` : "Registrado. A corrente começou.");
}

/* ---------------- backup ---------------- */
function exportarJSON() {
  baixar(`cyber-tracker-backup-${hoje()}.json`, JSON.stringify(state, null, 2));
  toast("Backup baixado. Commite junto com as anotações.");
}
function importarJSON(file) {
  const r = new FileReader();
  r.onload = () => {
    try {
      const d = JSON.parse(r.result);
      if (!d || typeof d !== "object") throw new Error("formato");
      if (!confirm("Isso substitui todos os dados atuais deste navegador. Continuar?")) return;
      Object.assign(state, base(), d);
      save();
      renderTudo();
      toast("Backup restaurado.");
    } catch {
      toast("Arquivo inválido.");
    }
  };
  r.readAsText(file);
}
function zerarTudo() {
  if (!confirm("Apagar TODO o progresso, anotações e sessões deste navegador?")) return;
  if (!confirm("Sério mesmo? Não tem desfazer.")) return;
  localStorage.removeItem(KEY);
  Object.assign(state, base());
  renderTudo();
  toast("Zerado.");
}

/* ---------------- abas ---------------- */
function irPara(id) {
  $$(".panel").forEach((p) => p.classList.toggle("active", p.id === "tab-" + id));
  $$("nav.tabs button").forEach((b) => b.classList.toggle("active", b.dataset.tab === id));
  location.hash = id;
  window.scrollTo({ top: 0, behavior: "instant" });
}

/* ---------------- boot ---------------- */
function renderTudo() {
  renderPainel();
  renderRoteiro();
  renderRotina();
  renderRegras();
  renderRecursos();
  renderNotas();
  renderSessoes();
}

document.addEventListener("DOMContentLoaded", () => {
  renderTudo();

  $$("nav.tabs button").forEach((b) =>
    b.addEventListener("click", () => irPara(b.dataset.tab))
  );

  $("#nNova").addEventListener("click", novaNota);
  $("#nSalvar").addEventListener("click", salvarNota);
  $("#nDel").addEventListener("click", apagarNota);
  $("#nExport").addEventListener("click", exportarNotaAtual);
  $("#nExportAll").addEventListener("click", exportarTodasNotas);
  $("#nCopiar").addEventListener("click", () => {
    const n = notaSel ? state.notes.find((x) => x.id === notaSel) : null;
    copiar(notaMD(n || { data: $("#nData").value || hoje(), titulo: $("#nTitulo").value, corpo: $("#nCorpo").value, tags: $("#nTags").value }));
  });

  $("#sSalvar").addEventListener("click", registrarSessao);
  $("#bExport").addEventListener("click", exportarJSON);
  $("#bZerar").addEventListener("click", zerarTudo);
  $("#bImport").addEventListener("change", (e) => e.target.files[0] && importarJSON(e.target.files[0]));

  $("#nData").value = hoje();
  $("#sData").value = hoje();
  // sugere o tipo de sessão pelo dia da semana
  const dow = new Date().getDay();
  $("#sTipo").value = dow === 1 ? "Segunda — conteúdo novo"
    : dow === 5 ? "Sexta — lab leve"
    : dow === 6 ? "Sábado — consolidação"
    : dow === 0 ? "Domingo — livre"
    : "Extra / reposição";

  // ctrl+s salva a nota quando a aba de notas está aberta
  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "s" && $("#tab-notas").classList.contains("active")) {
      e.preventDefault();
      salvarNota();
    }
  });

  const h = location.hash.slice(1);
  if (h && $("#tab-" + h)) irPara(h);

  window.addEventListener("hashchange", () => {
    const t = location.hash.slice(1);
    if (t && $("#tab-" + t) && !$("#tab-" + t).classList.contains("active")) irPara(t);
  });
});
