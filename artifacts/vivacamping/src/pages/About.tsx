import { Link } from "wouter";
import { ArrowRight, Phone } from "lucide-react";

const WHATSAPP_NUMBER = "5519998161001";
const WHATSAPP_MESSAGE = encodeURIComponent("Olá! Vim através do site do Vivacamping para fazer um orçamento.");

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
            alt="Vivacamping"
            className="h-24 w-24 rounded-full border-4 border-orange-400 shadow-2xl object-cover mx-auto mb-6"
          />
          <span className="text-orange-400 font-semibold text-sm uppercase tracking-widest">Nossa História</span>
          <h1 className="text-4xl md:text-5xl font-black text-white mt-2 mb-4">Sobre a Vivacamping</h1>
          <p className="text-gray-300 text-lg">Locação e Experiência de Campismo em São Paulo</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Section 1 */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-black text-foreground mb-4">
              {/* PLACEHOLDER: Adicione o título da seção aqui */}
              Como Tudo Começou
            </h2>
            {/* PLACEHOLDER: Adicione o texto da história da marca aqui — seção 1 */}
            <p className="text-muted-foreground leading-relaxed mb-4">
              A Vivacamping nasceu da paixão pela natureza e do desejo de compartilhar experiências únicas com famílias e grupos. Nossos fundadores, apaixonados por aventuras ao ar livre, perceberam a necessidade de equipamentos de qualidade acessíveis para todos.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {/* PLACEHOLDER: Continue a história aqui */}
              Com dedicação e amor pelo que fazem, a Vivacamping cresceu e se tornou referência em locação e experiência de campismo em São Paulo, atendendo centenas de famílias com excelência.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
            {/* PLACEHOLDER: Substitua por uma imagem da história da marca */}
            <img src="/camp2.jpeg" alt="Vivacamping em ação" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Section 2 */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3] md:order-first">
            {/* PLACEHOLDER: Substitua por uma imagem relevante */}
            <img src="/camp3.jpeg" alt="Família acampando" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-2xl font-black text-foreground mb-4">
              {/* PLACEHOLDER: Adicione o título da seção aqui */}
              Nossa Missão e Valores
            </h2>
            {/* PLACEHOLDER: Adicione o texto sobre missão e valores aqui */}
            <p className="text-muted-foreground leading-relaxed mb-4">
              Nossa missão é proporcionar experiências inesquecíveis ao ar livre, com equipamentos de alta qualidade e atendimento personalizado. Acreditamos que o camping fortalece laços familiares e cria memórias duradouras.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {/* PLACEHOLDER: Continue aqui */}
              Valorizamos a segurança, o conforto e a sustentabilidade. Cada equipamento é cuidadosamente selecionado e verificado para garantir a melhor experiência.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-muted/40 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-black text-foreground mb-4 text-center">
            {/* PLACEHOLDER: Adicione o título da seção aqui */}
            O Que Nos Diferencia
          </h2>
          <p className="text-muted-foreground leading-relaxed text-center max-w-2xl mx-auto mb-8">
            {/* PLACEHOLDER: Adicione o texto aqui */}
            Com anos de experiência, nos tornamos especialistas em tornar seu camping perfeito.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {[
              { number: "500+", label: "Famílias Atendidas" },
              { number: "5 anos", label: "De Experiência" },
              { number: "100%", label: "Satisfação" },
            ].map((stat) => (
              <div key={stat.label} className="bg-card rounded-xl p-5 shadow-sm">
                {/* PLACEHOLDER: Atualize os números reais aqui */}
                <div className="text-3xl font-black text-orange-500 mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery */}
        <div className="mb-16">
          <h2 className="text-2xl font-black text-foreground mb-6 text-center">Nossa Galeria</h2>
          {/* PLACEHOLDER: Adicione mais fotos da marca aqui */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {["/camp1.jpeg", "/camp2.jpeg", "/camp3.jpeg", "/hero.jpeg", "/camp2.jpeg", "/camp1.jpeg"].map((img, i) => (
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
