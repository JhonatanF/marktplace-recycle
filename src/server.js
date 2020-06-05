const express = require("express")
const server = express()

//torna a pasta publica para o projeto
server.use(express.static("public"))


//utilizando o template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})



//Configura caminhos da minha aplicação
server.get("/", (req, res) => {
    return res.render("index.html", {title: "Um titulo"} )
})
server.get("/create-point", (req, res) => {
    return res.render("create-point.html")
})
server.get("/seach", (req, res) => {
    return res.render("seach-results.html")
})

server.listen(3000)