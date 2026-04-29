import { createFileRoute } from "@tanstack/react-router";
import { Reveal, Counter } from "@/components/Reveal";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import vettoreLogo from "@/assets/vettore-logo.jpeg";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-navy-deep text-foreground overflow-x-hidden">
      <HeroSection />
      <IntroSection />
      <CenarioSection />
      <ValorSection />
      <PosicionamentoSection />
      <EstrategiasSection />
      <MatrizSection />
      <ErrosSection />
      <PlanoSection />
      <ChecklistSection />
      <CtaSection />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}

/* ---------- HERO ---------- */
function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center">
      <div className="absolute inset-0 gradient-radial-gold opacity-50" />
      <div className="absolute top-1/4 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-gold opacity-[0.04] blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl animate-fade-in-up">
        <img
          src={vettoreLogo}
          alt="Vettore Hub"
          className="mx-auto mb-8 h-32 w-32 rounded-full object-cover shadow-gold md:h-40 md:w-40"
        />
        <span className="mb-8 inline-block rounded-full border border-gold/40 bg-gold/5 px-5 py-2 text-xs font-medium uppercase tracking-[0.3em] text-gold">
          Guia Estratégico para Centros Auditivos
        </span>

        <h1 className="mb-6 text-5xl font-bold leading-[0.95] tracking-tight text-white md:text-7xl lg:text-8xl">
          CONEXÃO
          <br />
          <span className="gradient-gold-text">QUE CRESCE</span>
        </h1>

        <p className="mx-auto mb-14 max-w-2xl text-lg text-[#c8c8c8] md:text-xl">
          Estratégias práticas para construir relacionamentos com médicos e fonoaudiólogos
          que transformam conexões em crescimento sustentável.
        </p>

        <div className="mx-auto mb-16 grid max-w-2xl grid-cols-3 gap-4 md:gap-8">
          {[
            { n: 7, label: "Capítulos" },
            { n: 30, label: "Estratégias", suffix: "+" },
            { n: 5, label: "Frameworks" },
          ].map((s) => (
            <div key={s.label} className="rounded-xl border border-gold/20 bg-white/[0.02] p-4 backdrop-blur md:p-6">
              <div className="text-3xl font-bold text-gold md:text-5xl">
                <Counter end={s.n} suffix={s.suffix ?? ""} />
              </div>
              <div className="mt-2 text-xs uppercase tracking-wider text-[#c8c8c8] md:text-sm">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="border-t border-gold/20 pt-8">
          <div className="font-display text-2xl font-bold tracking-wider text-white md:text-3xl">
            VETTORE <span className="text-gold">HUB</span>
          </div>
          <div className="mt-2 text-sm tracking-wider text-[#c8c8c8]">
            Conectando Pessoas · Estruturando Resultados
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold/60 animate-bounce">
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

/* ---------- INTRO ---------- */
function IntroSection() {
  return (
    <section className="border-t border-white/5 px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2 md:gap-20">
        <Reveal>
          <div className="text-xs font-medium uppercase tracking-[0.3em] text-gold">Introdução</div>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-white md:text-5xl">
            O crescimento <span className="gradient-gold-text">não é passivo.</span>
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <p className="text-lg leading-relaxed text-[#c8c8c8]">
            Centros auditivos que esperam o paciente bater à porta enfrentam um teto invisível.
            O verdadeiro crescimento vem de relacionamentos estratégicos com quem, todos os dias,
            decide para onde encaminhar pacientes: médicos otorrinolaringologistas e fonoaudiólogos.
          </p>
          <div className="mt-8 rounded-xl border-l-4 border-gold bg-white/[0.03] p-6 italic text-white/90">
            "Você não vende aparelhos auditivos. Você devolve a capacidade de
            ouvir histórias, risadas e a vida."
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- CENÁRIO ---------- */
function CenarioSection() {
  const items = [
    { icon: "🤝", title: "Confiança", text: "Pacientes seguem a indicação de quem confiam — médicos e fonoaudiólogos." },
    { icon: "💡", title: "Experiência Prévia", text: "A jornada começa antes da loja: na consulta, no exame, na conversa." },
    { icon: "🌐", title: "Relacionamento", text: "A rede de profissionais é o ativo mais valioso de um centro auditivo." },
  ];
  return (
    <section className="bg-navy px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-16 text-center">
            <div className="text-xs font-medium uppercase tracking-[0.3em] text-gold">Capítulo 01</div>
            <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">O Novo Cenário da Saúde</h2>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 120}>
              <div className="group h-full rounded-2xl border border-gold/20 bg-white/[0.02] p-8 transition-all hover:border-gold/60 hover:shadow-gold">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10 text-3xl">
                  {it.icon}
                </div>
                <h3 className="mb-3 text-2xl font-bold text-gold">{it.title}</h3>
                <p className="text-[#c8c8c8] leading-relaxed">{it.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400}>
          <div className="mt-20 text-center">
            <p className="font-display text-3xl italic text-white md:text-5xl">
              "Quem se relaciona melhor, <span className="gradient-gold-text">cresce mais.</span>"
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- VALOR FRAMEWORK ---------- */
function ValorSection() {
  const steps = [
    { letter: "V", name: "Valor", text: "Ofereça antes de pedir. Compartilhe conhecimento, materiais e suporte real." },
    { letter: "A", name: "Autenticidade", text: "Seja você mesmo. Profissionais reconhecem aproximações genuínas a quilômetros." },
    { letter: "L", name: "Lembrete", text: "Esteja presente sem ser invasivo. Toques regulares mantêm sua marca viva." },
    { letter: "O", name: "Objetivo", text: "Tenha clareza do que cada conexão precisa para evoluir e prosperar." },
    { letter: "R", name: "Reciprocidade", text: "Construa via mão dupla. Indique, ajude, conecte — e o ciclo retorna." },
  ];
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="mb-20 text-center">
            <div className="text-xs font-medium uppercase tracking-[0.3em] text-gold">Capítulo 02</div>
            <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
              Framework <span className="gradient-gold-text">V.A.L.O.R.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[#c8c8c8]">
              Cinco pilares para transformar contatos em parcerias duradouras.
            </p>
          </div>
        </Reveal>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 hidden w-px bg-gradient-to-b from-gold/60 via-gold/30 to-transparent md:block" />
          <div className="space-y-8">
            {steps.map((s, i) => (
              <Reveal key={s.letter} delay={i * 100}>
                <div className="flex gap-6 md:gap-10">
                  <div className="relative flex-shrink-0">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-gold to-[#a08020] font-display text-2xl font-bold text-navy-deep shadow-gold">
                      {s.letter}
                    </div>
                  </div>
                  <div className="flex-1 rounded-xl border border-white/5 bg-white/[0.02] p-6">
                    <h3 className="text-2xl font-bold text-gold">{s.name}</h3>
                    <p className="mt-2 text-[#c8c8c8]">{s.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- POSICIONAMENTO ---------- */
function PosicionamentoSection() {
  return (
    <section className="bg-navy px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <div className="mb-12 text-center">
            <div className="text-xs font-medium uppercase tracking-[0.3em] text-gold">Capítulo 03</div>
            <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">Posicionamento Claro</h2>
            <p className="mt-4 text-[#c8c8c8]">Complete a frase. Encontre sua identidade.</p>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="rounded-3xl border border-gold/30 bg-gradient-to-br from-white/[0.04] to-transparent p-10 shadow-elegant md:p-14">
            <p className="font-display text-2xl leading-relaxed text-white md:text-3xl">
              Nós somos <span className="border-b-2 border-dashed border-gold pb-1 text-gold">[especialidade]</span> para{" "}
              <span className="border-b-2 border-dashed border-gold pb-1 text-gold">[público]</span> e ajudamos a{" "}
              <span className="border-b-2 border-dashed border-gold pb-1 text-gold">[transformação]</span>.
            </p>

            <div className="mt-10 border-t border-white/10 pt-8">
              <div className="text-xs uppercase tracking-widest text-gold/80">Exemplo</div>
              <p className="mt-3 text-lg italic text-[#c8c8c8] md:text-xl">
                "Nós somos especialistas em adaptação auditiva para adultos 60+ e ajudamos
                a recuperar a clareza nas conversas em família."
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- ESTRATÉGIAS ---------- */
function EstrategiasSection() {
  const cards = [
    { n: "01", title: "Mapa de Influência", text: "Liste os 50 profissionais mais relevantes da sua região e classifique por potencial." },
    { n: "02", title: "Conteúdo de Autoridade", text: "Produza materiais úteis: protocolos, casos clínicos, atualizações técnicas." },
    { n: "03", title: "Eventos & Encontros", text: "Promova encontros mensais — café técnico, workshops e apresentações." },
    { n: "04", title: "Programa de Indicação", text: "Crie um sistema claro de retorno e reconhecimento para quem indica." },
    { n: "05", title: "Presença Digital Ativa", text: "Esteja onde os profissionais consomem conteúdo: LinkedIn, grupos, eventos." },
  ];
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-16 text-center">
            <div className="text-xs font-medium uppercase tracking-[0.3em] text-gold">Capítulo 04</div>
            <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">Estratégias de Expansão</h2>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.n} delay={i * 80}>
              <div className="group h-full rounded-2xl border border-white/5 bg-card p-8 transition-all hover:-translate-y-1 hover:border-gold/40 hover:shadow-gold">
                <div className="font-display text-5xl font-bold text-gold/80 group-hover:text-gold">{c.n}</div>
                <h3 className="mt-4 text-xl font-bold text-white">{c.title}</h3>
                <p className="mt-3 text-[#c8c8c8]">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- MATRIZ ---------- */
function MatrizSection() {
  const cells = [
    { label: "OURO", criteria: "Alto volume + Alto alinhamento", action: "Visitas mensais, conteúdo exclusivo", bg: "var(--gold)", fg: "var(--navy-deep)" },
    { label: "PRATA", criteria: "Volume médio + Alinhamento alto", action: "Toques quinzenais, eventos", bg: "var(--silver)", fg: "var(--navy-deep)" },
    { label: "BRONZE", criteria: "Alto volume + Alinhamento médio", action: "Nutrição contínua, conteúdo", bg: "var(--bronze)", fg: "#fff" },
    { label: "ESPERA", criteria: "Baixo volume + Baixo alinhamento", action: "Newsletter, monitoramento", bg: "oklch(0.4 0.01 250)", fg: "#fff" },
  ];
  return (
    <section className="bg-navy px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="mb-16 text-center">
            <div className="text-xs font-medium uppercase tracking-[0.3em] text-gold">Capítulo 05</div>
            <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">Matriz de Priorização</h2>
            <p className="mt-4 text-[#c8c8c8]">Onde investir cada hora do seu tempo.</p>
          </div>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2">
          {cells.map((c, i) => (
            <Reveal key={c.label} delay={i * 100}>
              <div
                className="rounded-2xl p-8 shadow-elegant transition-transform hover:scale-[1.02]"
                style={{ background: c.bg, color: c.fg }}
              >
                <div className="font-display text-3xl font-bold tracking-wider">{c.label}</div>
                <div className="mt-4 text-sm font-semibold opacity-80">CRITÉRIO</div>
                <div className="mt-1">{c.criteria}</div>
                <div className="mt-4 text-sm font-semibold opacity-80">AÇÃO</div>
                <div className="mt-1">{c.action}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- ERROS ---------- */
function ErrosSection() {
  const errors = [
    { title: "Pedir antes de oferecer", sol: "Comece sempre entregando valor genuíno." },
    { title: "Falar só do produto", sol: "Foque na transformação do paciente." },
    { title: "Sumir entre contatos", sol: "Mantenha cadência — toques regulares." },
    { title: "Tratar todos iguais", sol: "Personalize por perfil e estágio." },
    { title: "Não medir resultados", sol: "Acompanhe indicações e conversões." },
    { title: "Querer tudo agora", sol: "Relacionamento é jogo de longo prazo." },
  ];
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-16 text-center">
            <div className="text-xs font-medium uppercase tracking-[0.3em] text-gold">Capítulo 06</div>
            <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">Os 6 Erros Fatais</h2>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {errors.map((e, i) => (
            <Reveal key={e.title} delay={i * 70}>
              <div className="h-full rounded-xl border border-white/5 bg-card p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-destructive/15 text-destructive">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white">{e.title}</h3>
                <p className="mt-2 text-sm text-[#c8c8c8]">
                  <span className="font-semibold text-gold">Solução: </span>{e.sol}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- PLANO ---------- */
function PlanoSection() {
  const weeks = [
    { week: "Semana 01", title: "Mapeamento", tasks: ["Liste 50 profissionais", "Classifique por potencial", "Pesquise especialidades"] },
    { week: "Semana 02", title: "Aproximação", tasks: ["Crie kit de apresentação", "Inicie 10 primeiros contatos", "Agende 5 visitas"] },
    { week: "Semana 03", title: "Conteúdo", tasks: ["Produza 1 material técnico", "Distribua para a rede", "Convide para evento"] },
    { week: "Semana 04", title: "Consolidação", tasks: ["Realize evento/café", "Mensure resultados", "Planeje próximos 30 dias"] },
  ];
  return (
    <section className="bg-navy px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-16 text-center">
            <div className="text-xs font-medium uppercase tracking-[0.3em] text-gold">Capítulo 07</div>
            <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">Plano de Ação · 30 Dias</h2>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {weeks.map((w, i) => (
            <Reveal key={w.week} delay={i * 100}>
              <div className="relative h-full rounded-2xl border border-gold/20 bg-white/[0.02] p-6">
                <div className="absolute -top-3 left-6 rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wider text-navy-deep">
                  {w.week}
                </div>
                <h3 className="mt-4 text-xl font-bold text-white">{w.title}</h3>
                <ul className="mt-4 space-y-2">
                  {w.tasks.map((t) => (
                    <li key={t} className="flex items-start gap-2 text-sm text-[#c8c8c8]">
                      <span className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CHECKLIST ---------- */
function ChecklistSection() {
  const groups = [
    { title: "Mapeamento", items: ["Lista de 50 profissionais", "Classificação por matriz", "Dados de contato atualizados"] },
    { title: "Conteúdo", items: ["Kit institucional pronto", "Material técnico mensal", "Cases de sucesso documentados"] },
    { title: "Relacionamento", items: ["Cadência de toques definida", "Calendário de visitas", "Programa de indicação ativo"] },
    { title: "Mensuração", items: ["CRM de relacionamentos", "Indicadores de indicação", "Revisão trimestral"] },
  ];
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="mb-16 text-center">
            <div className="text-xs font-medium uppercase tracking-[0.3em] text-gold">Bônus</div>
            <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">Checklist Mestre</h2>
          </div>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 100}>
              <div className="rounded-2xl border border-white/5 bg-card p-7">
                <h3 className="mb-5 text-xl font-bold text-gold">{g.title}</h3>
                <ul className="space-y-3">
                  {g.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border-2 border-gold/50">
                        <svg className="h-3 w-3 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-[#c8c8c8]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA ---------- */
function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-navy-deep px-6 py-24 md:py-36">
      <div className="absolute inset-0 gradient-radial-gold opacity-40" />
      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal>
          <h2 className="text-4xl font-bold leading-tight text-white md:text-6xl">
            O Próximo Passo é o
            <br />
            <span className="gradient-gold-text">Mais Importante.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-[#c8c8c8]">
            Vamos conversar sobre como aplicar essas estratégias no seu centro auditivo.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/5551993998093"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[var(--whatsapp)] px-8 py-4 font-semibold text-white shadow-elegant transition-transform hover:scale-105"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
              </svg>
              Falar no WhatsApp
            </a>
            <a
              href="mailto:cristiane@vettorehub.com.br"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-gold px-8 py-4 font-semibold text-navy-deep shadow-gold transition-transform hover:scale-105"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              Enviar Email
            </a>
          </div>
          <a
            href="https://instagram.com/vettorehub"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 text-gold hover:underline"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
            @vettorehub
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-10 text-center">
      <div className="font-display text-xl font-bold text-white">
        VETTORE <span className="text-gold">HUB</span>
      </div>
      <p className="mt-2 text-xs uppercase tracking-widest text-[#c8c8c8]">
        Conectando Pessoas · Estruturando Resultados
      </p>
      <p className="mt-6 text-xs text-[#c8c8c8]/60">
        © {new Date().getFullYear()} Vettore Hub. Todos os direitos reservados.
      </p>
    </footer>
  );
}
