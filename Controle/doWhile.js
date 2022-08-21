function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1
//executa pela primeira vez e depois verifica
do {
    opcao = getInteiroAleatorioEntre(-1,10)
    console.log(`A opcao foi ${opcao}`)
} while(opcao != -1)

console.log('fim')