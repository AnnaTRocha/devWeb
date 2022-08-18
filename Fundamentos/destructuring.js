const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco:{
        logradouro: 'Rua abc',
        numero: 1000
    }
}

// as chaves aqui server para pegar os itens
const {nome, idade, endereco: {logradouro}} = pessoa
console.log(nome, idade, logradouro)

const { nome: n, idade: i } = pessoa
console.log(n, i) //variáveis


