export interface Product {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  images: string[];
  category: string;
}

export const products: Product[] = [
  {
    id: "elasticos",
    name: "Elásticos",
    shortDescription: "Elásticos com ganchos para fixação segura de lonas e estruturas de camping.",
    description: "Descrição em breve.",
    images: ["/elasticos2.png", "/elasticos3.png"],
    category: "Fixação",
  },
  {
    id: "catracas",
    name: "Catracas",
    shortDescription: "Catracas de alta resistência para tensionar e fixar coberturas e lonas.",
    description: "Descrição em breve.",
    images: ["/catracas.png"],
    category: "Fixação",
  },
  {
    id: "corda",
    name: "Corda",
    shortDescription: "Corda resistente com mosquetão para ancoragem e instalação de estruturas.",
    description: "Descrição em breve.",
    images: ["/corda.png"],
    category: "Fixação",
  },
  {
    id: "poste",
    name: "Poste",
    shortDescription: "Poste regulável em altura com base sólida para suporte de lonas e coberturas.",
    description: "Descrição em breve.",
    images: ["/poste1.png", "/poste2.png", "/poste3.png"],
    category: "Estrutura",
  },
  {
    id: "extensao-aquecedor",
    name: "Extensão para Aquecedor",
    shortDescription: "Extensão elétrica de longo alcance para conexão de aquecedores no camping.",
    description: "Descrição em breve.",
    images: ["/extensao-aquecedor1.png", "/extensao-aquecedor2.png"],
    category: "Elétrica",
  },
  {
    id: "quadro-energia",
    name: "Quadro de Energia",
    shortDescription: "Quadro de distribuição elétrica completo com medidor para eventos e camping.",
    description: "Descrição em breve.",
    images: ["/quadro-energia.png"],
    category: "Elétrica",
  },
  {
    id: "mini-quadro-energia",
    name: "Mini Quadro de Energia",
    shortDescription: "Mini quadro elétrico compacto com disjuntor e medidor de energia.",
    description: "Descrição em breve.",
    images: ["/mini-quadro1.png", "/mini-quadro2.png"],
    category: "Elétrica",
  },
  {
    id: "specs-barraca",
    name: "Specs de Barraca",
    shortDescription: "Conjunto de estacas de diferentes tamanhos para fixação de barracas no solo.",
    description: "Descrição em breve.",
    images: ["/specs-barraca.png"],
    category: "Estrutura",
  },
  {
    id: "extensao-geral",
    name: "Extensão Geral para Dentro da Barraca",
    shortDescription: "Extensão com múltiplas tomadas para distribuição de energia dentro da barraca.",
    description: "Descrição em breve.",
    images: ["/extensao-geral.png"],
    category: "Elétrica",
  },
];

export const categories = ["Todos", ...Array.from(new Set(products.map((p) => p.category)))];
