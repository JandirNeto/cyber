# Plano de Estudos — Cybersegurança (customizado)

**Carga semanal:** 12h nominais → ~9-10h efetivas
**Duração estimada:** 14 a 16 meses até estar empregável na área
**Perfil:** já programa e usa Git, mas zero base em redes/segurança. TDAH.

---

## 1. O que muda no plano por causa do seu perfil

Três ajustes em cima do roteiro genérico:

**Você pode pular o "Módulo 0" inteiro.** Aquele bloco de 2-3 semanas de informática básica é para quem nunca abriu um terminal. Você monta projeto MVC em PHP, usa PDO, versiona com Git. Não é o seu caso.

**Python vai ser rápido.** O roteiro reserva semanas para "Python básico". Para você é questão de aprender as bibliotecas certas (`requests`, `socket`, `scapy`) — a lógica você já tem. Compacte isso e use o tempo sobrando em redes, que é onde está seu buraco real.

**Seu portfólio já tem infraestrutura.** Repositório GitHub, commits, README — você já sabe. A Fase 4 do roteiro original gasta tempo com isso; para você é só começar a usar desde a semana 1.

**O buraco real é redes.** É o único ponto onde você começa de fato do zero, e é a base de tudo em segurança. Se algum bloco vai receber tempo extra, é esse.

---

## 2. A conta de tempo (seja honesto aqui)

Seu tempo declarado é 12h/semana. Mas:

- **4h corridas de estudo focado não existem.** Nem com neurotípico. O realista é 3 blocos de 50 min com pausas de verdade, e sobra ~3h efetivas num período de 4h.
- **Sexta à noite depois da semana de trabalho é o dia mais frágil.** É o dia que você mais vai furar. Então sexta não recebe conteúdo denso — recebe laboratório e coisa divertida.
- **Semana de prova na Univille você vai perder.** Está previsto no plano abaixo. Não é fracasso, é orçamento.

Trabalhando com ~10h efetivas/semana, o roteiro de "12 meses" do documento original vira **14-16 meses**. Isso é normal e continua sendo rápido.

---

## 3. As 6 regras de operação (a parte mais importante)

Se você só levar uma coisa deste documento, leve esta seção. O conteúdo está na internet de graça — o que falha é o sistema em volta.

### Regra 1 — Sessão mínima: 25 minutos
Dia ruim não é dia zerado. Se a segunda desandou, você faz **25 minutos** e marca presença. Vinte e cinco minutos > zero, não porque você aprende muito, mas porque **quebrar a corrente é o que mata o projeto**, não perder uma noite.

### Regra 2 — Nunca falhe duas vezes seguidas
Furou a segunda? Tudo bem. Furou segunda **e** sexta? Aí acende o alerta. Uma falha é acidente, duas é o começo de um abandono. A segunda sessão perdida é a que você tem que ir buscar de qualquer jeito, nem que seja com 25 minutos no domingo.

### Regra 3 — Nunca dois blocos de teoria seguidos
Alterne sempre: *assistir/ler* → *fazer*. Ver 50 min de vídeo sobre TCP e depois mais 50 min lendo sobre DNS é receita para você estar no Instagram aos 22 minutos do segundo bloco. Vídeo → terminal. Leitura → laboratório. Sempre.

### Regra 4 — Quando travar, comece pelas mãos
Chegou 19h e a ideia de estudar dá preguiça física? **Não comece pela teoria.** Abre a VM e digita um comando. Faz uma sala do TryHackMe. A ação gera a vontade, não o contrário. Teoria é o que você faz depois de já estar aquecido, nunca para aquecer.

### Regra 5 — Não reforme o sistema quando cansar
Isso é armadilha específica sua: você constrói jogos de browser, gosta de ferramenta, gosta de sistema. Quando o estudo ficar chato, vai bater a vontade de "criar um tracker melhor", "montar um dashboard do progresso", "automatizar as anotações". **Isso é procrastinação produtiva** — parece trabalho, dá dopamina, e não te ensina segurança. Use ferramenta pronta. Se quiser construir alguma coisa, construa como projeto de portfólio depois do mês 9, não como sistema de estudo agora.

