function alterarqtd(produto, acao){
    const qtd = document.getElementById('qtd_' + produto)
    const valor = document.getElementById('valor_' + produto)
    const total = document.getElementById('total_' + produto)

    if(acao == '-' && qtd.innerHTML == 0){
        alert('Atenção! A quantidade Não pode ser menor que 0.')
    } else {
        acao == '+' ? qtd.innerHTML++ : qtd.innerHTML--
        const valorTotal = qtd.innerHTML * somenteNumero(valor.innerHTML)
        total.innerHTML = formatarValor(valorTotal)
        soma()
    }
    }
function soma(){
    let soma = 0

    for(let i = 1; i < 4; i++){
        let numero = somenteNumero(document.getElementById('total_' + i).innerHTML)
        soma +=  Number(numero)
    }
    document.getElementById('subtotal').innerHTML = formatarValor(soma)
}
function somenteNumero(n){
    return n.replace(/\D/g, '')
}
function formatarValor(n){
    return 'R$' + n.toLocaleString('pt-BR')
}