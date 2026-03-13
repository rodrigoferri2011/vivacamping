import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";

const WHATSAPP_NUMBER = "5519998161001";
const WHATSAPP_MESSAGE = encodeURIComponent("Olá! Vim através do site do Vivacamping para fazer um orçamento.");

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/produtos", label: "Produtos" },
  { href: "/videos", label: "Vídeos" },
  { href: "/sobre", label: "Sobre a Marca" },
  { href: "/contato", label: "Contato" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-[#1a2344] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <img
              src="/logo.jpeg"
              alt="Vivacamping"
              className="h-11 w-11 rounded-full object-cover border-2 border-orange-400"
            />
            <div className="hidden sm:block">
              <span className="text-white font-bold text-lg leading-tight block">VIVA CAMPING</span>
              <span className="text-orange-400 text-xs font-medium tracking-wider">LOCAÇÃO E EXPERIÊNCIA</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  location === link.href
                    ? "text-orange-400"
                    : "text-gray-200 hover:text-orange-400"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all"
            >
              <Phone className="h-4 w-4" />
              WhatsApp
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#1a2344] border-t border-white/10">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location === link.href
                    ? "text-orange-400 bg-white/5"
                    : "text-gray-200 hover:text-orange-400 hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 mt-3 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all w-full justify-center"
            >
              <Phone className="h-4 w-4" />
              Fale pelo WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
