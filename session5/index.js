// const http = require("http")
// const port = 3000
// const server = http.createServer((req,res)=>{
//    res.statusCode=200
//    res.setHeader('Content-Type','text/plain')
//     res.end("hello")
// })
// server.listen(port)
const express = require("express")
const app=express()
app.get('',(req,res)=>{
    res.status(200).send("hello")
} )
app.get("/t", (req, res)=>{
    res.send("test")
})
app.listen(3000)








