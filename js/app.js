function comprar() {
    //recuperar o valor do tipo de ingresso
    let tipo = document.getElementById('tipo-ingresso').value;
    //recuperar o valor da quantidade
    let quantidade = parseInt(document.getElementById('qtd').value);
    //validação de entrada
    if (quantidade <= 0 || !Number.isInteger(quantidade)) {
        alert(`Por favor, digite uma quantidade válida!`)
        document.getElementById('qtd').value = '';
        return;
    }
    compararIngresso(tipo, quantidade);
}

function compararIngresso(tipo, quanitadade) {
    let estoque = document.getElementById(`qtd-${tipo}`).textContent;
    let quantidadeDisponivel = parseInt(estoque);
    
    //comparar a quanitadade escolhida com a disponível
    if(quanitadade > quantidadeDisponivel) {
        alert(`Quantidade indispinível para tipo ${tipo} !`);
    } else {
        quantidadeDisponivel -= quanitadade;
        document.getElementById(`qtd-${tipo}`).textContent = quantidadeDisponivel; 
        alert('Compra realizada com sucesso!')
    }
}