### Regra 6 — Termine toda sessão anotando 5 linhas
Últimos 10 minutos: escreve no repositório o que aprendeu. Cinco linhas, sem capricho. Isso serve para três coisas ao mesmo tempo: fixa o conteúdo, alimenta o gráfico de commits do GitHub (recompensa visual), e vira portfólio automático.

---

## 4. Template semanal fixo

Decore este quadro. A previsibilidade é o que economiza energia — você não deve gastar função executiva decidindo *o que* estudar hoje.

### SEGUNDA — Dia do conteúdo novo (19h00 – 22h30)

| Horário | Bloco |
|---|---|
| 19:00–19:10 | **Ritual de abertura.** Abre o tracker, revisa o Anki do dia (5 min). Zero decisão. |
| 19:10–20:00 | **Bloco 1 — Teoria.** Curso, vídeo, leitura. |
| 20:00–20:20 | **Pausa de verdade.** Sai da cadeira, sai da tela. Não é hora de celular. |
| 20:20–21:10 | **Bloco 2 — Prática.** Laboratório do que você acabou de ver. Mão no terminal. |
| 21:10–21:30 | **Pausa / lanche.** |
| 21:30–22:15 | **Bloco 3 — TryHackMe.** Sala guiada, mais leve, com pontos e badge no final. |
| 22:15–22:25 | **Registro.** 5 linhas + commit + marcar checklist. |
| 22:30–23:00 | **LIVRE.** Buffer proposital. Não agende nada aqui. |

> Aquela última meia hora vazia não é desperdício — é o que faz o plano sobreviver. Plano cheio até o último minuto quebra na primeira semana ruim.

### SEXTA — Dia leve (19h00 – 21h30)

Sexta é o dia mais frágil da semana, então recebe o conteúdo mais gostoso.

| Horário | Bloco |
|---|---|
| 19:00–19:10 | Ritual |
| 19:10–20:00 | **Laboratório prático** (TryHackMe / OverTheWire) |
| 20:00–20:20 | Pausa |
| 20:20–21:10 | **Continuação do lab** ou vídeo prático (Professor Messer, canal de CTF) |
| 21:10–21:20 | Registro |

Se a sexta estiver impossível: **25 minutos e pronto.** Uma sala curta. Marcou presença.

### SÁBADO (2h) — Consolidação
- 45 min: revisão ativa — Anki + reler as anotações da semana
- 15 min: pausa
- 45 min: fechar pendências ou refazer o lab que não saiu

### DOMINGO (2h) — Diversão + planejamento
- 15 min: **planejar a semana** (marcar as 3 salas/módulos da semana no tracker)
- 45 min: lab livre / CTF / algo que você escolheu porque achou interessante
- 15 min: pausa
- 45 min: continuar

> **Se quiser aumentar o fim de semana**, aumente o domingo, não o sábado. Domingo é o dia "divertido" e é onde horas extras rendem mais sem virar peso.

---

## 5. Roteiro por fase

### FASE 0 — Setup (Semana 1)

Objetivo: sair da inércia. Nenhum conteúdo pesado, só deixar tudo pronto e sentir o gosto.

- [ ] Criar conta no **TryHackMe** e completar as 2 primeiras salas do path *Pre Security*
- [ ] Instalar **VirtualBox** + uma VM **Ubuntu** (não Kali ainda — Kali é para depois)
- [ ] Criar repositório GitHub `cyber-notes` com um README
- [ ] Instalar **Anki** e criar o deck "Cyber"
- [ ] Escolher e configurar o tracker (ver seção 6)
- [ ] Fazer **OverTheWire — Bandit**, níveis 0 a 5

**Meta emocional da semana 1:** terminar com a sensação de "isso é divertido", não de "isso é enorme". Se você acabar a semana 1 empolgado, ganhou.

---

### FASE 1 — Fundamentos (Meses 1 a 4)

O documento original dá 3 meses. Você vai levar 4, porque redes é seu ponto cego e vale gastar mais tempo ali.

**Mês 1 — Redes, parte 1**
Como computadores conversam. Endereçamento IP, MAC, camadas, TCP vs UDP, portas.
- Recurso principal: TryHackMe *Pre Security* (módulo de Networking)
- Recurso em português: Cisco NetAcad — *Introduction to Cybersecurity* (netacad.com/pt)
- [ ] Sei explicar o que acontece quando digito `google.com` no navegador, do início ao fim
- [ ] Sei ler o resultado de um `ping` e de um `traceroute`
- [ ] Entendo a diferença entre IP privado e público, e o que o roteador de casa faz

