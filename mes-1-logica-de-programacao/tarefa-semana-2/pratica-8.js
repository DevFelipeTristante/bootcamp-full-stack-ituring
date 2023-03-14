function parOuImpar(numero) {
    const ehPar = numero%2 === 0
    if (ehPar)
        console.log(`O número ${numero} é par`)
    else
        console.log(`O número ${numero} é ímpar`)
}

parOuImpar(23)
parOuImpar(10)
parOuImpar(77)
parOuImpar(20)
parOuImpar(2)