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
      "Mantenha sua estrutura de camping sempre firme, segura e bem ajustada com a Corda Elástica Viva Camping. Desenvolvida para quem precisa de praticidade e resistência em montagens de tendas e estruturas de apoio, ela oferece fixação rápida e confiável para ambientes externos.\n\nCom 1,5 metro de comprimento e 8 mm de espessura, essa corda elástica proporciona excelente tensão para manter tudo no lugar sem complicação. Seu anel em aço inox garante maior durabilidade e resistência contra ferrugem, enquanto o clip de fixação e o mosquetão de aço permitem uma instalação rápida e segura.\n\nAlém disso, o termo retrátil proporciona melhor acabamento nas extremidades.\n\nIdeal para quem trabalha com montagem de estruturas de camping, eventos ou precisa de uma solução prática para prender e tensionar equipamentos com segurança.",
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
      "Garanta uma fixação firme, segura e profissional para suas estruturas com a Cinta Catraca Viva Camping. Ideal para quem trabalha com montagem de barracas, gazebos, coberturas ou precisa de uma solução confiável para tensionamento e amarração de estruturas em ambientes externos.\n\nFabricada com materiais de alta resistência, essa cinta oferece excelente durabilidade e segurança na fixação. Com 4,5 metros de comprimento, ela proporciona alcance suficiente para diferentes tipos de montagem.\n\nDisponível nas cores azul ou laranja, com espessura de 2,5 a 5 cm. O conjunto conta ainda com gancho ultra reforçado e catraca em ferro, oferecendo um sistema de travamento forte e confiável.\n\nDisponível em versões de 800 kg ou até 2 toneladas de resistência. Valores conforme a resistência escolhida.",
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
      "Tenha mais segurança e confiabilidade nas suas montagens com a Corda ultra resistente Viva Camping, desenvolvida para oferecer resistência, praticidade e fixação segura em estruturas de camping e atividades que exigem alto desempenho.\n\nFabricada com 10,5 mm de espessura, essa corda oferece excelente resistência e durabilidade, ideal para aplicações que exigem firmeza e confiança. O acabamento em termoretrátil reforça as extremidades da corda, garantindo maior proteção contra desgaste.\n\nPara facilitar a instalação e garantir uma fixação segura, a corda acompanha abraçadeiras de fixação e travamento, além de dois mosquetões de aço de 12 mm.\n\nDisponível nas cores laranja ou branca, no tamanho padrão de 10 metros ou em comprimento personalizado conforme necessidade.",
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
      "Garanta mais estabilidade, segurança e praticidade na montagem das suas estruturas com o Par de Postes Estruturais Viva Camping. Desenvolvidos para suportar coberturas de barracas, gazebos e outras estruturas de camping, esses postes foram projetados para oferecer máxima resistência e durabilidade.\n\nFabricados em ferro super reforçado com 2 mm de espessura, eles proporcionam uma estrutura sólida e confiável. A regulagem de altura ajustável entre 1,70 m e 2,70 m é feita com manípulo de travamento, com travamento a cada 20 centímetros.\n\nO conjunto acompanha anéis de aço reforçados, além de dois tripés de fixação. Para reforçar ainda mais a segurança, cada tripé utiliza quatro specks com argola, proporcionando uma ancoragem firme e confiável.",
    specs: [
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
    id: "cabo-fixacao",
    name: "Cabo para Fixação de Estruturas",
    shortDescription: "Cabo de alumínio leve e resistente para fixação e ajuste de coberturas e lonas.",
    price: "R$ 25,00",
    description:
      "Garanta mais estabilidade, praticidade e acabamento profissional nas suas montagens com o Cabo para Fixação de Estruturas de Cobertura Viva Camping. Desenvolvido especialmente para o uso em campismo, ele é a solução ideal para quem busca uma fixação eficiente e confiável em diferentes tipos de estruturas.\n\nCom 1,65 metro de comprimento, esse cabo oferece o tamanho perfeito para auxiliar na sustentação e ajuste de coberturas, como lonas, tendas e barracas. Produzido em alumínio, ele é leve, resistente e altamente durável, facilitando o transporte e o manuseio.\n\nSeu acabamento em borracha nas extremidades proporciona maior proteção, evitando desgastes, escorregamentos e garantindo um encaixe mais seguro durante o uso.\n\nProjetado para trabalhar em conjunto com os elásticos Viva Camping, esse cabo se torna ainda mais eficiente, proporcionando uma fixação firme, prática e com padrão profissional.",
    specs: [
      { label: "Comprimento", value: "1,65 metro" },
      { label: "Material", value: "Alumínio" },
      { label: "Acabamento", value: "Pontas com revestimento em borracha" },
      { label: "Compatibilidade", value: "Ideal para uso com elásticos Viva Camping" },
      { label: "Aplicação", value: "Fixação e ajuste de coberturas, lonas, barracas e estruturas" },
      { label: "Diferenciais", value: "Leve, resistente, fácil de manusear e com acabamento profissional" },
    ],
    images: ["/cabo-fixacao1.png", "/cabo-fixacao2.png", "/cabo-fixacao3.png"],
    category: "Fixação",
  },
  {
    id: "specs-barraca",
    name: "Specs de Barraca",
    shortDescription: "Linha completa com 7 modelos de specs em ferro para fixação profissional de barracas e estruturas.",
    price: "A partir de R$ 5,00",
    description:
      "Garanta uma fixação firme, segura e profissional para qualquer tipo de montagem com a Linha Completa de Specs Viva Camping. Desenvolvidos para atender diferentes necessidades no campismo, esses 7 modelos de specs foram pensados para oferecer máxima resistência, versatilidade e durabilidade, seja em areia, terra ou grama.\n\nCada modelo possui uma função específica, permitindo que você tenha sempre a solução ideal para fixar barracas, lonas, ráfias, tarps e estruturas completas com total segurança. Produzidos com ferro de alta qualidade, os specs Viva Camping suportam condições exigentes e garantem estabilidade mesmo em ambientes desafiadores.\n\n💡 Dica: Ter os specs certos faz toda diferença na segurança e estabilidade do seu camping — escolha o modelo ideal para cada tipo de solo e estrutura.",
    specs: [
      { label: "Spec em L · 10 cm · ferro 3/16", value: "Fixação de ráfias e itens leves — R$ 5,00/un" },
      { label: "Spec Argola · 35 cm · ferro 1/4", value: "Elásticos em lonas e tarps (areia) — R$ 15,00/un" },
      { label: "Spec Argola · 25 cm · ferro 1/4", value: "Elásticos em grama ou terra — R$ 13,00/un" },
      { label: "Spec Argola · 20 cm · ferro 1/4", value: "Elásticos em grama ou terra — R$ 11,00/un" },
      { label: "Spec em L · 35 cm · ferro 5/16", value: "Fixação de barracas (areia) — R$ 30,00/un" },
      { label: "Spec Argola · 40 cm · ferro 5/16 + olhal 6mm", value: "Postes de pequenas coberturas — R$ 40,00/un" },
      { label: "Spec Cantoneira · 40 cm · cantoneira 3/16 + olhal 10mm", value: "Postes de grandes coberturas — R$ 50,00/un" },
    ],
    images: ["/specs-barraca.png"],
    category: "Estrutura",
  },
  {
    id: "extensao-aquecedor",
    name: "Extensão para Aquecedor",
    shortDescription: "Extensão elétrica de 10m com proteção dupla para uso com aquecedores no camping.",
    price: "R$ 260,00",
    description:
      "Tenha mais segurança e praticidade na alimentação elétrica do seu acampamento com a Extensão para Campismo Viva Camping, desenvolvida especialmente para o uso com aquecedores e equipamentos de maior potência.\n\nCom 10 metros de comprimento, essa extensão oferece excelente alcance. O plugue de 20 amperes garante uma conexão segura e adequada para equipamentos que exigem maior capacidade elétrica.\n\nA extensão utiliza cabo PP 3x2,5 mm, conhecido por sua alta resistência, flexibilidade e segurança para condução de energia.\n\nAlém disso, o conjunto conta com uma caixa de tomada equipada com dois disjuntores de 20 amperes, oferecendo uma camada extra de proteção para os equipamentos e para a instalação elétrica.",
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
      "Tenha muito mais segurança, organização e controle da energia elétrica no seu acampamento com o Quadro de Energia e Monitoramento Viva Camping, desenvolvido especialmente para quem utiliza equipamentos elétricos em estruturas de camping.\n\nIdeal para campistas que utilizam: frigobares, geladeiras, iluminação, ventiladores, aquecedores e outros equipamentos, o sistema garante proteção elétrica e distribuição segura da energia, evitando sobrecargas.\n\nO equipamento é montado em uma caixa String Box com proteção IP65, totalmente à prova d'água. O quadro conta com entrada com cabo PP 3x2,5mm² de 1,5m com plugue de 20 amperes, além de duas saídas para tomadas de alta potência de 20 amperes e três tomadas de 6 amperes.\n\nO medidor de monitoramento elétrico permite acompanhar em tempo real potência, potência acumulada, tensão elétrica, corrente elétrica e fator de potência. O conjunto ainda acompanha tripé e cano prolongador.",
    specs: [
      { label: "Caixa", value: "String Box com proteção IP65 (à prova d'água)" },
      { label: "Entrada elétrica", value: "Plugue de 20 amperes, cabo PP 3x2,5mm², 1,5m" },
      { label: "Saídas de alta potência", value: "2 tomadas de 20 amperes" },
      { label: "Saídas de baixa potência", value: "3 tomadas de 6 amperes" },
      { label: "Disjuntores gerais", value: "2 unidades de 20 amperes" },
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
    shortDescription: "Mini quadro elétrico compacto com monitoramento e proteção para pequenas estruturas de camping.",
    price: "R$ 390,00",
    description:
      "Tenha mais controle e segurança na sua instalação elétrica com o Mini Quadro de Energia e Monitoramento Viva Camping, a solução ideal para pequenas estruturas de campismo que exigem praticidade sem abrir mão da proteção.\n\nCompacto e eficiente, esse equipamento permite acompanhar em tempo real os principais dados da sua rede elétrica, como tensão, corrente, potência e potência acumulada, ajudando você a usar seus equipamentos com mais consciência e segurança.\n\nProjetado para trabalhar com até 20 amperes, o mini quadro é compatível com redes 127V ou 220V. Ele conta com plugue de 20 amperes e tomada padrão 10/20 amperes.\n\nPara garantir ainda mais proteção, o sistema acompanha um clamper de proteção, essencial para proteger contra surtos elétricos, além de 2 disjuntores unipolares de 20 amperes.",
    specs: [
      { label: "Corrente máxima", value: "20 amperes" },
      { label: "Tensão de operação", value: "127V / 220V" },
      { label: "Monitoramento", value: "Tensão, corrente, potência, potência acumulada" },
      { label: "Proteção adicional", value: "Clamper (proteção contra surtos)" },
      { label: "Plugue", value: "20 amperes" },
      { label: "Tomada", value: "Padrão 10/20 amperes" },
      { label: "Disjuntores", value: "2 disjuntores unipolares de 20 amperes" },
      { label: "Uso indicado", value: "Controle e proteção elétrica para equipamentos de camping" },
    ],
    images: ["/mini-quadro1.png", "/mini-quadro2.png"],
    category: "Elétrica",
  },
  {
    id: "extensao-geral",
    name: "Extensão Geral para Dentro da Barraca",
    shortDescription: "Extensão com 10 tomadas e cabo PP para distribuição de energia segura dentro da barraca.",
    price: "R$ 330,00",
    description:
      "Leve mais praticidade, potência e segurança para o seu acampamento com a Extensão Elétrica Viva Camping, desenvolvida para suportar múltiplos equipamentos com total confiabilidade.\n\nCom 5 metros de comprimento, ela oferece excelente alcance para organizar sua estrutura elétrica no interior da sua barraca. Produzida com cabo PP 3x2,5 mm, garante alta resistência, durabilidade e segurança na condução de energia.\n\nProjetada para suportar até 20 amperes e 4.000 watts de potência, conta com plugue de 20 amperes e impressiona ao oferecer 10 tomadas padrão 10/20 amperes, permitindo conectar vários dispositivos ao mesmo tempo.\n\nSua estrutura é feita em metal super reforçado, com acabamento em termo retrátil, que protege as conexões e aumenta a vida útil do produto.",
    specs: [
      { label: "Comprimento", value: "5 metros" },
      { label: "Tipo de cabo", value: "PP 3x2,5 mm" },
      { label: "Corrente máxima", value: "20 amperes" },
      { label: "Potência máxima", value: "Até 4.000 watts" },
      { label: "Plugue", value: "20 amperes" },
      { label: "Tomadas", value: "10 tomadas padrão 10/20 amperes" },
      { label: "Estrutura", value: "Metal super reforçado" },
      { label: "Acabamento", value: "Termo retrátil" },
      { label: "Aplicação", value: "Frigobares, iluminação, carregadores, aquecedores" },
    ],
    images: ["/extensao-geral.png"],
    category: "Elétrica",
  },
  {
    id: "transformador-5000va",
    name: "Case com Transformador 5.000 VA",
    shortDescription: "Transformador portátil 5.000 VA com case reforçado e monitoramento para uso em camping.",
    price: "R$ 1.980,00",
    description:
      "Tenha potência, segurança e confiabilidade para suas estruturas com o Case com Transformador 5.000 VA Viva Camping, desenvolvido para quem precisa de um sistema elétrico robusto e profissional em ambientes de campismo.\n\nProjetado para suportar equipamentos de maior demanda, esse transformador oferece alto desempenho e estabilidade, sendo compatível com redes 127V ou 220V, garantindo versatilidade para diferentes situações.\n\nO sistema conta com ventoinha silenciosa para entrada e saída de ar, mantendo a temperatura controlada mesmo em uso contínuo, sem gerar incômodos. Para facilitar o monitoramento, possui medidor de tensão e corrente elétrica com display na cor vermelha.\n\nSua estrutura em case de PVC com alumínio é extremamente resistente, com acabamento em termo retrátil, garantindo maior proteção, durabilidade e um visual profissional.",
    specs: [
      { label: "Potência", value: "5.000 VA" },
      { label: "Tensão de operação", value: "127V / 220V" },
      { label: "Ventilação", value: "Ventoinha silenciosa (entrada e saída de ar)" },
      { label: "Monitoramento", value: "Medidor de tensão e corrente elétrica (display vermelho)" },
      { label: "Sinalização", value: "Luz indicadora azul" },
      { label: "Tomadas", value: "Embutidas (vermelha 220V e branca 127V)" },
      { label: "Segurança", value: "Pino de proteção contra choque na entrada" },
      { label: "Estrutura", value: "Case em PVC com alumínio" },
      { label: "Acabamento", value: "Termo retrátil" },
    ],
    images: ["/transformador-case.png", "/transformador-lateral.png", "/transformador-detalhe.png"],
    category: "Elétrica",
  },
  {
    id: "ima-geladeira",
    name: "Ímã de Geladeira",
    shortDescription: "Ímã reutilizável para planejar sua próxima acampada, acompanha caneta e borracha.",
    price: "R$ 20,00",
    description:
      "Organize seus planos de forma prática e divertida com o Ímã de Geladeira Viva Camping. Perfeito para quem ama acampar, ele é ideal para anotar a sua próxima acampada e deixar tudo sempre visível no dia a dia.\n\nAcompanha caneta e borracha, permitindo escrever, apagar e reutilizar quantas vezes quiser. Uma forma simples e funcional de manter seus planos sempre atualizados.",
    specs: [
      { label: "Função", value: "Anotações reutilizáveis" },
      { label: "Acompanha", value: "Caneta e borracha" },
      { label: "Reutilizável", value: "Sim" },
      { label: "Aplicação", value: "Organização de datas e planejamento de acampadas" },
    ],
    images: ["/ima-geladeira.png"],
    category: "Acessórios",
  },
];

export const categories = ["Todos", ...Array.from(new Set(products.map((p) => p.category)))];
