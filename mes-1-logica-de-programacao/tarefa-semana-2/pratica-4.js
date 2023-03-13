function calculaDesconto(valorProduto, desconto) {
    const valorFinal = valorProduto*(desconto/100)
    return valorFinal
}

console.log(calculaDesconto(200, 25))