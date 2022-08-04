const moduloA = require('../../moduloA')
console.log(moduloA.ola)

const http = require('http')
http.createServer((req, res) =>{
    res.write('Bom diaaaa')
    res.end()
}).listen(8080)