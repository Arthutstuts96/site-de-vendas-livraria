const listaLivros = document.querySelector('.lista__livros');

pegarLivrosNaApi();
/******************** */
async function pegarLivrosNaApi(){
    const url = 'http://localhost:3000/livros';
    try {
        const api = await fetch(url);
        const resposta = await api.json();
    
        resposta.forEach((livro) => {
            listaLivros.innerHTML += `
                <li class="livro">
                    <button class="adicionar-carrinho">+</button>
                    <img src=${livro.imagem} alt="Imagem da capa do livro" width="225" height="300">
                    <p class="titulo__livro">${livro.nome}</p>
                    <div class="descricao__livro">
                        <p class="autor__livro">${livro.autor}</p>
                        <p class="preco__livro">R$${livro.preco}</p>
                    </div>
                </li>
            `
        });
    }catch(error){
        listaLivros.innerHTML = `
            <span>Erro: Livros não encontrados. Mais informações: ${error}</span>
        `
    }
}
