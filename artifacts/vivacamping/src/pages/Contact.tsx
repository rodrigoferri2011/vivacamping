import { Phone, Instagram, MapPin, Clock, MessageCircle, Mail } from "lucide-react";

const WHATSAPP_NUMBER = "5519998161001";
const WHATSAPP_MESSAGE = encodeURIComponent("Olá! Vim através do site do Viva Camping para fazer um orçamento.");

export default function Contact() {
  return (
    <div className="min-h-screen">
      <div className="bg-[#1a2344] py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-orange-400 font-semibold text-sm uppercase tracking-widest">Fale Conosco</span>
          <h1 className="text-4xl md:text-5xl font-black text-white mt-2 mb-4">Contato</h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            Estamos aqui para ajudar! Entre em contato pelo WhatsApp ou siga nossas redes sociais.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-green-50 border border-green-200 rounded-3xl p-10 text-center mb-10">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
            <MessageCircle className="h-10 w-10 text-white fill-white" />
          </div>
          <h2 className="text-2xl font-black text-gray-800 mb-3">WhatsApp — Canal Principal</h2>
          <p className="text-gray-600 mb-6">
            O jeito mais rápido de falar com a gente. Respondemos todos os dias!
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-black text-xl px-10 py-4 rounded-2xl transition-all shadow-xl hover:scale-105"
          >
            <Phone className="h-6 w-6" />
            (19) 99816-1001
          </a>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          <div className="bg-card border border-card-border rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Instagram className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-bold text-foreground mb-1">Instagram</h3>
            <p className="text-muted-foreground text-sm mb-3">Siga-nos para conteúdo diário</p>
            <a
              href="https://instagram.com/vivacamping_sp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange-600 font-semibold text-sm underline"
            >
              @vivacamping_sp
            </a>
          </div>

          <div className="bg-card border border-card-border rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-[#1a2344] rounded-xl flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-6 w-6 text-orange-400" />
            </div>
            <h3 className="font-bold text-foreground mb-1">Localização</h3>
            <p className="text-muted-foreground text-sm mb-1">
              {/* PLACEHOLDER: Adicione o endereço completo aqui */}
              Campinas, SP — Brasil
            </p>
            <p className="text-muted-foreground text-xs">Atendemos toda a região de SP</p>
          </div>

          <div className="bg-card border border-card-border rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Clock className="h-6 w-6 text-orange-500" />
            </div>
            <h3 className="font-bold text-foreground mb-1">Horário de Atendimento</h3>
            {/* PLACEHOLDER: Adicione os horários reais aqui */}
            <p className="text-muted-foreground text-sm">Segunda a Sábado</p>
            <p className="text-muted-foreground text-sm">9h às 18h</p>
          </div>

          <div className="bg-card border border-card-border rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Mail className="h-6 w-6 text-orange-500" />
            </div>
            <h3 className="font-bold text-foreground mb-1">E-mail</h3>
            <a
              href="mailto:vivacampingsp@gmail.com"
              className="text-orange-500 hover:text-orange-600 font-semibold text-sm underline break-all"
            >
              vivacampingsp@gmail.com
            </a>
          </div>
        </div>

        <div className="bg-[#1a2344] rounded-3xl p-8 text-center">
          <h2 className="text-xl font-black text-white mb-3">Solicite um Orçamento</h2>
          <p className="text-gray-300 text-sm mb-6">
            Informe o produto desejado, quantidade e data — faremos o melhor orçamento para você!
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Vim através do site do Viva Camping para fazer um orçamento. Produto: [informe o produto]. Quantidade: [informe a quantidade]. Data: [informe a data].")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-xl transition-all"
          >
            <Phone className="h-5 w-5" />
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </div>
  );
}
