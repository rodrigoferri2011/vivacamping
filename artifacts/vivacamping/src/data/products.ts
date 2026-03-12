export interface Product {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  images: string[];
  category: string;
}

/* ============================================================
   PLACEHOLDER DATA — Replace with real product info later
   ============================================================ */
export const products: Product[] = [
  {
    id: "tenda-familia",
    name: "Tenda Familiar Premium",
    shortDescription: "Tenda espaçosa para toda a família, ideal para camping de fim de semana.",
    description:
      "A Tenda Familiar Premium da Vivacamping foi projetada para oferecer conforto e resistência em qualquer aventura ao ar livre. Com espaço para até 6 pessoas, estrutura reforçada e material impermeável de alta qualidade.\n\n" +
      "• Capacidade: até 6 pessoas\n" +
      "• Material: Poliéster 190T impermeável\n" +
      "• Montagem rápida em menos de 10 minutos\n" +
      "• Inclui estacas e cordas de fixação",
    images: ["/camp1.jpeg", "/camp2.jpeg", "/camp3.jpeg"],
    category: "Tendas",
  },
  {
    id: "lona-camping",
    name: "Lona de Camping Grande",
    shortDescription: "Lona resistente e versátil, perfeita para abrigo e proteção.",
    description:
      "A Lona de Camping Grande da Vivacamping é o item essencial para qualquer aventureiro. Versátil e resistente, pode ser usada como abrigo, chão, ou proteção contra chuva e sol.\n\n" +
      "• Dimensões: 6m x 8m\n" +
      "• Material: Lona impermeável reforçada\n" +
      "• Cor laranja vibrante — fácil de localizar\n" +
      "• Inclui ilhoses em aço inox para fixação",
    images: ["/camp2.jpeg", "/camp3.jpeg", "/camp1.jpeg"],
    category: "Lonas e Abrigos",
  },
  {
    id: "cadeira-camping",
    name: "Cadeira Dobrável de Camping",
    shortDescription: "Cadeira leve e confortável, fácil de transportar em qualquer aventura.",
    description:
      "A Cadeira Dobrável de Camping Vivacamping combina conforto e praticidade. Perfeita para acampamentos, churrascos e eventos ao ar livre.\n\n" +
      "• Suporta até 150kg\n" +
      "• Alumínio anodizado — leve e resistente\n" +
      "• Dobra compacta para transporte fácil\n" +
      "• Inclui bolsa de transporte",
    images: ["/camp3.jpeg", "/camp1.jpeg", "/camp2.jpeg"],
    category: "Mobiliário",
  },
  {
    id: "kit-camping",
    name: "Kit Camping Completo",
    shortDescription: "Tudo que você precisa para sua aventura em um único kit.",
    description:
      "O Kit Camping Completo da Vivacamping reúne tudo que você precisa para uma experiência de camping perfeita. Ideal para quem está começando ou para grupos que buscam praticidade.\n\n" +
      "• Tenda para 4 pessoas\n" +
      "• 4 cadeiras dobráveis\n" +
      "• Mesa dobrável\n" +
      "• Lona de proteção 4m x 4m\n" +
      "• Kit de iluminação LED",
    images: ["/hero.jpeg", "/camp2.jpeg", "/camp3.jpeg"],
    category: "Kits",
  },
  {
    id: "mesa-dobravel",
    name: "Mesa Dobrável de Camping",
    shortDescription: "Mesa resistente e compacta, ideal para refeições ao ar livre.",
    description:
      "A Mesa Dobrável de Camping Vivacamping é robusta e prática. Ideal para refeições, jogos e atividades ao ar livre durante seus acampamentos.\n\n" +
      "• Dimensões: 120cm x 60cm\n" +
      "• Altura regulável em 3 posições\n" +
      "• Tampa em madeira laminada resistente\n" +
      "• Pés em alumínio anodizado",
    images: ["/camp1.jpeg", "/camp3.jpeg", "/hero.jpeg"],
    category: "Mobiliário",
  },
  {
    id: "kit-iluminacao",
    name: "Kit de Iluminação LED",
    shortDescription: "Iluminação eficiente e duradoura para seus acampamentos noturnos.",
    description:
      "O Kit de Iluminação LED Vivacamping garante que suas noites de camping sejam bem iluminadas e confortáveis. Econômico e resistente.\n\n" +
      "• Fita LED solar de 10 metros\n" +
      "• Lanterna recarregável de alta potência\n" +
      "• Lanternas de cabeça (2 unidades)\n" +
      "• Bateria portátil solar incluída",
    images: ["/camp2.jpeg", "/hero.jpeg", "/camp1.jpeg"],
    category: "Acessórios",
  },
];

export const categories = ["Todos", ...Array.from(new Set(products.map((p) => p.category)))];
