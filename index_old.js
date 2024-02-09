const http = require('http')

http.createServer((req, res) => {

    res.writeHead(200, { 'Content-type': 'text/plain' })
    res.write('hola mucxndo')
    res.end()
}).listen(8080)

console.log('escuchando por el puerto', 8080)