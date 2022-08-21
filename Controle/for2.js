const notas = [6.7, 8.4, 9, 3, 1, 7.7]
const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for (let i in notas) {
    console.log(i, notas[i])
}

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}