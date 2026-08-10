/* ------------------------------------------------------------------
   data.js — o plano em forma de dados.
   Editar aqui é a ÚNICA manutenção legítima deste site (marcar que um
   recurso mudou de nome, por exemplo). Não venha reformar o resto.
------------------------------------------------------------------- */

const PLANO = {
  meta: {
    cargaSemanal: "12h nominais → ~9-10h efetivas",
    duracao: "14 a 16 meses",
    inicio: null, // definido pelo usuário na aba Painel
  },

  fases: [
    {
      id: "f0",
      nome: "Fase 0 — Setup",
      periodo: "Semana 1",
      objetivo:
        "Sair da inércia. Nenhum conteúdo pesado, só deixar tudo pronto e sentir o gosto.",
      nota:
        "Meta emocional: terminar a semana com a sensação de “isso é divertido”, não de “isso é enorme”.",
      grupos: [
        {
          nome: "Checklist",
          itens: [
            { id: "f0-thm", txt: "Criar conta no TryHackMe e completar as 2 primeiras salas do path <em>Pre Security</em>" },
            { id: "f0-vm", txt: "Instalar VirtualBox + uma VM Ubuntu (<strong>não Kali ainda</strong> — Kali é para depois)" },
            { id: "f0-repo", txt: "Criar repositório GitHub <code>cyber-notes</code> com um README" },
            { id: "f0-anki", txt: "Instalar Anki e criar o deck “Cyber”" },
            { id: "f0-tracker", txt: "Escolher e configurar o tracker (é este site — já está feito)" },
            { id: "f0-bandit", txt: "OverTheWire — Bandit, níveis 0 a 5" },
          ],
        },
      ],
    },

    {
      id: "f1",
      nome: "Fase 1 — Fundamentos",
      periodo: "Meses 1 a 4",
      objetivo:
        "O roteiro genérico dá 3 meses. Você leva 4, porque redes é seu ponto cego e vale gastar mais tempo ali.",
      nota:
        "Marco: terminou o mês 4, você já sabe mais de segurança do que a maioria dos desenvolvedores.",
      grupos: [
        {
          nome: "Mês 1 — Redes, parte 1",
          desc:
            "Como computadores conversam. Endereçamento IP, MAC, camadas, TCP vs UDP, portas. Recursos: TryHackMe <em>Pre Security</em> (Networking) e Cisco NetAcad <em>Introduction to Cybersecurity</em> (pt).",
          itens: [
            { id: "m1-a", txt: "Sei explicar o que acontece quando digito <code>google.com</code> no navegador, do início ao fim" },
            { id: "m1-b", txt: "Sei ler o resultado de um <code>ping</code> e de um <code>traceroute</code>" },
            { id: "m1-c", txt: "Entendo a diferença entre IP privado e público, e o que o roteador de casa faz" },
          ],
        },
        {
          nome: "Mês 2 — Redes, parte 2 + Linux",
          desc:
            "DNS, DHCP, HTTP/HTTPS, sub-redes. Linux na unha. Cisco NetAcad (trilha de redes, pt) + OverTheWire Bandit até o nível 20.",
          itens: [
            { id: "m2-a", txt: "Concluí o path <em>Pre Security</em> no TryHackMe" },
            { id: "m2-b", txt: "Navego no terminal Linux sem consultar comando básico" },
            { id: "m2-c", txt: "Entendo permissões (<code>chmod</code>, <code>chown</code>), processos, <code>systemctl</code>, SSH" },
            { id: "m2-d", txt: "Fiz sub-netting no papel, sem calculadora" },
          ],
        },
        {
          nome: "Mês 3 — Conceitos de segurança + Windows",
          desc:
            "Tríade CIA, malware, phishing, criptografia básica, autenticação. Windows e noções de Active Directory — a maioria dos ataques corporativos passa por AD. TryHackMe <em>Cyber Security 101</em> + Cisco <em>Fundamentos em Cibersegurança</em>.",
          itens: [
            { id: "m3-a", txt: "Concluí o curso da Cisco (com certificado — guarde, vale no currículo)" },
            { id: "m3-b", txt: "Explico com minhas palavras: CIA, phishing, engenharia social, hash vs criptografia" },
            { id: "m3-c", txt: "Montei uma VM Windows e entendi o básico de usuários/permissões" },
          ],
        },
        {
          nome: "Mês 4 — Python para segurança + fechar lacunas",
          desc:
            "Aqui você acelera. Python para você é aprender biblioteca, não aprender lógica.",
          itens: [
            { id: "m4-a", txt: "Script 1 — scanner de portas simples (<code>socket</code>)" },
            { id: "m4-b", txt: "Script 2 — cliente HTTP (<code>requests</code>)" },
            { id: "m4-c", txt: "Script 3 — parser de log" },
            { id: "m4-d", txt: "Script 4 — automação com <code>requests</code>" },
            { id: "m4-e", txt: "Script 5 — algo usando <code>socket</code> cru" },
            { id: "m4-f", txt: "Instalei Kali numa VM e montei o home lab (Kali + Metasploitable na mesma rede virtual)" },
            { id: "m4-g", txt: "Concluí o path <em>Cyber Security 101</em>" },
            { id: "m4-h", txt: "Repositório GitHub com 4 meses de anotações e scripts" },
          ],
        },
      ],
    },

    {
      id: "f2",
      nome: "Fase 2 — Certificação base + prática guiada",
      periodo: "Meses 5 a 8",
      objetivo:
        "A Security+ atual é a SY0-701; a SY0-801 (com conteúdo de IA/LLM) chega por volta de nov/2026. Você cai nessa fase em 2027 → provavelmente fará a 801. <strong>Não compre material da 701 agora.</strong>",
      tabela: {
        head: ["Opção", "Custo", "Reconhecimento"],
        rows: [
          ["CompTIA Security+", "~US$400", "Alto, internacional"],
          ["Cisco CCNA1 + CyberOps Associate", "Gratuito (curso)", "Bom, especialmente no BR"],
          ["TryHackMe SEC1 (cert do Cyber Security 101)", "Baixo", "Crescente, prova prática"],
        ],
      },
      grupos: [
        {
          nome: "Checklist",
          itens: [
            { id: "f2-a", txt: "Decidi qual caminho de certificação vou seguir" },
            { id: "f2-b", txt: "Estudei o conteúdo completo (Professor Messer no YouTube como apoio gratuito)" },
            { id: "f2-c", txt: "Fiz a prova / concluí a trilha" },
            { id: "f2-d", txt: "Completei 25-30 salas no TryHackMe" },
            { id: "f2-e", txt: "Meu home lab está de pé <strong>e eu uso ele</strong>" },
          ],
        },
      ],
    },

    {
      id: "f3",
      nome: "Fase 3 — Testar as trilhas",
      periodo: "Meses 9 a 11",
      objetivo:
        "Não escolha especialização por vídeo do YouTube. Teste as quatro na prática antes de investir tempo e dinheiro.",
      nota:
        "GRC e Cloud Security conversam direto com o que você já faz na TOTVS — processo, projeto, ambiente corporativo. São as trilhas onde sua experiência vira vantagem em vez de ser descartada. Não é ordem para escolhê-las; é ordem para testá-las de verdade.",
      tabela: {
        head: ["Trilha", "O que é o dia a dia", "Onde testar"],
        rows: [
          ["Blue Team / SOC", "Monitorar alertas, investigar incidentes, SIEM", "letsdefend.io"],
          ["Red Team / Pentest", "Invadir sistemas de forma autorizada, achar vulnerabilidades", "hackthebox.com"],
          ["GRC", "Política, LGPD, ISO 27001, auditoria, gestão de risco", "Normas + conversar com quem faz"],
          ["Cloud Security", "Segurança em AWS/Azure/GCP, Zero Trust", "AWS/Azure free tier"],
        ],
      },
      grupos: [
        {
          nome: "Checklist",
          itens: [
            { id: "f3-a", txt: "3+ laboratórios de Blue Team" },
            { id: "f3-b", txt: "3+ máquinas de Red Team" },
            { id: "f3-c", txt: "Li sobre a rotina real de GRC e Cloud" },
            { id: "f3-d", txt: "<strong>Escolhi minha trilha principal</strong>" },
          ],
        },
      ],
    },

    {
      id: "f4",
      nome: "Fase 4 — Especialização + portfólio",
      periodo: "Meses 12 a 16",
      objetivo: "A partir daqui construir ferramenta É o trabalho — vira portfólio.",
      grupos: [
        {
          nome: "Checklist",
          itens: [
            { id: "f4-a", txt: "Escolhi 1 certificação intermediária da minha trilha" },
            { id: "f4-b", txt: "Repositório GitHub organizado com writeups e scripts" },
            { id: "f4-c", txt: "Perfil público no TryHackMe/HackTheBox no currículo" },
            { id: "f4-d", txt: "Participei de pelo menos 1 CTF em equipe" },
            { id: "f4-e", txt: "Acompanho comunidades e notícias da área semanalmente" },
            { id: "f4-f", txt: "Atualizei LinkedIn e comecei a olhar vagas" },
          ],
        },
      ],
    },
  ],

  regras: [
    {
      n: 1,
      titulo: "Sessão mínima: 25 minutos",
      txt: "Dia ruim não é dia zerado. Se a segunda desandou, você faz 25 minutos e marca presença. Vinte e cinco minutos > zero — não porque você aprende muito, mas porque <strong>quebrar a corrente é o que mata o projeto</strong>, não perder uma noite.",
    },
    {
      n: 2,
      titulo: "Nunca falhe duas vezes seguidas",
      txt: "Furou a segunda? Tudo bem. Furou segunda <strong>e</strong> sexta? Aí acende o alerta. Uma falha é acidente, duas é o começo de um abandono. A segunda sessão perdida é a que você vai buscar de qualquer jeito, nem que seja com 25 minutos no domingo.",
    },
    {
      n: 3,
      titulo: "Nunca dois blocos de teoria seguidos",
      txt: "Alterne sempre: <em>assistir/ler</em> → <em>fazer</em>. Ver 50 min de vídeo sobre TCP e depois mais 50 min lendo sobre DNS é receita para você estar no Instagram aos 22 minutos do segundo bloco. Vídeo → terminal. Leitura → laboratório. Sempre.",
    },
    {
      n: 4,
      titulo: "Quando travar, comece pelas mãos",
      txt: "Chegou 19h e a ideia de estudar dá preguiça física? <strong>Não comece pela teoria.</strong> Abre a VM e digita um comando. Faz uma sala do TryHackMe. A ação gera a vontade, não o contrário.",
    },
    {
      n: 5,
      titulo: "Não reforme o sistema quando cansar",
      destaque: true,
      txt: "Armadilha específica sua: você constrói jogos de browser, gosta de ferramenta, gosta de sistema. Quando o estudo ficar chato, vai bater a vontade de “criar um tracker melhor”, “montar um dashboard”, “automatizar as anotações”. <strong>Isso é procrastinação produtiva</strong> — parece trabalho, dá dopamina, e não te ensina segurança. <em>Este site já é a ferramenta pronta. Ele está terminado. Se você abriu o código dele em vez de abrir o TryHackMe, você está furando a Regra 5 agora.</em>",
    },
    {
      n: 6,
      titulo: "Termine toda sessão anotando 5 linhas",
      txt: "Últimos 10 minutos: escreve o que aprendeu. Cinco linhas, sem capricho. Fixa o conteúdo, alimenta o gráfico de commits do GitHub (recompensa visual) e vira portfólio automático.",
    },
  ],

  rotina: [
    {
      dia: "Segunda",
      sub: "Dia do conteúdo novo · 19h00 – 22h30",
      tom: "densa",
      blocos: [
        ["19:00–19:10", "<strong>Ritual de abertura.</strong> Abre o tracker, revisa o Anki do dia. Zero decisão."],
        ["19:10–20:00", "<strong>Bloco 1 — Teoria.</strong> Curso, vídeo, leitura."],
        ["20:00–20:20", "<strong>Pausa de verdade.</strong> Sai da cadeira, sai da tela. Não é hora de celular."],
        ["20:20–21:10", "<strong>Bloco 2 — Prática.</strong> Laboratório do que acabou de ver. Mão no terminal."],
        ["21:10–21:30", "Pausa / lanche."],
        ["21:30–22:15", "<strong>Bloco 3 — TryHackMe.</strong> Sala guiada, mais leve, com pontos e badge no final."],
        ["22:15–22:25", "<strong>Registro.</strong> 5 linhas + commit + marcar checklist."],
        ["22:30–23:00", "<strong>LIVRE.</strong> Buffer proposital. Não agende nada aqui."],
      ],
      obs: "A meia hora vazia não é desperdício — é o que faz o plano sobreviver. Plano cheio até o último minuto quebra na primeira semana ruim.",
    },
    {
      dia: "Sexta",
      sub: "Dia leve · 19h00 – 21h30",
      tom: "leve",
      blocos: [
        ["19:00–19:10", "Ritual"],
        ["19:10–20:00", "<strong>Laboratório prático</strong> (TryHackMe / OverTheWire)"],
        ["20:00–20:20", "Pausa"],
        ["20:20–21:10", "<strong>Continuação do lab</strong> ou vídeo prático (Professor Messer, canal de CTF)"],
        ["21:10–21:20", "Registro"],
      ],
      obs: "Sexta é o dia mais frágil da semana. Se estiver impossível: 25 minutos e pronto. Uma sala curta. Marcou presença.",
    },
    {
      dia: "Sábado",
      sub: "Consolidação · 2h",
      tom: "leve",
      blocos: [
        ["45 min", "Revisão ativa — Anki + reler as anotações da semana"],
        ["15 min", "Pausa"],
        ["45 min", "Fechar pendências ou refazer o lab que não saiu"],
      ],
    },
    {
      dia: "Domingo",
      sub: "Diversão + planejamento · 2h",
      tom: "leve",
      blocos: [
        ["15 min", "<strong>Planejar a semana</strong> — marcar as 3 salas/módulos da semana"],
        ["45 min", "Lab livre / CTF / algo que você escolheu porque achou interessante"],
        ["15 min", "Pausa"],
        ["45 min", "Continuar"],
      ],
      obs: "Se quiser aumentar o fim de semana, aumente o domingo, não o sábado. Domingo é o dia divertido e é onde hora extra rende sem virar peso.",
    },
  ],

  foco: [
    ["Externalize o tempo", "Timer visível na mesa (físico ou app), não relógio. Cérebro com TDAH não sente tempo passar — precisa ver."],
    ["Celular em outro cômodo", "Não no silencioso, não virado pra baixo. Outro cômodo. A distância física é a única coisa consistente."],
    ["Regra dos 2 minutos para iniciar", "O compromisso não é “estudar 50 minutos”. É “abrir a VM e digitar um comando”. Iniciar é o gargalo — torne o início ridiculamente pequeno."],
    ["Recompensa definida ANTES", "Mês 2 → miniatura nova. Fase 1 (mês 4) → aquele jogo. Certificação → algo bem maior. Definida antes do bloco, não depois."],
    ["Ambiente com uma variação só", "Exatamente dois locais de estudo, alternando. Mais que dois vira desculpa para não começar."],
    ["Semana de reset a cada 8 semanas", "Carga reduzida planejada de propósito. Só TryHackMe leve, sem conteúdo novo. Evita o ciclo sprint → exaustão → abandono."],
    ["Trocar de atividade, não de plano", "Bateu tédio no meio do bloco? Não pare nem mude o método — pule para outro tipo de atividade dentro do mesmo assunto. Cansou de ler sobre DNS? Roda <code>dig</code> no terminal."],
    ["Semana de prova da Univille", "Mínimo: 25 min na segunda, 25 na sexta. Só manter a corrente. Está no orçamento do plano desde o início — não é fracasso."],
  ],

  recursos: [
    {
      grupo: "Plataformas de prática",
      itens: [
        ["TryHackMe", "https://tryhackme.com", "Do dia 1 em diante. É a espinha dorsal e o melhor sistema de gamificação que existe pra isso.", "Grátis / ~US$14 mês"],
        ["OverTheWire — Bandit", "https://overthewire.org/wargames/bandit/", "Meses 1-2, linha de comando Linux.", "Grátis"],
        ["picoCTF", "https://picoctf.org", "Mês 3+, fixar fundamentos brincando.", "Grátis"],
        ["LetsDefend", "https://letsdefend.io", "Fase 3, testar Blue Team.", "Freemium"],
        ["Hack The Box", "https://hackthebox.com", "Fase 3, testar Red Team.", "Freemium"],
      ],
    },
    {
      grupo: "Cursos estruturados",
      itens: [
        ["Cisco Networking Academy", "https://www.netacad.com/pt", "<em>Introduction to Cybersecurity</em> e a trilha de carreira, material em português e certificado gratuito.", "Grátis"],
        ["Professor Messer", "https://www.youtube.com/@professormesser", "Referência gratuita para certificações CompTIA.", "Grátis"],
        ["Mente Binária", "https://www.mentebinaria.com.br", "ONG brasileira do Fernando Mercês. Cursos gratuitos em português e Discord ativo.", "Grátis"],
      ],
    },
    {
      grupo: "Ferramentas (máximo 3 — mais que isso vira o projeto)",
      itens: [
        ["Anki", "https://apps.ankiweb.net", "Repetição espaçada. Não é opcional: é o que faz você não esquecer o que estudou há dois meses.", "Grátis"],
        ["Gráfico de commits do GitHub", "https://github.com/JandirNeto", "O tracker recomendado: você já tem o hábito, o feedback é imediato e o tracker vira portfólio.", "Grátis"],
        ["Goblin Tools", "https://goblin.tools", "Quebra tarefa grande em passos pequenos. Feito por um dev com TDAH.", "Grátis"],
        ["Focusmate", "https://focusmate.com", "<em>Body doubling</em> por vídeo. Parece bizarro e é das coisas mais eficazes que existem para TDAH.", "3 sessões/semana grátis"],
        ["Pomofocus", "https://pomofocus.io", "Timer pomodoro simples.", "Grátis"],
        ["Toggl Track", "https://toggl.com/track/", "Cronometra as horas. Ver o número acumulando é motivador por si só.", "Grátis"],
      ],
    },
    {
      grupo: "Comunidade (subestimado)",
      itens: [
        ["Discord da Mente Binária", "https://discord.gg/mentebinaria", "Comunidade brasileira, gente de verdade pra tirar dúvida em português.", "Grátis"],
        ["Discord do TryHackMe", "https://discord.gg/tryhackme", "Dúvida de sala, gente fazendo o mesmo path.", "Grátis"],
        ["Trilha de Cursos Gratuitos — InfoSec", "https://github.com/rodolfomarianocy/Trilha-de-Cursos-Gratuitos-para-InfoSec", "Guia consolidado em português.", "Grátis"],
        ["Guia de Cybersecurity", "https://github.com/arthurspk/guiadecybersecurity", "Outro guia grande em português.", "Grátis"],
      ],
    },
  ],

  primeiroDia: [
    ["19:00", "Criar conta no TryHackMe"],
    ["19:10", "Começar o path <em>Pre Security</em>, primeira sala"],
    ["20:00", "Pausa de 20 minutos, longe da tela"],
    ["20:20", "Baixar e instalar o VirtualBox, criar uma VM Ubuntu"],
    ["21:10", "Pausa"],
    ["21:30", "Entrar em overthewire.org, fazer Bandit nível 0 e 1"],
    ["22:15", "Criar o repositório <code>cyber-notes</code>, escrever 5 linhas sobre o dia, commitar"],
  ],

  revisao8semanas: [
    "Mantive pelo menos <strong>70%</strong> das sessões? (não 100% — 70%)",
    "Consigo explicar em voz alta 3 coisas que aprendi nas últimas 8 semanas?",
    "Ainda acho isso interessante?",
  ],
};
