import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Sun,
  ShieldCheck,
  Home,
  Smartphone,
  ArrowRight,
  Check,
  MessageCircle,
  Menu,
  X,
  MapPin,
  Mail,
  Phone,
  Instagram,
  Facebook,
  Linkedin,
  Plus,
  Minus,
  Zap,
  Users,
  Wrench,
  Sparkles,
} from "lucide-react";

import logoAsset from "@/assets/supritronica-logo.png.asset.json";
import heroBg from "@/assets/hero-bg.jpg";
import serviceSolar from "@/assets/service-solar.jpg";
import serviceSecurity from "@/assets/service-security.jpg";
import serviceAutomation from "@/assets/service-automation.jpg";
import serviceStore from "@/assets/service-store.jpg";
import photoLogoWall from "@/assets/logo-wall.png.asset.json";
import photoLojaInterior from "@/assets/loja-interior.png.asset.json";
import photoIphone from "@/assets/iphone-17-pro-max.jpg.asset.json";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Supritronica Tecnologia — Energia Solar, Segurança e Automação em Rio Preto" },
      {
        name: "description",
        content:
          "Soluções em energia solar, segurança eletrônica, automação e loja de smartphones e MacBooks em São José do Rio Preto. Fale com um especialista.",
      },
      { property: "og:title", content: "Supritronica Tecnologia — Soluções que transformam" },
      {
        property: "og:description",
        content:
          "Energia solar, segurança, automação e a melhor loja de smartphones e MacBooks em São José do Rio Preto.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const WHATSAPP_URL =
  "https://wa.me/5517996471617?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20especialista%20da%20Supritronica.";

const NAV = [
  { href: "#inicio", label: "Início" },
  { href: "#solar", label: "Energia Solar" },
  { href: "#seguranca", label: "Segurança" },
  { href: "#automacao", label: "Automação" },
  { href: "#loja", label: "Loja" },
  { href: "#assistencia", label: "Assistência" },
  { href: "#contato", label: "Contato" },
];

const SERVICES = [
  {
    id: "solar",
    icon: Sun,
    tag: "01 — Energia",
    title: "Energia Solar",
    desc: "Reduza sua conta de luz em até 95% com um sistema fotovoltaico sob medida. Cuidamos da simulação, do projeto, da instalação e da burocracia com a concessionária.",
    cta: "Simular economia",
    image: serviceSolar,
    bullets: ["Projeto sob medida", "Instalação com equipe própria", "Homologação inclusa"],
  },
  {
    id: "seguranca",
    icon: ShieldCheck,
    tag: "02 — Proteção",
    title: "Segurança Eletrônica",
    desc: "Câmeras, alarmes e monitoramento remoto. Acompanhe seu imóvel em tempo real, direto do celular, 24 horas por dia.",
    cta: "Proteger meu imóvel",
    image: serviceSecurity,
    bullets: ["Câmeras HD e 4K", "Monitoramento remoto", "Alarmes conectados"],
  },
  {
    id: "automacao",
    icon: Home,
    tag: "03 — Inteligência",
    title: "Automação Residencial e Empresarial",
    desc: "Controle iluminação, climatização, portões e câmeras com um toque. Mais conforto, economia de energia e ambientes verdadeiramente inteligentes.",
    cta: "Automatizar meu espaço",
    image: serviceAutomation,
    bullets: ["Cenas personalizadas", "Comando por voz", "Integração completa"],
  },
  {
    id: "loja",
    icon: Smartphone,
    tag: "04 — Loja & Assistência",
    title: "Smartphones, MacBooks e Assistência",
    desc: "iPhones, Xiaomi, Android e MacBooks — novos e seminovos, com garantia. Também fazemos manutenção e reparo especializado para todas as marcas.",
    cta: "Ver produtos",
    image: serviceStore,
    bullets: ["Parcelamento em até 18x", "Peças de qualidade", "Prazo rápido de reparo"],
  },
];

const DIFERENCIAIS = [
  {
    icon: Users,
    title: "Atendimento consultivo",
    desc: "Entendemos sua necessidade antes de indicar a solução.",
  },
  {
    icon: Wrench,
    title: "Equipe própria especializada",
    desc: "Profissionais dedicados a cada área de atuação.",
  },
  {
    icon: Zap,
    title: "Parcelamento facilitado",
    desc: "Condições especiais, como smartphones em até 18x no carnê.",
  },
  {
    icon: Sparkles,
    title: "Suporte pós-venda",
    desc: "Monitoramento contínuo e assistência sempre que precisar.",
  },
];

const FAQ = [
  {
    q: "Como funcionam os painéis solares?",
    a: "Eles captam a luz do sol e a transformam em eletricidade por meio do efeito fotovoltaico, gerando energia limpa para sua casa ou empresa.",
  },
  {
    q: "Quais são os benefícios da energia solar?",
    a: "Economia na conta de luz, redução da pegada de carbono e mais independência energética.",
  },
  {
    q: "Posso acompanhar minha segurança remotamente?",
    a: "Sim. Com conexão à internet, você acessa as câmeras do seu imóvel pelo celular, de onde estiver.",
  },
  {
    q: "Quais dispositivos posso automatizar?",
    a: "Iluminação, climatização, portões, câmeras e outros sistemas domésticos ou empresariais.",
  },
  {
    q: "Os smartphones e MacBooks têm garantia?",
    a: "Sim, todos os produtos vendidos contam com garantia e suporte técnico especializado da nossa equipe.",
  },
  {
    q: "Vocês fazem manutenção de qualquer marca de celular?",
    a: "Sim, atendemos iPhone, Xiaomi, Android e outras marcas, com peças de qualidade.",
  },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#inicio" className="flex items-center gap-3">
            <img
              src={logoAsset.url}
              alt="Supritronica Tecnologia"
              className="h-10 w-10 object-contain"
              width={40}
              height={40}
            />
            <span className="font-display text-lg font-semibold tracking-tight">
              Supri<span className="text-primary">tronica</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-shine inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow transition hover:brightness-110"
            >
              <span className="btn-shine-inner" aria-hidden />
              <MessageCircle className="h-4 w-4" />
              Falar com Especialista
            </a>
          </div>

          <button
            aria-label="Abrir menu"
            className="rounded-md p-2 lg:hidden"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-border/60 bg-background lg:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-surface hover:text-foreground"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
              >
                <MessageCircle className="h-4 w-4" /> Falar com Especialista
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="inicio" className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${heroBg})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/85 to-background" aria-hidden />
        <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-36">
          <div className="max-w-3xl animate-fade-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
              <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-primary" />
              Tecnologia com propósito · São José do Rio Preto
            </div>
            <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Tecnologia que transforma a forma como você{" "}
              <span className="text-gradient-primary">vive, trabalha</span> e se conecta.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
              Da energia solar à automação inteligente, da segurança do seu patrimônio ao smartphone
              que cabe no seu bolso — a Supritronica reúne soluções completas em um só lugar.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="btn-shine group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-glow animate-glow-pulse transition hover:brightness-110"
              >
                <span className="btn-shine-inner" aria-hidden />
                Fale com um Especialista
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-7 py-3.5 text-base font-semibold text-foreground backdrop-blur transition hover:bg-surface"
              >
                Conheça nossas soluções
              </a>
            </div>

            {/* Stats */}
            <div className="mt-16 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-4">
              {[
                { n: "4", l: "Áreas de atuação" },
                { n: "95%", l: "Economia potencial" },
                { n: "24h", l: "Monitoramento" },
                { n: "18x", l: "Parcelamento" },
              ].map((s) => (
                <div key={s.l} className="border-l border-primary/40 pl-4">
                  <div className="font-display text-3xl font-bold text-foreground">{s.n}</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="border-t border-border/60 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Quem somos
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight sm:text-5xl">
              Tecnologia boa é a que{" "}
              <span className="text-gradient-primary">resolve problemas reais.</span>
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              Somos uma empresa de tecnologia baseada em São José do Rio Preto, especializada em
              conectar pessoas e negócios a soluções inteligentes: energia solar, segurança
              eletrônica, automação e os melhores smartphones e notebooks do mercado.
            </p>
            <p>
              Acreditamos que tecnologia boa é aquela que <span className="text-foreground">economiza dinheiro, protege o que importa e simplifica o dia a dia</span>. Por
              isso, atuamos do diagnóstico à instalação, com suporte próximo e linguagem simples,
              sem complicação técnica.
            </p>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="relative border-t border-border/60 bg-surface/40 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Nossas soluções
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              Quatro pilares. <span className="text-gradient-primary">Um só endereço.</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Cada área com equipe especializada, para você não precisar coordenar vários
              fornecedores.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {SERVICES.map((s) => {
              const Icon = s.icon;
              return (
                <article
                  key={s.id}
                  id={s.id}
                  className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-card transition hover:border-primary/50 hover:shadow-glow"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      width={1200}
                      height={900}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                    <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/50 px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-white backdrop-blur">
                      {s.tag}
                    </div>
                    <div className="absolute bottom-6 left-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary shadow-glow">
                      <Icon className="h-7 w-7 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="font-display text-2xl font-bold">{s.title}</h3>
                    <p className="mt-3 text-muted-foreground">{s.desc}</p>
                    <ul className="mt-5 space-y-2">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-2 text-sm">
                          <Check className="h-4 w-4 shrink-0 text-primary" />
                          <span className="text-foreground/90">{b}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:gap-3"
                    >
                      {s.cta} <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Galeria — Nossa Loja */}
      <section id="assistencia" className="relative overflow-hidden border-t border-border/60 py-24">
        <div className="absolute inset-0 bg-gradient-radial-glow" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Nossa loja
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              <span className="text-premium">Venha conhecer</span>{" "}
              <span className="text-gradient-primary">a Supritronica</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Um espaço pensado para você viver a tecnologia de perto — smartphones, MacBooks,
              acessórios e o time pronto para atender.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            <figure className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-card transition hover:border-primary/60 hover:shadow-glow lg:row-span-2">
              <img
                src={photoLojaInterior.url}
                alt="Interior da loja Supritronica"
                loading="lazy"
                className="h-full min-h-[420px] w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-black/50 px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-primary backdrop-blur">
                  Loja Física
                </div>
                <h3 className="mt-3 font-display text-2xl font-bold text-premium">
                  Ambiente moderno & completo
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  R. Prudente de Moraes, 3108 — Centro, S. J. do Rio Preto.
                </p>
              </figcaption>
            </figure>

            <figure className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-card transition hover:border-primary/60 hover:shadow-glow">
              <img
                src={photoLogoWall.url}
                alt="Fachada com logo iluminado Supritronica"
                loading="lazy"
                className="h-[260px] w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-display text-lg font-bold text-premium">
                  Identidade que brilha
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  Nosso logo em destaque na entrada da loja.
                </p>
              </figcaption>
            </figure>

            <figure className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-card transition hover:border-primary/60 hover:shadow-glow">
              <img
                src={photoIphone.url}
                alt="iPhone 17 Pro Max disponível na Supritronica"
                loading="lazy"
                className="h-[260px] w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-5">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-black/50 px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-primary backdrop-blur">
                  Novidade
                </div>
                <h3 className="mt-2 font-display text-lg font-bold text-premium">
                  iPhone 17 Pro Max
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  Disponível com parcelamento em até 18x.
                </p>
              </figcaption>
            </figure>
          </div>

          <div className="mt-12 flex justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-shine group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-glow animate-glow-pulse transition hover:brightness-110"
            >
              <span className="btn-shine-inner" aria-hidden />
              <MessageCircle className="h-5 w-5" />
              Consultar disponibilidade
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>


      {/* Diferenciais */}
      <section className="border-t border-border/60 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:items-start">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                Por que Supritronica
              </span>
              <h2 className="mt-3 font-display text-4xl font-bold leading-tight sm:text-5xl">
                O tipo de tecnologia que{" "}
                <span className="text-gradient-primary">você sente no dia a dia.</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                Presença física em São José do Rio Preto, atendimento próximo e projetos entregues
                com padrão de quem entende de gente antes de entender de produto.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {DIFERENCIAIS.map((d) => {
                const Icon = d.icon;
                return (
                  <div
                    key={d.title}
                    className="group rounded-2xl border border-border bg-card p-6 transition hover:border-primary/50"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-gradient-primary group-hover:text-primary-foreground">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 font-display text-lg font-semibold">{d.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{d.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border/60 bg-surface/40 py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              FAQ
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              Perguntas <span className="text-gradient-primary">frequentes</span>
            </h2>
          </div>
          <div className="mt-12 space-y-3">
            {FAQ.map((item, i) => {
              const open = openFaq === i;
              return (
                <div
                  key={item.q}
                  className={`overflow-hidden rounded-2xl border transition ${open ? "border-primary/50 bg-card" : "border-border bg-card/60"}`}
                >
                  <button
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-display text-base font-semibold sm:text-lg">
                      {item.q}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition ${open ? "bg-gradient-primary text-primary-foreground" : "bg-secondary text-foreground"}`}
                    >
                      {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  {open && (
                    <div className="px-6 pb-6 text-muted-foreground animate-fade-up">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA + Formulário */}
      <section id="contato" className="relative overflow-hidden border-t border-border/60 py-24">
        <div className="absolute inset-0 bg-gradient-radial-glow" aria-hidden />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Pronto para começar?
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight sm:text-5xl">
              Pronto para transformar sua casa, empresa ou seu{" "}
              <span className="text-gradient-primary">próximo dispositivo?</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Fale agora com nossa equipe e receba um atendimento personalizado para energia solar,
              segurança, automação ou a compra do seu próximo smartphone ou MacBook.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-glow transition hover:brightness-110"
              >
                <MessageCircle className="h-5 w-5" /> Falar com a Supritronica
              </a>

              <div className="grid gap-3 pt-4">
                <ContactLine icon={Phone} text="(17) 99647-1617" href="tel:+5517996471617" />
                <ContactLine
                  icon={Mail}
                  text="atendimento@supritronica.com.br"
                  href="mailto:atendimento@supritronica.com.br"
                />
                <ContactLine
                  icon={MapPin}
                  text="R. Prudente de Moraes, 3108 — Centro, São José do Rio Preto — SP"
                />
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/60 bg-surface/60">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3">
                <img
                  src={logoAsset.url}
                  alt="Supritronica"
                  className="h-10 w-10 object-contain"
                  width={40}
                  height={40}
                />
                <span className="font-display text-lg font-semibold">
                  Supri<span className="text-primary">tronica</span>
                </span>
              </div>
              <p className="mt-4 max-w-md text-sm text-muted-foreground">
                Tecnologia que transforma. Energia solar, segurança, automação e a melhor loja de
                smartphones e MacBooks em São José do Rio Preto.
              </p>
              <div className="mt-6 flex gap-3">
                {[
                  { Icon: Instagram, href: "#" },
                  { Icon: Facebook, href: "#" },
                  { Icon: Linkedin, href: "#" },
                ].map(({ Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition hover:border-primary hover:text-primary"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-foreground">
                Serviços
              </h4>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {[
                  ["Energia Solar", "#solar"],
                  ["Segurança Eletrônica", "#seguranca"],
                  ["Automação", "#automacao"],
                  ["Loja & Assistência", "#loja"],
                ].map(([label, href]) => (
                  <li key={label}>
                    <a href={href} className="transition hover:text-primary">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-foreground">
                Contato
              </h4>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>R. Prudente de Moraes, 3108</li>
                <li>Centro, S. J. do Rio Preto — SP</li>
                <li>15010-020</li>
                <li className="pt-2">
                  <a href="tel:+5517996471617" className="hover:text-primary">
                    (17) 99647-1617
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:atendimento@supritronica.com.br"
                    className="hover:text-primary"
                  >
                    atendimento@supritronica.com.br
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
            <span>© {new Date().getFullYear()} Supritronica Tecnologia. Todos os direitos reservados.</span>
            <span>Feito com tecnologia em Rio Preto.</span>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:brightness-110"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="hidden sm:inline">Fale conosco</span>
      </a>
    </div>
  );
}

function ContactLine({
  icon: Icon,
  text,
  href,
}: {
  icon: typeof Phone;
  text: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center gap-3 text-sm text-muted-foreground">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <Icon className="h-4 w-4" />
      </span>
      <span>{text}</span>
    </div>
  );
  return href ? (
    <a href={href} className="transition hover:text-foreground">
      {content}
    </a>
  ) : (
    content
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const msg = `Olá! Sou ${data.get("nome")}.%0AServiço de interesse: ${data.get("servico")}.%0A${data.get("mensagem")}%0AContato: ${data.get("telefone")} / ${data.get("email")}`;
        window.open(`https://wa.me/5517996471617?text=${msg}`, "_blank");
        setSent(true);
      }}
      className="rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8"
    >
      <h3 className="font-display text-2xl font-bold">Solicite seu atendimento</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Preencha e enviaremos você direto para nosso WhatsApp.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field name="nome" label="Nome completo" required />
        <Field name="telefone" label="Telefone / WhatsApp" required />
        <Field name="email" label="E-mail" type="email" className="sm:col-span-2" />
        <div className="sm:col-span-2">
          <label className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Serviço de interesse
          </label>
          <select
            name="servico"
            className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
            defaultValue="Energia Solar"
          >
            {[
              "Energia Solar",
              "Segurança Eletrônica",
              "Automação",
              "Smartphones e MacBooks",
              "Assistência Técnica",
              "Outros",
            ].map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Mensagem
          </label>
          <textarea
            name="mensagem"
            rows={4}
            className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
            placeholder="Conte um pouco sobre o que você precisa..."
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition hover:brightness-110"
      >
        {sent ? "Redirecionando ao WhatsApp…" : "Enviar mensagem"}
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
  className = "",
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
      />
    </div>
  );
}
