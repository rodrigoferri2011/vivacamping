import { Link } from "wouter";
import { ArrowRight, Phone, Star, Shield, Truck } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const WHATSAPP_NUMBER = "5519998161001";
const WHATSAPP_MESSAGE = encodeURIComponent("Olá! Vim pelo site da Vivacamping e gostaria de fazer um orçamento.");

const featuredProducts = products.slice(0, 4);

export default function Home() {
  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero.jpeg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a2344]/90 via-[#1a2344]/75 to-[#1a2344]/50" />

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <img
              src="/logo.jpeg"
              alt="Vivacamping"
              className="h-32 w-32 rounded-full border-4 border-orange-400 shadow-2xl object-cover"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-4">
            VIVA <span className="text-orange-400">CAMPING</span>
          </h1>
          <p className="text-xl md:text-2xl text-orange-300 font-medium tracking-widest mb-6 uppercase">
            Locação &amp; Experiência de Campismo
          </p>
          <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Equipamentos premium para aventuras inesquecíveis ao ar livre. Sua família merece o melhor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/produtos"
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-xl hover:scale-105"
            >
              Ver Produtos
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-xl hover:scale-105"
            >
              <Phone className="h-5 w-5" />
              Fazer Orçamento
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center pt-2">
            <div className="w-1 h-3 bg-white/60 rounded-full" />
          </div>
        </div>
      </section>

      {/* ── BRAND STORY TEASER ── */}
      <section className="py-20 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">Nossa História</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">Paixão pela Natureza</h2>
              {/* PLACEHOLDER: Adicione o texto da história da marca aqui */}
              <p className="text-muted-foreground leading-relaxed mb-4">
                A Vivacamping nasceu da paixão por aventuras ao ar livre e do desejo de compartilhar experiências únicas em contato com a natureza. Nossa missão é proporcionar equipamentos de qualidade e experiências memoráveis para famílias e grupos.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Com anos de experiência no mercado de camping e locação de equipamentos, nos tornamos referência em São Paulo para quem busca qualidade, conforto e segurança em suas aventuras ao ar livre.
              </p>
              <Link
                href="/sobre"
                className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-semibold transition-colors"
              >
                Conheça nossa história completa
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="/camp2.jpeg" alt="Camping" className="rounded-xl object-cover h-48 w-full shadow-lg" />
              <img src="/camp3.jpeg" alt="Camping" className="rounded-xl object-cover h-48 w-full shadow-lg mt-6" />
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="py-16 bg-[#1a2344]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                icon: <Star className="h-8 w-8 text-orange-400 mx-auto mb-3" />,
                title: "Qualidade Premium",
                desc: "Equipamentos selecionados para garantir durabilidade e conforto em qualquer aventura.",
              },
              {
                icon: <Shield className="h-8 w-8 text-orange-400 mx-auto mb-3" />,
                title: "Segurança Garantida",
                desc: "Todos os nossos produtos passam por rigoroso controle de qualidade antes da entrega.",
              },
              {
                icon: <Truck className="h-8 w-8 text-orange-400 mx-auto mb-3" />,
                title: "Entrega e Suporte",
                desc: "Atendimento personalizado via WhatsApp e suporte completo para sua aventura.",
              },
            ].map((item) => (
              <div key={item.title} className="p-6">
                {item.icon}
                <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">Catálogo</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-1">Produtos em Destaque</h2>
            </div>
            <Link
              href="/produtos"
              className="hidden sm:inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-semibold transition-colors"
            >
              Ver todos
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/produtos"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-xl transition-all"
            >
              Ver todos os produtos
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── GALLERY STRIP ── */}
      <section className="pb-4 overflow-x-auto">
        <div className="flex gap-4 px-4 w-max">
          {["/hero.jpeg", "/camp1.jpeg", "/camp2.jpeg", "/camp3.jpeg"].map((img, i) => (
            <div key={i} className="flex-shrink-0 w-72 h-48 rounded-xl overflow-hidden">
              <img src={img} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA WHATSAPP ── */}
      <section className="py-20 bg-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Pronto para sua próxima aventura?
          </h2>
          <p className="text-orange-100 text-lg mb-8">
            Entre em contato pelo WhatsApp e faça seu orçamento agora mesmo!
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white hover:bg-gray-50 text-green-600 font-black px-10 py-4 rounded-2xl text-xl transition-all shadow-xl hover:scale-105"
          >
            <Phone className="h-6 w-6" />
            Fazer Orçamento pelo WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
