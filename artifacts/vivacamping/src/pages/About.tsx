import { Link } from "wouter";
import { ArrowRight, Phone } from "lucide-react";

const WHATSAPP_NUMBER = "5519998161001";
const WHATSAPP_MESSAGE = encodeURIComponent("Olá! Vim através do site do Viva Camping para fazer um orçamento.");

export default function About() {
  return (
    <div className="min-h-screen">
      <div
        className="relative py-24 px-4 text-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1a2344 0%, #253060 100%)" }}
      >
        <div className="relative z-10 max-w-3xl mx-auto">
          <img
            src="/logo.jpeg"
            alt="Viva Camping"
            className="h-24 w-24 rounded-full border-4 border-orange-400 shadow-2xl object-cover mx-auto mb-6"
          />
          <span className="text-orange-400 font-semibold text-sm uppercase tracking-widest">Nossa História</span>
          <h1 className="text-4xl md:text-5xl font-black text-white mt-2 mb-4">Sobre o Viva Camping</h1>
          <p className="text-gray-300 text-lg">Locação e Experiência de Campismo em Campinas</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Section 1 */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-black text-foreground mb-4">Como Tudo Começou</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              O Viva Camping nasceu em 2019, movido por algo simples, mas poderoso: a paixão pela natureza e pela experiência única que o campismo proporciona. Muito mais do que uma marca, o Viva Camping surgiu como um convite — um chamado para viver momentos reais, longe da correria do dia a dia, conectado ao essencial.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Desde o início, sua missão sempre foi clara: tornar o campismo mais acessível, seguro e bem estruturado para todos. Começando com a locação de equipamentos, incluindo o aluguel de barracas, o Viva Camping ajudou inúmeras pessoas a darem seus primeiros passos no mundo do camping, oferecendo praticidade e confiança para quem queria viver essa experiência.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
            <img src="/about-story1.jpeg" alt="Viva Camping em ação" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Section 2 */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3] md:order-first">
            <img src="/about-story2.jpeg" alt="Acampamento Viva Camping" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-2xl font-black text-foreground mb-4">Crescimento e Evolução</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Com o tempo, o Viva Camping cresceu e evoluiu, passando também a oferecer a venda de artigos para camping, sempre priorizando qualidade, resistência e funcionalidade — características essenciais para quem depende de bons equipamentos ao ar livre.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              O projeto também se dedica à organização de grupos de campismo, proporcionando experiências tão bem estruturadas e organizadas que muitos participantes descrevem como um verdadeiro "hotel de barracas". Cada detalhe é pensado para oferecer conforto, segurança e uma vivência diferenciada, elevando o padrão do campismo tradicional.
            </p>
          </div>
        </div>

        {/* Quote */}
        <div className="bg-orange-50 border-l-4 border-orange-500 rounded-2xl p-8 mb-16">
          <p className="text-[#1a2344] text-lg font-semibold leading-relaxed italic text-center">
            "Cada produto, cada serviço e cada detalhe carrega um propósito: proporcionar segurança, conforto e liberdade para que cada cliente possa viver o melhor do campismo."
          </p>
          <p className="text-orange-500 font-bold text-center mt-4">O Viva Camping não vende apenas equipamentos.<br />Ele entrega experiências, conexões e histórias que ficam para sempre. 🏕️🔥</p>
        </div>

        {/* Stats */}
        <div className="bg-muted/40 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-black text-foreground mb-4 text-center">O Que Nos Diferencia</h2>
          <p className="text-muted-foreground leading-relaxed text-center max-w-2xl mx-auto mb-8">
            Desde 2019, nos tornamos especialistas em tornar seu camping perfeito.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {[
              { number: "500+", label: "Famílias Atendidas" },
              { number: "Desde 2019", label: "No Mercado" },
              { number: "100%", label: "Satisfação" },
            ].map((stat) => (
              <div key={stat.label} className="bg-card rounded-xl p-5 shadow-sm">
                <div className="text-3xl font-black text-orange-500 mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery */}
        <div className="mb-16">
          <h2 className="text-2xl font-black text-foreground mb-6 text-center">Nossa Galeria</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {["/about-group.jpeg", "/about-tent-night.jpeg", "/camp3.jpeg", "/about-yoga.jpeg", "/camp2.jpeg", "/about-tents-field.jpeg"].map((img, i) => (
              <div key={i} className="rounded-xl overflow-hidden shadow-md aspect-square">
                <img src={img} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-[#1a2344] rounded-3xl p-10">
          <h2 className="text-2xl font-black text-white mb-3">Vamos juntos nessa aventura?</h2>
          <p className="text-gray-300 mb-6">Entre em contato e planeje sua próxima experiência de camping conosco.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3 rounded-xl transition-all"
            >
              <Phone className="h-5 w-5" />
              Falar pelo WhatsApp
            </a>
            <Link
              href="/produtos"
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-xl transition-all"
            >
              Ver Produtos
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
