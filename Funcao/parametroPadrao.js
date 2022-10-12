function soma1(a,b,c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a+b+c
}

console.log(soma1(), soma1(2,3), soma1(0,0,0))

function soma2(a,b,c){
    a = a != undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a+b+c
}

function soma3(a = 1, b = 1, c = 1){
    return a+b+c
}