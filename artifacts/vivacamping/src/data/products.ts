export interface Product {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  specs: { label: string; value: string }[];
  price: string;
  images: string[];
  category: string;
}

export const products: Product[] = [
  {
    id: "elasticos",
    name: "Elásticos",
    shortDescription: "Corda elástica com mosquetão para fixação rápida e segura de tendas e estruturas.",
    price: "R$ 39,00",
    description:
      "Mantenha sua estrutura de camping sempre firme, segura e bem ajustada com a Corda Elástica Vivacamping. Desenvolvida para quem precisa de praticidade e resistência em montagens de tendas e estruturas de apoio, ela oferece fixação rápida e confiável para ambientes externos.\n\nCom 1,5 metro de comprimento e 8 mm de espessura, essa corda elástica proporciona excelente tensão para manter tudo no lugar sem complicação. Seu anel em aço inox garante maior durabilidade e resistência contra ferrugem, enquanto o clip de fixação e o mosquetão de aço permitem uma instalação rápida e segura.\n\nAlém disso, o termo retrátil proporciona melhor acabamento nas extremidades.\n\nIdeal para quem trabalha com montagem de estruturas de camping, eventos ou precisa de uma solução prática para prender e tensionar equipamentos com segurança.",
    specs: [
      { label: "Comprimento", value: "1,5 metro" },
      { label: "Espessura da corda", value: "8 mm" },
      { label: "Cor", value: "Azul ou Vermelho" },
      { label: "Material da corda", value: "Elástico de alta resistência" },
      { label: "Anel", value: "Aço inox" },
      { label: "Fixação", value: "Clip de fixação" },
      { label: "Mosquetão", value: "Aço" },
      { label: "Acabamento", value: "Termo retrátil" },
      { label: "Aplicação", value: "Fixação e tensionamento de tendas e estruturas de camping" },
    ],
    images: ["/elasticos2.png", "/elasticos3.png", "/elasticos-red1.png", "/elasticos-red2.png"],
    category: "Fixação",
  },
  {
    id: "catracas",
    name: "Catracas",
    shortDescription: "Cinta catraca para fixação firme e profissional de coberturas e estruturas de camping.",
    price: "Variável conforme resistência",
    description:
      "Garanta uma fixação firme, segura e profissional para suas estruturas com a Cinta Catraca Vivacamping. Ideal para quem trabalha com montagem de barracas, gazebos, coberturas ou precisa de uma solução confiável para tensionamento e amarração de estruturas em ambientes externos.\n\nFabricada com materiais de alta resistência, essa cinta oferece excelente durabilidade e segurança na fixação. Com 4,5 metros de comprimento, ela proporciona alcance suficiente para diferentes tipos de montagem, permitindo ajustar e tensionar estruturas com facilidade.\n\nDisponível nas cores azul ou laranja, a cinta possui espessura de 2,5 a 5 cm, garantindo maior robustez e resistência durante o uso. O conjunto conta ainda com gancho ultra reforçado e catraca em ferro, oferecendo um sistema de travamento forte e confiável.\n\nPara atender diferentes necessidades, as cintas estão disponíveis em versões de 800 kg ou até 2 toneladas de resistência, permitindo escolher a opção ideal de acordo com o tipo de estrutura ou carga.",
    specs: [
      { label: "Cores disponíveis", value: "Azul ou Laranja" },
      { label: "Espessura da cinta", value: "2,5 cm a 5 cm" },
      { label: "Comprimento", value: "4,5 metros" },
      { label: "Gancho", value: "Ultra reforçado" },
      { label: "Sistema de travamento", value: "Catraca em ferro" },
      { label: "Capacidade de carga", value: "800 kg ou até 2 toneladas" },
    ],
    images: ["/catracas.png"],
    category: "Fixação",
  },
  {
    id: "corda",
    name: "Corda",
    shortDescription: "Corda ultra resistente com mosquetões para ancoragem e fixação de estruturas de camping.",
    price: "R$ 280,00",
    description:
      "Tenha mais segurança e confiabilidade nas suas montagens com a Corda ultra resistente Vivacamping, desenvolvida para oferecer resistência, praticidade e fixação segura em estruturas de camping e atividades que exigem alto desempenho.\n\nFabricada com 10,5 mm de espessura, essa corda oferece excelente resistência e durabilidade, ideal para aplicações que exigem firmeza e confiança. O acabamento em termoretrátil reforça as extremidades da corda, garantindo maior proteção contra desgaste e aumentando sua vida útil.\n\nPara facilitar a instalação e garantir uma fixação segura, a corda acompanha abraçadeiras de fixação e travamento, além de dois mosquetões de aço de 12 mm, que proporcionam uma conexão rápida, prática e resistente.\n\nDisponível nas cores laranja ou branca, ela pode ser fornecida no tamanho padrão de 10 metros, mas também pode ser produzida em comprimento personalizado, conforme a necessidade do cliente.",
    specs: [
      { label: "Espessura", value: "10,5 mm" },
      { label: "Comprimento padrão", value: "10 metros" },
      { label: "Comprimento personalizado", value: "Disponível conforme necessidade" },
      { label: "Cores disponíveis", value: "Laranja ou Branca" },
      { label: "Acabamento", value: "Termoretrátil nas extremidades" },
      { label: "Fixação", value: "Abraçadeiras de fixação e travamento" },
      { label: "Mosquetões", value: "2 unidades em aço de 12 mm" },
      { label: "Aplicação", value: "Fixação, ancoragem e estruturas de camping" },
    ],
    images: ["/corda.png", "/corda-branca.png"],
    category: "Fixação",
  },
  {
    id: "poste",
    name: "Poste",
    shortDescription: "Par de postes estruturais reguláveis em ferro reforçado para suporte de lonas e coberturas.",
    price: "R$ 980,00 o par",
    description:
      "Garanta mais estabilidade, segurança e praticidade na montagem das suas estruturas com o Par de Postes Estruturais Vivacamping. Desenvolvidos para suportar coberturas de barracas, gazebos e outras estruturas de camping, esses postes foram projetados para oferecer máxima resistência e durabilidade, mesmo em montagens exigentes.\n\nFabricados em ferro super reforçado com 2 mm de espessura, eles proporcionam uma estrutura sólida e confiável para sustentar coberturas com segurança. A regulagem de altura ajustável entre 1,70 m e 2,70 m é feita com manípulo de travamento, com travamento a cada 20 centímetros, permitindo adaptar facilmente a altura conforme a necessidade da montagem.\n\nO conjunto também acompanha anéis de aço reforçados, além de dois tripés de fixação, que garantem maior estabilidade no solo. Para reforçar ainda mais a segurança da estrutura, cada tripé utiliza quatro specks com argola, proporcionando uma ancoragem firme e confiável.",
    specs: [
      { label: "Produto", value: "Par de postes estruturais para camping" },
      { label: "Material", value: "Ferro super reforçado" },
      { label: "Espessura do material", value: "2 mm" },
      { label: "Regulagem de altura", value: "1,70 m até 2,70 m" },
      { label: "Sistema de ajuste", value: "Regulagem a cada 20 cm" },
      { label: "Anéis", value: "Aço reforçado" },
      { label: "Base", value: "2 tripés de fixação" },
      { label: "Fixação dos tripés", value: "4 specks com argola por tripé" },
      { label: "Aplicação", value: "Coberturas de barracas, gazebos e estruturas de camping" },
    ],
    images: ["/poste1.png", "/poste2.png", "/poste3.png"],
    category: "Estrutura",
  },
  {
    id: "extensao-aquecedor",
    name: "Extensão para Aquecedor",
    shortDescription: "Extensão elétrica de 10m com proteção dupla para uso com aquecedores no camping.",
    price: "R$ 260,00",
    description:
      "Tenha mais segurança e praticidade na alimentação elétrica do seu acampamento com a Extensão para Campismo Vivacamping, desenvolvida especialmente para o uso com aquecedores e equipamentos de maior potência.\n\nCom 10 metros de comprimento, essa extensão oferece excelente alcance, permitindo conectar equipamentos com mais liberdade dentro da área de camping ou em estruturas de barracas e gazebos. O plugue de 20 amperes garante uma conexão segura e adequada para equipamentos que exigem maior capacidade elétrica.\n\nA extensão utiliza cabo PP 3x2,5 mm, conhecido por sua alta resistência, flexibilidade e segurança para condução de energia, sendo ideal para aplicações que exigem maior confiabilidade elétrica.\n\nAlém disso, o conjunto conta com uma caixa de tomada equipada com dois disjuntores de 20 amperes, oferecendo uma camada extra de proteção para os equipamentos e para a instalação elétrica.",
    specs: [
      { label: "Comprimento", value: "10 metros" },
      { label: "Tipo de cabo", value: "PP 3x2,5 mm" },
      { label: "Plugue", value: "20 amperes" },
      { label: "Caixa de tomada", value: "Integrada" },
      { label: "Proteção elétrica", value: "2 disjuntores de 20 amperes" },
      { label: "Uso indicado", value: "Aquecedores e equipamentos elétricos de alta potência" },
    ],
    images: ["/extensao-aquecedor1.png", "/extensao-aquecedor2.png"],
    category: "Elétrica",
  },
  {
    id: "quadro-energia",
    name: "Quadro de Energia",
    shortDescription: "Quadro de distribuição e monitoramento elétrico completo, à prova d'água, para camping.",
    price: "R$ 850,00",
    description:
      "Tenha muito mais segurança, organização e controle da energia elétrica no seu acampamento com o Quadro de Energia e Monitoramento Vivacamping, desenvolvido especialmente para quem utiliza equipamentos elétricos em estruturas de camping.\n\nIdeal para campistas que utilizam: frigobares, geladeiras, iluminação, ventiladores, aquecedores e outros equipamentos, o sistema garante proteção elétrica e distribuição segura da energia, evitando sobrecargas e proporcionando maior tranquilidade durante o uso.\n\nO equipamento é montado em uma caixa String Box com proteção IP65, totalmente à prova d'água, tornando-o perfeito para uso em ambientes externos. O quadro conta com entrada com cabo PP 3x2,5mm² de 1,5m com plugue de 20 amperes, além de duas saídas para tomadas de alta potência de 20 amperes e três tomadas de 6 amperes.\n\nOutro grande diferencial é o medidor de monitoramento elétrico, que permite acompanhar em tempo real potência, potência acumulada, tensão elétrica, corrente elétrica e fator de potência. O conjunto ainda acompanha tripé e cano prolongador.",
    specs: [
      { label: "Caixa", value: "String Box com proteção IP65 (à prova d'água)" },
      { label: "Entrada elétrica", value: "Plugue de 20 amperes, cabo PP 3x2,5mm², 1,5m" },
      { label: "Saídas de alta potência", value: "2 tomadas de 20 amperes" },
      { label: "Saídas de baixa potência", value: "3 tomadas de 6 amperes" },
      { label: "Disjuntores gerais", value: "2 unidades de 20 amperes" },
      { label: "Disjuntores alta carga", value: "2 unidades" },
      { label: "Disjuntores baixa carga", value: "3 unidades" },
      { label: "Monitoramento", value: "Potência, tensão, corrente, fator de potência" },
      { label: "Estrutura", value: "Tripé, cano prolongador e espeques de fixação" },
      { label: "Uso indicado", value: "Frigobares, geladeiras, iluminação, ventiladores, aquecedores" },
    ],
    images: ["/quadro-energia.png"],
    category: "Elétrica",
  },
  {
    id: "mini-quadro-energia",
    name: "Mini Quadro de Energia",
    shortDescription: "Mini quadro elétrico compacto com disjuntor e medidor de energia.",
    price: "Consulte",
    description: "Descrição em breve.",
    specs: [],
    images: ["/mini-quadro1.png", "/mini-quadro2.png"],
    category: "Elétrica",
  },
  {
    id: "specs-barraca",
    name: "Specs de Barraca",
    shortDescription: "Conjunto de estacas de diferentes tamanhos para fixação de barracas no solo.",
    price: "Consulte",
    description: "Descrição em breve.",
    specs: [],
    images: ["/specs-barraca.png"],
    category: "Estrutura",
  },
  {
    id: "extensao-geral",
    name: "Extensão Geral para Dentro da Barraca",
    shortDescription: "Extensão com múltiplas tomadas para distribuição de energia dentro da barraca.",
    price: "Consulte",
    description: "Descrição em breve.",
    specs: [],
    images: ["/extensao-geral.png"],
    category: "Elétrica",
  },
];

export const categories = ["Todos", ...Array.from(new Set(products.map((p) => p.category)))];
