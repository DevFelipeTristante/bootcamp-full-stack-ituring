let calculaDesconto = (valorProduto, desconto) => {
    const valorFinal = valorProduto*(1-desconto/100)
    return valorFinal
}
console.log(calculaDesconto(200, 25))