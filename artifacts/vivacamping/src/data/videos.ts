export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  url: string;
}

/* ============================================================
   PLACEHOLDER DATA — Replace with real video links later
   Substitua os urls "PLACEHOLDER_VIDEO_X" pelos links reais do YouTube
   ============================================================ */
export const videos: Video[] = [
  {
    id: "video-1",
    title: "Viva Camping em Ação",
    description: "Veja como montamos nossa estrutura completa de camping em menos de 1 hora.",
    thumbnail: "/camp2.jpeg",
    url: "https://www.youtube.com/watch?v=PLACEHOLDER_VIDEO_1",
  },
  {
    id: "video-2",
    title: "Experiência na Natureza",
    description: "Uma aventura incrível com famílias na beira do lago com nossa tenda premium.",
    thumbnail: "/hero.jpeg",
    url: "https://www.youtube.com/watch?v=PLACEHOLDER_VIDEO_2",
  },
  {
    id: "video-3",
    title: "Como Montar Sua Lona",
    description: "Passo a passo para montar a lona Vivacamping de forma rápida e segura.",
    thumbnail: "/camp3.jpeg",
    url: "https://www.youtube.com/watch?v=PLACEHOLDER_VIDEO_3",
  },
  {
    id: "video-4",
    title: "Dicas de Camping",
    description: "Os melhores truques para aproveitar ao máximo sua experiência de camping.",
    thumbnail: "/camp1.jpeg",
    url: "https://www.youtube.com/watch?v=PLACEHOLDER_VIDEO_4",
  },
  {
    id: "video-5",
    title: "Grupo na Floresta",
    description: "Uma experiência inesquecível de camping em grupo com equipamentos Vivacamping.",
    thumbnail: "/camp2.jpeg",
    url: "https://www.youtube.com/watch?v=PLACEHOLDER_VIDEO_5",
  },
  {
    id: "video-6",
    title: "Montagem Kit Completo",
    description: "Demonstração completa do Kit Camping Vivacamping, da embalagem à montagem.",
    thumbnail: "/camp3.jpeg",
    url: "https://www.youtube.com/watch?v=PLACEHOLDER_VIDEO_6",
  },
];