**Mês 2 — Redes, parte 2 + Linux**
DNS, DHCP, HTTP/HTTPS, sub-redes. Linux na unha.
- Cisco NetAcad — trilha de redes (em português)
- OverTheWire Bandit até o nível 20
- [ ] Concluí o path *Pre Security* no TryHackMe
- [ ] Navego no terminal Linux sem consultar comando básico
- [ ] Entendo permissões (`chmod`, `chown`), processos, `systemctl`, SSH
- [ ] Fiz sub-netting no papel sem calculadora

**Mês 3 — Conceitos de segurança + Windows**
Tríade CIA, malware, phishing, criptografia básica, autenticação. Windows e noções de Active Directory (a maioria dos ataques corporativos passa por AD).
- TryHackMe *Cyber Security 101* (substituiu o antigo *Complete Beginner*)
- Cisco NetAcad — *Fundamentos em Cibersegurança*, em português
- [ ] Concluí o curso da Cisco (com certificado — guarde, vale no currículo)
- [ ] Explico com minhas palavras: CIA, phishing, engenharia social, hash vs criptografia
- [ ] Montei uma VM Windows e entendi o básico de usuários/permissões

**Mês 4 — Python para segurança + fechar lacunas**
Aqui você acelera. Python para você é aprender biblioteca, não aprender lógica.
- [ ] 5 scripts: scanner de portas simples, cliente HTTP, parser de log, automação com `requests`, script que usa `socket`
- [ ] Instalei Kali numa VM e montei o home lab (Kali + Metasploitable na mesma rede virtual)
- [ ] Concluí o path *Cyber Security 101*
- [ ] Repositório GitHub com 4 meses de anotações e scripts

**Marco:** terminou o mês 4, você já sabe mais de segurança do que a maioria dos desenvolvedores. Comemore de verdade (ver seção 7).

---

### FASE 2 — Certificação base + prática guiada (Meses 5 a 8)

**Decisão sobre certificação — leia isso antes:**

A **CompTIA Security+** é a certificação de entrada mais reconhecida. Detalhe de timing importante: a versão atual é a **SY0-701**, e a próxima versão (**SY0-801**, com conteúdo novo sobre IA e LLMs) tem lançamento previsto para o final de 2026, com disponibilidade geral por volta de novembro. Como você chegaria nessa fase em 2027, você provavelmente vai fazer a **801**. Conclusão prática: **não compre material da 701 agora** — ele vai estar desatualizado quando chegar sua vez.

O custo é o problema real: a prova sai por algo em torno de US$400. Se isso não couber no orçamento, as alternativas são legítimas:

| Opção | Custo | Reconhecimento |
|---|---|---|
| CompTIA Security+ | ~US$400 | Alto, internacional |
| Cisco CCNA1 + CyberOps Associate | Gratuito (curso) | Bom, especialmente em BR |
| TryHackMe SEC1 (cert do path Cyber Security 101) | Baixo | Crescente, prova prática |

- [ ] Decidi qual caminho de certificação vou seguir
- [ ] Estudei o conteúdo completo (usar Professor Messer no YouTube como apoio — é gratuito e é referência para CompTIA)
- [ ] Fiz a prova / concluí a trilha
- [ ] Completei 25-30 salas no TryHackMe
- [ ] Meu home lab está de pé e eu uso ele

---

### FASE 3 — Testar as trilhas (Meses 9 a 11)

Não escolha especialização por vídeo do YouTube. Teste as quatro na prática antes de investir tempo e dinheiro.

| Trilha | O que é o dia a dia | Onde testar |
|---|---|---|
| **Blue Team / SOC** | Monitorar alertas, investigar incidentes, SIEM | LetsDefend (letsdefend.io) |
| **Red Team / Pentest** | Invadir sistemas de forma autorizada, achar vulnerabilidades | HackTheBox (hackthebox.com) |
| **GRC** | Política, LGPD, ISO 27001, auditoria, gestão de risco | Ler normas + conversar com quem faz |
| **Cloud Security** | Segurança em AWS/Azure/GCP, Zero Trust | AWS/Azure free tier |

