//load configuration file .env
require('dotenv').config()
//call required installed pacakages
const express = require("express")
const validator = require("validator")
const hbs = require("hbs")
const uniqid=require("uniqid")
//call required built-in packages
const path = require("path")
const fs = require("fs")
//create express instance
const app = express()
//use views, partials, statics
app.set("view engine", "hbs")
app.use(express.static(path.join(__dirname, "../public")))
app.set('views', path.join(__dirname, "../front/views"))
hbs.registerPartials(path.join(__dirname, "../front/layouts"))
//using routes
const userRoutes = require('../routes/user.routes')
app.use("/user",userRoutes)
//export all app
module.exports=app