import { ExternalLink, Play } from "lucide-react";
import { videos } from "@/data/videos";

export default function Videos() {
  return (
    <div className="min-h-screen">
      <div className="bg-[#1a2344] py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-orange-400 font-semibold text-sm uppercase tracking-widest">Mídia</span>
          <h1 className="text-4xl md:text-5xl font-black text-white mt-2 mb-4">Nossos Vídeos</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            {/* PLACEHOLDER: Adicione uma descrição da seção de vídeos aqui */}
            Veja nossas aventuras, dicas de camping e demonstrações de produtos em ação.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* PLACEHOLDER: Adicione mais vídeos ao arquivo src/data/videos.ts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <a
              key={video.id}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-card-border hover:-translate-y-1"
            >
              <div className="relative aspect-video overflow-hidden bg-[#1a2344]">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-orange-500/90 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <Play className="h-7 w-7 text-white fill-white ml-1" />
                  </div>
                </div>
                <div className="absolute top-3 right-3 bg-black/50 rounded-full p-1.5">
                  <ExternalLink className="h-3.5 w-3.5 text-white" />
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-bold text-foreground text-lg mb-2 group-hover:text-orange-500 transition-colors">
                  {video.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {video.description}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground text-sm mb-4">Siga-nos nas redes sociais para mais conteúdo</p>
          <a
            href="https://instagram.com/vivacamping_sp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-orange-500 text-white font-semibold px-6 py-3 rounded-xl transition-all hover:scale-105 shadow-lg"
          >
            @vivacamping_sp no Instagram
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
