# cyber — plano de estudos

Tracker do meu plano de estudos de cibersegurança (14–16 meses, ~10h efetivas/semana).

**Site:** https://jandirneto.github.io/cyber/
**Plano completo:** [`PLANO.MD`](PLANO.MD)

---

## O que tem aqui

| Aba | Para quê |
|---|---|
| **Painel** | Progresso geral, corrente de dias, heatmap de presença, alerta da Regra 2 |
| **Roteiro & Checklists** | Todos os marcos das Fases 0 a 4, com progresso por fase |
| **Rotina** | Template semanal fixo (segunda densa, sexta leve, fim de semana) |
| **Anotações** | Editor markdown → exporta `.md` para commitar em `notas/` |
| **Sessões** | Registro das 5 linhas (Regra 6); alimenta a corrente e o heatmap |
| **Regras** | As 6 regras de operação + dicas de foco |
| **Recursos** | Plataformas, cursos, ferramentas e comunidades |
| **Backup** | Export/import do JSON — os dados vivem no `localStorage` |

HTML, CSS e JavaScript puros. Sem build, sem dependência, sem servidor.
Para rodar local: abra `index.html` no navegador.

---

## Fluxo de uma sessão

1. **19:00** — abre o site (ritual de abertura, zero decisão)
2. Estuda seguindo o quadro da aba **Rotina**
3. **22:15** — aba **Sessões**: minutos + as 5 linhas → *Registrar sessão*
4. Baixa o `.md`, move para `notas/`, e:

```bash
git add . && git commit -m "notas: 12/08 — DNS e resolução de nomes" && git push
```

O quadradinho verde do GitHub é a recompensa imediata. No fim, o tracker vira o portfólio.

---

## Aviso ao Jandir do mês 3

> **Regra 5 — Não reforme o sistema quando cansar.**
> Este site foi construído **uma vez**, fora do horário de estudo, e está **terminado**.
> Quando bater a vontade de adicionar gráfico novo, tema escuro alternativo, integração com a API do
> TryHackMe ou sync na nuvem: isso é procrastinação produtiva. Parece trabalho, dá dopamina e não
> ensina nada de segurança.
>
> Anota a ideia na aba **Anotações** com a tag `portfolio` e constrói **depois do mês 9**, como projeto
> de portfólio de verdade. Agora fecha o editor e abre o TryHackMe.

A única manutenção legítima é editar `assets/data.js` quando um recurso do plano mudar de nome.

---

## Backup

Os dados ficam no `localStorage` **do navegador**. Limpar cache apaga tudo.
A cada mês: aba **Backup** → *Baixar backup .json* → commite o arquivo em `notas/`.
