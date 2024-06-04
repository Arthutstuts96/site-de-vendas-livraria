const listaLivros = document.querySelector('.lista__livros');

// pegarLivrosNaApi();
/******************** */
async function pegarLivrosNaApi(){
    const api = await fetch('http://localhost:3000/livros');
    const resposta = await api.json();

    resposta.forEach((livro) => {
        listaLivros.innerHTML += `
            <li>
                <p>${livro.nome}</p>
                <p>${livro.autor}</p>
                <p>${livro.preco}</p>
            </li>
        `
    });
}
