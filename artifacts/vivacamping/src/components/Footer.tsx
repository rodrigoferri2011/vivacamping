import { Link } from "wouter";
import { Phone, Instagram, MapPin } from "lucide-react";

const WHATSAPP_NUMBER = "5519998161001";
const WHATSAPP_MESSAGE = encodeURIComponent("Olá! Vim através do site do Viva Camping para fazer um orçamento.");

export default function Footer() {
  return (
    <footer className="bg-[#1a2344] text-gray-200 pt-12 pb-6 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo.jpeg"
                alt="Viva Camping"
                className="h-12 w-12 rounded-full object-cover border-2 border-orange-400"
              />
              <div>
                <span className="text-white font-bold text-lg leading-tight block">VIVA CAMPING</span>
                <span className="text-orange-400 text-xs font-medium tracking-wider">LOCAÇÃO E EXPERIÊNCIA</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Seu parceiro para aventuras inesquecíveis ao ar livre. Equipamentos de qualidade para você e sua família.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Navegação</h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Início" },
                { href: "/produtos", label: "Produtos" },
                { href: "/videos", label: "Vídeos" },
                { href: "/sobre", label: "Sobre a Marca" },
                { href: "/contato", label: "Contato" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-orange-400 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contato</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-green-400 text-sm transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  (19) 99816-1001
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/vivacamping_sp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-orange-400 text-sm transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                  @vivacamping_sp
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                Campinas, SP — Brasil
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Viva Camping. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-xs">
            Locação e Experiência de Campismo
          </p>
        </div>
      </div>
    </footer>
  );
}
