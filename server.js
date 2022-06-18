const http = require('http')

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/html"})
    res.end(`
        {
            "name": "Timring",
            "shcool": "Zuri",
            "location": "Lagos"
        }
    `)
})

server.listen(4000, "127.0.0.1")
console.log("server created!")