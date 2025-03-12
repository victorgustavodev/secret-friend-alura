//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Adicionar nomes: Os usuários escreverão o nome de um amigo em um campo de texto e o adicionarão a uma lista visível ao clicar em "Adicionar".

// Validar entrada: Se o campo de texto estiver vazio, o programa exibirá um alerta solicitando um nome válido.

// Visualizar a lista: Os nomes inseridos aparecerão em uma lista abaixo do campo de entrada.

// Sorteio aleatório: Ao clicar no botão "Sortear Amigo", um nome da lista será selecionado aleatoriamente e exibido na página.

let nomes = [];

function adicionarAmigo() {
    // pego o valor do input e remove espaços extras
    let inputNome = document.querySelector('.input-name').value.trim();

    // seleciono a lista
    let listaAmigos = document.getElementById('listaAmigos');
    
    // Valida o nome
    if (inputNome === "") {
        alert("Por favor, insira um nome.");
        return; // impede que o restante do código seja executado
    }

    // Verifica se o nome já está na lista
    if (nomes.includes(inputNome)) {
        alert("Esse nome já foi adicionado.");
        return;
    }

    // Atualiza a lista de amigos
    atualizarLista(inputNome, listaAmigos);

    // Limpo o campo do input após adicionar
    document.querySelector('.input-name').value = "";
}

function sortearAmigo() {
    let quantidadeAmigos = nomes.length;

    if (quantidadeAmigos === 0) {
        alert("Insira nomes na lista para sortear");
        return;
    }

    // Sorteia um nome aleatório
    let amigoSorteado = Math.floor(Math.random() * quantidadeAmigos);
    
    // Exibe o nome sorteado
    document.getElementById('resultado').innerHTML = `<li>Amigo sorteado: ${nomes[amigoSorteado]}</li>`;
}

function atualizarLista(inputNome, listaAmigos) {
    // Adiciona o nome no array
    nomes.push(inputNome);

    // Atualiza a lista de amigos no HTML
    let novoItem = document.createElement('li');
    novoItem.textContent = inputNome;
    listaAmigos.appendChild(novoItem);
}
