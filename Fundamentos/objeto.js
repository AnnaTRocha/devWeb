const prod1 = {}
prod1.nome = 'celular'
prod1.preco = 4999.1
prod1['Desconto'] = 0.2

console.log(prod1)

const prod2 = {
    nome: 'Camisa',
    preco: 79.9,
    obj: {
        blabla: 1,
        obj: {
            blabla: 3
        }

    }
}
//JSON - formato textual de objeto
'{ "nome": "camisa", "preco": 88,9 }'

console.log(prod2)