import { useState } from "react";
import { useParams, Link } from "wouter";
import { ChevronLeft, ChevronRight, Phone, ArrowLeft, Share2 } from "lucide-react";
import { products } from "@/data/products";

const WHATSAPP_NUMBER = "5519998161001";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);
  const [currentImage, setCurrentImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Produto não encontrado</h1>
          <Link href="/produtos" className="text-orange-500 hover:underline flex items-center gap-1 justify-center">
            <ArrowLeft className="h-4 w-4" /> Voltar aos produtos
          </Link>
        </div>
      </div>
    );
  }

  const whatsappMessage = encodeURIComponent(
    `Olá! Vim pelo site da Vivacamping e gostaria de fazer um orçamento para: ${product.name}`
  );

  const prevImage = () =>
    setCurrentImage((i) => (i === 0 ? product.images.length - 1 : i - 1));
  const nextImage = () =>
    setCurrentImage((i) => (i === product.images.length - 1 ? 0 : i + 1));

  const shareProduct = () => {
    if (navigator.share) {
      navigator.share({ title: product.name, text: product.shortDescription, url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="bg-[#1a2344] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors">Início</Link>
            <span className="text-gray-600">/</span>
            <Link href="/produtos" className="text-gray-400 hover:text-white transition-colors">Produtos</Link>
            <span className="text-gray-600">/</span>
            <span className="text-orange-400 font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Link
          href="/produtos"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar aos produtos
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* IMAGE GALLERY */}
          <div>
            <div className="relative bg-muted rounded-2xl overflow-hidden aspect-[4/3] mb-4 shadow-lg">
              <img
                src={product.images[currentImage]}
                alt={`${product.name} - imagem ${currentImage + 1}`}
                className="w-full h-full object-cover"
              />
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-all hover:scale-110"
                    aria-label="Imagem anterior"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-all hover:scale-110"
                    aria-label="Próxima imagem"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}
              <div className="absolute bottom-3 right-3 bg-black/50 text-white text-xs px-2.5 py-1 rounded-full">
                {currentImage + 1} / {product.images.length}
              </div>
            </div>

            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImage(i)}
                    className={`flex-1 aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      i === currentImage
                        ? "border-orange-500 scale-105 shadow-md"
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                    aria-label={`Ver imagem ${i + 1}`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* PRODUCT INFO */}
          <div className="flex flex-col">
            <div className="mb-2">
              <span className="bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full">
                {product.category}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-black text-foreground mt-3 mb-4 leading-tight">
              {product.name}
            </h1>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              {product.shortDescription}
            </p>

            <div className="bg-muted/40 rounded-xl p-5 mb-8">
              <h2 className="font-bold text-foreground mb-3 text-sm uppercase tracking-wide">Descrição do Produto</h2>
              {/* PLACEHOLDER: Adicione a descrição detalhada abaixo */}
              <div className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">
                {product.description}
              </div>
            </div>

            <div className="space-y-3 mt-auto">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-black text-lg px-8 py-4 rounded-2xl transition-all shadow-xl hover:scale-[1.02] w-full"
              >
                <Phone className="h-6 w-6" />
                Fazer Orçamento pelo WhatsApp
              </a>

              <div className="flex gap-3">
                <Link
                  href="/produtos"
                  className="flex-1 flex items-center justify-center gap-2 border-2 border-[#1a2344] text-[#1a2344] hover:bg-[#1a2344] hover:text-white font-semibold py-3 rounded-xl transition-all"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Outros Produtos
                </Link>
                <button
                  onClick={shareProduct}
                  className="flex items-center justify-center gap-2 border-2 border-muted text-muted-foreground hover:border-orange-500 hover:text-orange-500 px-4 py-3 rounded-xl transition-all"
                  aria-label="Compartilhar"
                >
                  <Share2 className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-xs text-muted-foreground text-center">
                📱 Atendimento rápido via WhatsApp · 🏕️ Equipamentos verificados · 🚚 Entrega combinada
              </p>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Outros Produtos</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products
              .filter((p) => p.id !== id)
              .slice(0, 4)
              .map((p) => (
                <Link
                  key={p.id}
                  href={`/produto/${p.id}`}
                  className="group block rounded-xl overflow-hidden border border-card-border hover:border-orange-300 transition-all"
                >
                  <div className="h-32 overflow-hidden">
                    <img
                      src={p.images[0]}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-3 bg-card">
                    <p className="font-semibold text-xs text-foreground leading-tight line-clamp-2">{p.name}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