- [ ] 3+ laboratórios de Blue Team
- [ ] 3+ máquinas de Red Team
- [ ] Li sobre a rotina real de GRC e Cloud
- [ ] **Escolhi minha trilha principal**

> **Um comentário sobre seu perfil:** GRC e Cloud Security conversam de forma bem direta com o que você já faz na TOTVS — gestão de projeto, processo, automação, ambiente corporativo. São as duas trilhas onde sua experiência atual vira vantagem competitiva imediata em vez de ser descartada. Isso não significa que você deva escolher elas, significa que valem um teste honesto e não uma olhada por cima, porque elas costumam ser subestimadas por quem entra na área achando que segurança é só invadir coisa.

---

### FASE 4 — Especialização + portfólio (Meses 12 a 16)

- [ ] Escolhi 1 certificação intermediária da minha trilha
- [ ] Repositório GitHub organizado com writeups e scripts
- [ ] Perfil público no TryHackMe/HackTheBox no currículo
- [ ] Participei de pelo menos 1 CTF em equipe
- [ ] Acompanho comunidades e notícias da área semanalmente
- [ ] Atualizei LinkedIn e comecei a olhar vagas

---

## 6. Ferramentas de gamificação e tracking

Escolha **no máximo três** desta lista. Mais que isso vira o próprio projeto e você não estuda.

### A espinha dorsal (não é opcional)
**TryHackMe** — a plataforma em si já é o melhor sistema de gamificação que existe para isso: pontos, streak diário, badges, ranking global, barra de progresso do path. Deixe-a ser seu tracker principal de conteúdo. O plano Premium (~US$14/mês) libera bastante coisa e vale quando você chegar no mês 2-3; até lá o gratuito segura.

### Tracking de progresso — escolha UM

| Ferramenta | Para quê | Custo |
|---|---|---|
| **Notion** | Dashboard com checklist das fases, banco de anotações | Gratuito |
| **Obsidian** | Notas em markdown local, boas para conectar conceitos | Gratuito |
| **Gráfico de commits do GitHub** | Commitar as anotações diárias → os quadradinhos verdes viram o tracker | Gratuito |

> O gráfico do GitHub é a opção que eu recomendaria pra você: você já tem o hábito de commitar, o feedback visual é imediato, e no fim o "tracker" é literalmente o seu portfólio. Dois coelhos.

### Gamificação de hábito — se quiser um a mais
- **Habitica** (habitica.com) — transforma tarefas em RPG: XP, level, itens, party com amigos. Gratuito. Funciona bem para quem já é vidrado em jogo, mas exige manutenção; se você parar de alimentar, ele morre.
- **Anki** (apps.ankiweb.net) — repetição espaçada. Não é opcional, na real: é o que faz você não esquecer o que estudou há dois meses. Streak diário embutido. Gratuito no desktop e Android.

### Foco e função executiva
- **Goblin Tools** (goblin.tools) — gratuito, sem cadastro, quebra tarefa grande em passos pequenos. Feito por um dev com TDAH. Serve para quando "estudar redes" parece impossível e você precisa que vire "abrir o TryHackMe e clicar na sala 3".
- **Tiimo** — planner visual feito especificamente para cérebros neurodivergentes, com timeline colorida e timer de contagem regressiva. Pago (~US$8/mês), tem versão em português. Vale se cegueira temporal (perder a noção de quanto tempo passou) for seu problema principal.
- **Forest / Pomofocus** — timer pomodoro simples. Gratuito.
- **Focusmate** (focusmate.com) — *body doubling*: você entra numa chamada de vídeo com um desconhecido, cada um faz sua tarefa em silêncio, com câmera ligada. Parece bizarro e é uma das coisas mais eficazes que existem para TDAH. 3 sessões gratuitas por semana.
- **Toggl Track** — cronometra as horas de estudo. Ver o número acumulando é motivador por si só.

### Comunidade (subestimado)
- Discord da **Mente Binária** — comunidade brasileira, gente de verdade para tirar dúvida em português
- Discord do **TryHackMe**
- Grupos de CTF — participar de um CTF em equipe é o melhor antídoto contra desânimo

---

## 7. Dicas de foco específicas

**Externalize o tempo.** Timer visível na mesa (físico ou app), não relógio. Cérebro com TDAH não sente tempo passar — precisa ver.

