console.log('1' == 1)
console.log('1' === 1) //compara se os tipos são iguais também
console.log('3' != 3)
console.log('3' !== 3)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('Data', d1 === d2) //endereço de memoria diferentes
console.log('Data', d1 == d2)
console.log('Data', d1.getTime() === d2.getTime())