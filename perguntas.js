criarCartao(
    "FruitGen Aero",    
    "O que é o estilo FruitGen Aero?",  
    "É um estilo visual que combina elementos translúcidos, cores suaves e efeitos de blur para criar interfaces modernas e elegantes." 
);

criarCartao(
    "FruitGen Aero",
    "Quais efeitos são mais usados no FruitGen Aero?",
    "Efeitos de transparência, blur de fundo, cores pastel e sombras suaves são bastante usados nesse estilo."
);

criarCartao(
    "FruitGen Aero",
    "Qual é o propósito do blur no FruitGen Aero?",
    "O blur cria um efeito de profundidade e suavidade, dando um ar de elegância e modernidade à interface."
);

criarCartao(
    "FruitGen Aero",
    "Que tipo de cores são utilizadas no FruitGen Aero?",
    "Cores claras, suaves e pastéis são preferidas para manter o visual leve e agradável."
);

criarCartao(
    "FruitGen Aero",
    "Em quais tipos de projetos o FruitGen Aero é mais usado?",
    "É usado principalmente em aplicativos modernos, interfaces web, dashboards e projetos que buscam um design clean e sofisticado."
);

criarCartao(
    "FruitGen Aero",
    "Qual tecnologia CSS é essencial para criar o efeito de blur no FruitGen Aero?",
    "A propriedade backdrop-filter: blur() é fundamental para aplicar o efeito de blur em elementos de fundo."
);

document.querySelectorAll('#container .cartao').forEach(cartao => {
    if (!cartao.innerHTML.trim()) {
        cartao.remove();
    }
});