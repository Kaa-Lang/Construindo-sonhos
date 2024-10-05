// Seleciona os elementos do Construindo Sonhos que serão manipulados
const botao = document.getElementById("botaoInteragir");
const mensagem = document.getElementById("mensagem");

// Adiciona um evento de clique no botão
botao.addEventListener("click", () => {
    // Solicita o nome completo do usuário
    let nome = prompt("Nome completo");

    // Condição para verificar se o nome foi fornecido
    if (nome) {
        // Solicita a idade do usuário
        let idade = prompt("Qual é a sua idade?");

        // Condição para verificar se a idade é um número válido
        if (isNaN(idade) || idade <= 0) {
            mensagem.innerText = "Por favor, insira uma idade válida.";
            mensagem.style.color = "red"; // Altera a cor do texto para vermelho
            return; // Sai da função se a idade não for válida
        }

        // Solicita a quantidade de habitantes na casa
        let quantp = prompt("Quantidade de habitantes na casa");

        // Condição para verificar se a quantidade foi fornecida
        if (isNaN(quantp) || quantp <= 0) {
            mensagem.innerText = "Por favor, insira uma quantidade válida de habitantes.";
            mensagem.style.color = "red"; // Altera a cor do texto para vermelho
            return; // Sai da função se a quantidade não for válida
        }

        // Solicita o CPF para finalizar a inscrição
        let CPF = prompt("Digite seu CPF");

        // Condição para verificar se o CPF é válido
        if (isNaN(CPF) || CPF.length !== 11) {
            mensagem.innerText = "CPF inválido. Verifique se tem 11 números digitados.";
            mensagem.style.color = "red"; // Altera a cor do texto para vermelho
            return; // Sai da função se o CPF não for válido
        }

        // Saída de dados com base na idade fornecida
        if (idade < 18) {
            mensagem.innerText = `Olá, ${nome}! Você tem apenas ${idade} anos e não pode realizar a inscrição.`;
            mensagem.style.color = "red"; // Altera a cor do texto para vermelho
        } else {
            mensagem.innerText = `Olá, ${nome}! Sua inscrição foi realizada com sucesso.`;
            mensagem.style.color = "green"; // Altera a cor do texto para verde
        }    console.log(`Nome completo do usuário: ${nome}`);
    console.log(`Idade do usuário: ${idade}`);
    console.log(`Quantidade de habitantes: ${quantp}`);
    console.log(`CPF do cadastrante: ${CPF}`);
    } else {
        mensagem.innerText = "Por favor, forneça um nome.";
        mensagem.style.color = "red"; // Altera a cor do texto para vermelho
    }

});