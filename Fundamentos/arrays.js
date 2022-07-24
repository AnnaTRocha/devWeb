const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3])

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop()) //pega o ultimo valor e tira
delete valores[0] //primeiro valor deleta
console.log(valores)