**Celular em outro cômodo.** Não no silencioso, não virado pra baixo. Outro cômodo. A distância física é a única coisa que funciona de forma consistente.

**Regra dos 2 minutos para iniciar.** O compromisso não é "estudar 50 minutos". É "abrir a VM e digitar um comando". Uma vez começado, continuar é fácil. Iniciar é o gargalo, então torne o início ridiculamente pequeno.

**Recompensa imediata e concreta.** Sistema de marcos com recompensa que você realmente quer:
- Fim do mês 2 → imprime uma miniatura nova
- Fim da Fase 1 (mês 4) → jogo ou expansão que você está de olho
- Certificação passada → algo bem maior

O truque é definir a recompensa **antes** de começar o bloco, não depois.

**Ambiente com uma variação só.** Se estudar sempre no mesmo lugar ficar insuportável (e vai ficar), tenha exatamente dois locais e alterne. Mais que dois vira desculpa para não começar.

**Semana de reset a cada 8 semanas.** Uma semana de carga reduzida, planejada de propósito. Só TryHackMe leve, sem conteúdo novo. Isso evita o ciclo clássico de sprint → exaustão → abandono.

**Trocar de atividade, não de plano.** Quando bater o tédio no meio de um bloco, a resposta certa não é parar nem mudar o método de estudo — é pular para outro tipo de atividade dentro do mesmo assunto. Cansou de ler sobre DNS? Vai fazer `dig` no terminal e ver o DNS respondendo. Mesmo tema, outro canal.

**Semanas de prova da Univille estão previstas.** Nessas semanas, o mínimo é: 25 minutos na segunda, 25 na sexta. Só manter a corrente. Não tente heroísmo, e principalmente não se puna por isso — está no orçamento do plano desde o início.

---

## 8. Recursos — lista consolidada

### Plataformas de prática
| Site | Quando usar | Custo |
|---|---|---|
| tryhackme.com | Do dia 1 em diante. Espinha dorsal | Grátis / ~US$14 mês |
| overthewire.org (Bandit) | Meses 1-2, linha de comando Linux | Grátis |
| picoctf.org | Mês 3+, fixar fundamentos brincando | Grátis |
| letsdefend.io | Fase 3, testar Blue Team | Freemium |
| hackthebox.com | Fase 3, testar Red Team | Freemium |

### Cursos estruturados
- **Cisco Networking Academy** (netacad.com/pt) — *Introduction to Cybersecurity* e a trilha de carreira em cibersegurança, com material em português e certificado gratuito
- **Professor Messer** (YouTube) — referência gratuita para certificações CompTIA
- **Mente Binária** (mentebinaria.com.br) — ONG brasileira fundada pelo Fernando Mercês, com cursos gratuitos em português, Discord ativo e curso de Threat Intelligence (CIACO)

### Guias em português (GitHub)
- `rodolfomarianocy/Trilha-de-Cursos-Gratuitos-para-InfoSec`
- `arthurspk/guiadecybersecurity`

---

## 9. Seu primeiro dia — faça exatamente isto

Na próxima segunda, 19h. Sem planejar mais nada, sem ler mais nada:

1. **19:00** — Criar conta no TryHackMe
2. **19:10** — Começar o path *Pre Security*, primeira sala
3. **20:00** — Pausa de 20 minutos, longe da tela
4. **20:20** — Baixar e instalar o VirtualBox, criar uma VM Ubuntu
5. **21:10** — Pausa
6. **21:30** — Entrar em overthewire.org, fazer Bandit nível 0 e 1
7. **22:15** — Criar o repositório `cyber-notes` no GitHub, escrever 5 linhas sobre o dia, commitar

Pronto. Primeiro commit verde, primeiro badge, primeira VM. O plano começou.

---

## 10. Como saber se está funcionando

Revise a cada 8 semanas e responda três perguntas:

1. **Mantive pelo menos 70% das sessões?** (não 100% — 70%)
2. **Consigo explicar em voz alta 3 coisas que aprendi nas últimas 8 semanas?**
3. **Ainda acho isso interessante?**

Se a resposta para 1 e 2 for sim, você está no caminho, independente do que o cronograma diz. Se a 3 for não, o problema não é disciplina — é que a trilha que você está tocando não combina com você, e vale antecipar a Fase 3 para experimentar outra coisa antes de desistir da área inteira.
