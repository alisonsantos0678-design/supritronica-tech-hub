import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Smartphone,
  Laptop,
  Wrench,
  CreditCard,
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
  ShieldCheck,
  Users,
  Sparkles,
  Clock,
} from "lucide-react";

import logoAsset from "@/assets/supritronica-logo-transp.png";
import heroBg from "@/assets/hero-bg.jpg";
import heroVideoIphoneAsset from "@/assets/hero-iphone.mp4.asset.json";
import heroVideoMacbookAsset from "@/assets/hero-macbook.mp4.asset.json";

const heroVideoIphone = heroVideoIphoneAsset.url;
const heroVideoMacbook = heroVideoMacbookAsset.url;
import prodIphoneAsset from "@/assets/iphone-branco.jpg.asset.json";
import prodAndroid from "@/assets/prod-android.jpg";
import prodMacbookAsset from "@/assets/macbook-air.jpg.asset.json";
import serviceRepair from "@/assets/service-repair.jpg";

const prodIphone = prodIphoneAsset.url;
const prodMacbook = prodMacbookAsset.url;
import photoLogoWall from "@/assets/logo-wall.jpg";
import photoLojaInterior from "@/assets/loja-interior.jpg";
import photoIphone from "@/assets/iphone-17-pro-max.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Supritronica: iPhones, Android e MacBooks parcelados no boleto" },
      {
        name: "description",
        content:
          "Venda de iPhones, Android e MacBooks com parcelamento no boleto, mesmo para negativados, e conserto de celulares em São José do Rio Preto.",
      },
      { property: "og:title", content: "Supritronica: tecnologia acessível para todos" },
      {
        property: "og:description",
        content:
          "iPhones, Android e MacBooks com parcelamento no boleto, mesmo negativado. Conserto de celulares com agilidade e confiança.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const WHATSAPP_URL =
  "https://wa.me/5517996471617?text=Ol%C3%A1%2C%20quero%20simular%20meu%20parcelamento%20no%20boleto%20com%20a%20Supritr%C3%B4nica.";

const NAV = [
  { href: "#inicio", label: "Início" },
  { href: "#produtos", label: "Produtos" },
  { href: "#boleto", label: "Parcelamento" },
  { href: "#conserto", label: "Conserto" },
  { href: "#loja", label: "Nossa Loja" },
  { href: "#contato", label: "Contato" },
];

const SERVICES = [
  {
    id: "iphones",
    icon: Smartphone,
    tag: "01 · Apple",
    title: "Venda de iPhones",
    desc: "Modelos novos e seminovos, testados e com garantia. Você escolhe o iPhone ideal para o seu momento e leva com condições de pagamento que cabem no seu bolso.",
    cta: "Garanta seu iPhone parcelado",
    image: prodIphone,
    bullets: ["Aparelhos conferidos", "Garantia da loja", "Parcelamento no boleto"],
  },
  {
    id: "android",
    icon: Smartphone,
    tag: "02 · Android",
    title: "Venda de Android",
    desc: "Samsung, Xiaomi, Motorola e outras marcas para todos os perfis de uso. Atendimento consultivo para você comparar modelos e escolher com segurança.",
    cta: "Ver opções Android",
    image: prodAndroid,
    bullets: ["Diversas marcas", "Custo benefício real", "Pagamento facilitado"],
  },
  {
    id: "macbooks",
    icon: Laptop,
    tag: "03 · Computadores",
    title: "Venda de MacBooks",
    desc: "MacBooks para estudo, trabalho e criação. Equipamentos revisados, com procedência garantida e a mesma facilidade de parcelamento dos smartphones.",
    cta: "Simule seu MacBook",
    image: prodMacbook,
    bullets: ["Procedência garantida", "Revisão completa", "Boleto parcelado"],
  },
  {
    id: "conserto",
    icon: Wrench,
    tag: "04 · Assistência",
    title: "Conserto de celulares",
    desc: "Troca de tela, bateria, conectores e reparos em geral com agilidade e transparência. Diagnóstico claro, orçamento antes do serviço e peças de qualidade.",
    cta: "Fale com a Supritronica",
    image: serviceRepair,
    bullets: ["Orçamento sem compromisso", "Prazo rápido", "Peças de qualidade"],
  },
];

const DIFERENCIAIS = [
  {
    icon: CreditCard,
    title: "Boleto para negativados",
    desc: "Analisamos seu caso com respeito e aprovamos o parcelamento mesmo com restrição no nome.",
  },
  {
    icon: Users,
    title: "Atendimento consultivo",
    desc: "Escutamos sua necessidade antes de indicar qualquer aparelho ou serviço.",
  },
  {
    icon: ShieldCheck,
    title: "Procedência e garantia",
    desc: "Todos os produtos passam por conferência e saem da loja com garantia.",
  },
  {
    icon: Clock,
    title: "Agilidade no reparo",
    desc: "Consertos com prazo definido e acompanhamento direto pelo WhatsApp.",
  },
];

const FAQ = [
  {
    q: "Consigo parcelar mesmo estando negativado?",
    a: "Sim. O parcelamento no boleto da Supritronica foi criado justamente para quem está com restrição no nome. A análise é feita internamente, de forma rápida e sem burocracia.",
  },
  {
    q: "Quais produtos a Supritronica vende?",
    a: "Trabalhamos com iPhones, smartphones Android e MacBooks, em modelos novos e seminovos, sempre com procedência conferida.",
  },
  {
    q: "Como funciona o pagamento no boleto?",
    a: "Você escolhe o aparelho, definimos juntos a quantidade de parcelas e emitimos os boletos. Tudo combinado antes da retirada do produto.",
  },
  {
    q: "Os aparelhos têm garantia?",
    a: "Sim. Todos os produtos vendidos contam com garantia e suporte da nossa equipe técnica.",
  },
  {
    q: "Vocês consertam qualquer marca de celular?",
    a: "Atendemos iPhone, Samsung, Xiaomi, Motorola e demais marcas Android, com peças de qualidade e orçamento apresentado antes do serviço.",
  },
  {
    q: "Preciso agendar atendimento?",
    a: "Não é obrigatório. Você pode passar na loja no centro de São José do Rio Preto ou falar antes com a nossa equipe pelo WhatsApp.",
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
          <a href="#inicio" className="flex items-center">
            <span className="font-display text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              SUPRITRONICA
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
              Simule seu parcelamento
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
                <MessageCircle className="h-4 w-4" /> Simule seu parcelamento
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="inicio" className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url(${heroBg})` }}
          aria-hidden
        />
        <div className="absolute inset-0 flex" aria-hidden>
          <video
            className="h-full w-1/2 object-cover opacity-95"
            src={heroVideoMacbook}
            autoPlay
            muted
            loop
            playsInline
          />
          <video
            className="h-full w-1/2 object-cover opacity-95"
            src={heroVideoIphone}
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
        <div className="absolute inset-0 bg-black/20" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-b from-background/25 via-background/50 to-background" aria-hidden />

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-36">
          <div className="max-w-3xl animate-fade-up">
            <span className="mb-4 block font-display text-2xl font-bold uppercase tracking-[0.3em] text-premium sm:text-3xl">
              Supritronica
            </span>
            <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight drop-shadow-[0_2px_20px_rgba(0,0,0,0.7)] sm:text-6xl lg:text-7xl">
              <span className="text-premium">Supritronica: tecnologia</span>{" "}
              <span className="text-gradient-primary">acessível para todos.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
              Venda de iPhones, Android e MacBooks com parcelamento no boleto, mesmo para quem está
              negativado. Também fazemos conserto de celulares com agilidade e confiança.
            </p>

            <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-primary/50 bg-card/70 px-5 py-4 shadow-glow backdrop-blur">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground">
                <CreditCard className="h-6 w-6" />
              </span>
              <span className="font-display text-lg font-bold sm:text-2xl">
                Parcele no boleto{" "}
                <span className="text-gradient-primary">mesmo estando negativado</span>
              </span>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="btn-shine group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-glow animate-glow-pulse transition hover:brightness-110"
              >
                <span className="btn-shine-inner" aria-hidden />
                Simule seu parcelamento
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </a>
              <a
                href="#produtos"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-7 py-3.5 text-base font-semibold text-foreground backdrop-blur transition hover:bg-surface"
              >
                Ver produtos disponíveis
              </a>
            </div>

            <div className="mt-16 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-4">
              {[
                { n: "iPhone", l: "Novos e seminovos" },
                { n: "Android", l: "Diversas marcas" },
                { n: "MacBook", l: "Procedência garantida" },
                { n: "Boleto", l: "Mesmo negativado" },
              ].map((s) => (
                <div key={s.l} className="border-l border-primary/40 pl-4">
                  <div className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                    {s.n}
                  </div>
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
              <span className="text-premium">Uma marca sólida,</span>{" "}
              <span className="text-gradient-primary">feita para o dia a dia das pessoas.</span>
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              A Supritronica é uma loja de tecnologia de São José do Rio Preto, dedicada à venda de
              iPhones, smartphones Android e MacBooks, além do conserto de celulares com atendimento
              técnico especializado.
            </p>
            <p>
              Acreditamos que tecnologia de qualidade precisa estar ao alcance de todos. Por isso
              oferecemos{" "}
              <span className="text-foreground">parcelamento no boleto, inclusive para clientes negativados</span>
              , com condições claras, sem letras miúdas e com o compromisso de quem atende de perto.
            </p>
          </div>
        </div>
      </section>

      {/* Produtos e serviços */}
      <section id="produtos" className="relative border-t border-border/60 bg-surface/40 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Nossos serviços
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              <span className="text-premium">Tudo o que fazemos,</span>{" "}
              <span className="text-gradient-primary">com transparência.</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Venda de iPhones, Android e MacBooks, parcelamento no boleto para negativados e
              conserto de celulares. Simples assim.
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

      {/* Destaque boleto */}
      <section id="boleto" className="relative overflow-hidden border-t border-border/60 py-24">
        <div className="absolute inset-0 bg-gradient-radial-glow" aria-hidden />
        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Nosso diferencial
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold leading-tight sm:text-5xl">
            <span className="text-premium">Parcele no boleto</span>{" "}
            <span className="text-gradient-primary">mesmo estando negativado.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            Nome com restrição não é motivo para ficar sem o aparelho que você precisa. Fazemos a
            análise internamente, combinamos as parcelas com você e emitimos os boletos na hora.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { t: "Sem cartão de crédito", d: "Você paga por boleto, no seu ritmo." },
              { t: "Análise rápida", d: "Resposta no mesmo atendimento, sem burocracia." },
              { t: "Condições combinadas", d: "Parcelas definidas antes de fechar a compra." },
            ].map((b) => (
              <div key={b.t} className="rounded-2xl border border-border bg-card p-6 text-left">
                <h3 className="font-display text-lg font-semibold">{b.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-shine group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-glow animate-glow-pulse transition hover:brightness-110"
            >
              <span className="btn-shine-inner" aria-hidden />
              <CreditCard className="h-5 w-5" />
              Simule seu parcelamento
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* Conserto */}
      <section id="conserto" className="border-t border-border/60 bg-surface/40 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-border shadow-card">
            <img
              src={serviceRepair}
              alt="Técnico da Supritronica realizando conserto de celular"
              loading="lazy"
              width={1200}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Assistência técnica
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight sm:text-5xl">
              <span className="text-premium">Conserto de celulares</span>{" "}
              <span className="text-gradient-primary">com agilidade e confiança.</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Trocas de tela e bateria, limpeza, reparo de conectores e diagnóstico completo. Você
              recebe o orçamento antes, acompanha o prazo e retira o aparelho funcionando como deve.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Diagnóstico e orçamento sem compromisso",
                "Peças de qualidade e garantia no serviço",
                "Atendimento para iPhone e Android",
              ].map((b) => (
                <li key={b} className="flex items-center gap-3 text-sm text-foreground/90">
                  <Check className="h-4 w-4 shrink-0 text-primary" />
                  {b}
                </li>
              ))}
            </ul>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-shine mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-glow transition hover:brightness-110"
            >
              <span className="btn-shine-inner" aria-hidden />
              <Wrench className="h-5 w-5" />
              Fale com a Supritronica
            </a>
          </div>
        </div>
      </section>

      {/* Galeria Nossa Loja */}
      <section id="loja" className="relative overflow-hidden border-t border-border/60 py-24">
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
              Um espaço pensado para você ver os aparelhos de perto, tirar dúvidas com a equipe e
              fechar o seu parcelamento com tranquilidade.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            <figure className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-card transition hover:border-primary/60 hover:shadow-glow lg:row-span-2">
              <img
                src={photoLojaInterior}
                alt="Interior da loja Supritronica"
                loading="lazy"
                className="h-full min-h-[420px] w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-black/50 px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-primary backdrop-blur">
                  Loja física
                </div>
                <h3 className="mt-3 font-display text-2xl font-bold text-premium">
                  Ambiente moderno e completo
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  R. Prudente de Moraes, 3108, Centro, São José do Rio Preto.
                </p>
              </figcaption>
            </figure>

            <figure className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-card transition hover:border-primary/60 hover:shadow-glow">
              <img
                src={photoLogoWall}
                alt="Fachada com logo iluminado da Supritronica"
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
                src={photoIphone}
                alt="iPhone disponível na Supritronica"
                loading="lazy"
                className="h-[260px] w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-5">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-black/50 px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-primary backdrop-blur">
                  Disponível
                </div>
                <h3 className="mt-2 font-display text-lg font-bold text-premium">
                  Linha iPhone Pro Max
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  Com parcelamento no boleto para negativados.
                </p>
              </figcaption>
            </figure>
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
                <span className="text-premium">Confiança que se constrói</span>{" "}
                <span className="text-gradient-primary">no atendimento.</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                Presença física no centro de São José do Rio Preto, equipe próxima e compromisso
                com cada cliente que entra pela nossa porta.
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
              <span className="text-premium">Perguntas</span>{" "}
              <span className="text-gradient-primary">frequentes</span>
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

      {/* Contato e localização */}
      <section id="contato" className="relative overflow-hidden border-t border-border/60 py-24">
        <div className="absolute inset-0 bg-gradient-radial-glow" aria-hidden />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Onde estamos
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight sm:text-5xl">
              <span className="text-premium">Te esperamos no coração</span>{" "}
              <span className="text-gradient-primary">de Rio Preto.</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Nossa loja fica no centro da cidade, em um endereço fácil de chegar. Passe para ver os
              aparelhos de perto, conversar com a equipe e descobrir em quantas parcelas o seu
              próximo iPhone, Android ou MacBook cabe no seu orçamento.
            </p>

            <div className="mt-8 grid gap-3">
              <ContactLine
                icon={MapPin}
                text="R. Prudente de Moraes, 3108, Centro, São José do Rio Preto, SP"
              />
              <ContactLine icon={Phone} text="(17) 99647-1617" href="tel:+5517996471617" />
              <ContactLine
                icon={Mail}
                text="atendimento@supritronica.com.br"
                href="mailto:atendimento@supritronica.com.br"
              />
              <ContactLine icon={Clock} text="Segunda a sexta, 9h às 18h. Sábado, 9h às 13h." />
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-shine mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-glow transition hover:brightness-110"
            >
              <span className="btn-shine-inner" aria-hidden />
              <MessageCircle className="h-5 w-5" /> Fale com a Supritronica
            </a>
          </div>

          <div className="overflow-hidden rounded-3xl border border-border shadow-card">
            <iframe
              title="Mapa da localização da Supritronica"
              src="https://www.google.com/maps?q=R.+Prudente+de+Moraes,+3108,+Centro,+S%C3%A3o+Jos%C3%A9+do+Rio+Preto+SP&output=embed"
              loading="lazy"
              className="h-full min-h-[420px] w-full"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/60 bg-surface/60">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <div className="flex items-center">
                <img
                  src={logoAsset}
                  alt="Supritronica"
                  className="h-6 w-auto object-contain"
                />
              </div>

              <p className="mt-4 max-w-md text-sm text-muted-foreground">
                Venda de iPhones, Android e MacBooks com parcelamento no boleto, mesmo para
                negativados, e conserto de celulares em São José do Rio Preto.
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
                  ["Venda de iPhones", "#iphones"],
                  ["Venda de Android", "#android"],
                  ["Venda de MacBooks", "#macbooks"],
                  ["Parcelamento no boleto", "#boleto"],
                  ["Conserto de celulares", "#conserto"],
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
                <li>Centro, São José do Rio Preto, SP</li>
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
            <span>Tecnologia acessível para todos.</span>
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
        <span className="hidden sm:inline">Simule seu parcelamento</span>
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
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
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
