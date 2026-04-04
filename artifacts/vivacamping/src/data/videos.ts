export interface Video {
  id: string;
  title: string;
  channel: string;
  description: string;
  youtubeId: string;
  url: string;
}

export const videos: Video[] = [
  {
    id: "video-1",
    title: "Estrutura de camping de primeiro mundo",
    channel: "Familia Neves Maia",
    description: "Nossa estrutura",
    youtubeId: "JBQ7oIZ5I3c",
    url: "https://youtu.be/JBQ7oIZ5I3c?si=5xT0H_u9d9G1JUzj",
  },
  {
    id: "video-2",
    title: "Quadro de energia Viva Camping",
    channel: "Dois Pés do Mato",
    description: "Nosso quadro",
    youtubeId: "eRIOIoPbhnI",
    url: "https://youtu.be/eRIOIoPbhnI?si=UY7NvwDdJYjeSpRt",
  },
  {
    id: "video-3",
    title: "Hotel de barracas",
    channel: "Campinejo",
    description: "Nossos grupos",
    youtubeId: "x6S9FlRcnUE",
    url: "https://youtu.be/x6S9FlRcnUE?si=W2WbqyisVot3ZO6c",
  },
  {
    id: "video-4",
    title: "Hotel de barracas pt.2",
    channel: "Campinejo",
    description: "Nossos grupos",
    youtubeId: "6JKlSWmGwHI",
    url: "https://youtu.be/6JKlSWmGwHI?si=nzGUwOHOxlnWDq4x",
  },
];
