// Exemplo simples de geração de produtos dinâmicos
const produtos = [
    { nome: "Produto 1", preco: "R$ 99,90", imagem: "images/produto1.jpg" },
    { nome: "Produto 2", preco: "R$ 150,00", imagem: "images/produto2.jpg" },
    { nome: "Produto 3", preco: "R$ 199,90", imagem: "images/produto3.jpg" },
    // Adicione mais produtos conforme necessário
];

// Função para renderizar os produtos
function renderizarProdutos() {
    const container = document.querySelector(".produtos-container");
    container.innerHTML = "";

    produtos.forEach(produto => {
        const card = document.createElement("div");
        card.classList.add("produto-card");

        card.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <div class="produto-info">
                <h3>${produto.nome}</h3>
                <p class="preco">${produto.preco}</p>
                <button class="btn-comprar">Comprar</button>
            </div>
        `;

        container.appendChild(card);
    });
}

// Chama a função para renderizar os produtos ao carregar a página
document.addEventListener("DOMContentLoaded", renderizarProdutos);
