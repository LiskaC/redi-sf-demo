import http from 'http'

const server = http.createServer((req, res) => {

})

const PORT = 3000
const HOST = 'localhost'

server.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`)
})
