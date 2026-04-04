import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filtered =
    selectedCategory === "Todos"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <div className="bg-[#1a2344] py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-orange-400 font-semibold text-sm uppercase tracking-widest">Catálogo</span>
          <h1 className="text-4xl md:text-5xl font-black text-white mt-2 mb-4">Nossos Produtos</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            {/* PLACEHOLDER: Adicione uma descrição da linha de produtos aqui */}
            Equipamentos de qualidade para sua aventura ao ar livre.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                selectedCategory === cat
                  ? "bg-orange-500 text-white shadow-md"
                  : "bg-muted text-muted-foreground hover:bg-orange-100 hover:text-orange-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* PLACEHOLDER: Adicione mais produtos ao arquivo src/data/products.ts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            Nenhum produto encontrado nesta categoria.
          </div>
        )}

        <div className="mt-16 bg-muted/40 rounded-2xl p-8 text-center">
          <p className="text-muted-foreground text-sm">
            Não encontrou o que procura?{" "}
            <a
              href={`https://wa.me/5519998161001?text=${encodeURIComponent("Olá! Vim através do site do Viva Camping para fazer um orçamento.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-700 font-semibold underline"
            >
              Entre em contato pelo WhatsApp
            </a>{" "}
            e faça uma solicitação personalizada.
          </p>
        </div>
      </div>
    </div>
  );
}
