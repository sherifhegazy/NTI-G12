// define express package
const express = require('express')
const path = require("path")
// create intance(object) from express
const app = express()
//define port
const PORT = 3000
//define express static assets
const staticDir = path.join(__dirname, "public") 
app.use( express.static(staticDir) )
//set view engine
app.set("view engine", "hbs")
//Routes (page links)
//base route localhost:PORT ("") other start  with /link  - localhost:3000/about  => ("/about")
app.get("", (req, res)=>{
    res.send("hello from our app")
})
//localhost:3000/json
app.get("/json", (req, res)=>{
    let data = {name: "marwa", age: 36}
    res.send(data)
})
//localhost:3000/html
app.get("/html", (req,res)=>{
    res.send("<h1>hello from express</h1>")
})
//localhost:3000/a
app.get("/a", (req,res)=>{
    res.sendFile( path.join(__dirname,"a.html") )
})
//hbs
app.get("/hbs", (req,res)=>{
    res.render("home")
})
//listen to server
app.listen(PORT, ()=> console.log(`we are on http://localhost:${PORT}`))
