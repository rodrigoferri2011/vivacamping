import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="product-card group">
      <div className="relative overflow-hidden h-52 bg-white">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-contain p-1 group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
            {product.category}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-bold text-foreground text-lg leading-tight mb-2">{product.name}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
          {product.shortDescription}
        </p>
        <Link
          href={`/produto/${product.id}`}
          className="inline-flex items-center gap-2 bg-[#1a2344] hover:bg-orange-500 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all w-full justify-center"
        >
          Ver Produto
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
