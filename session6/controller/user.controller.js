const fs = require("fs")
const uniqid=require("uniqid")

const readDataFromJSON =()=>{
    let data
    try{
        data = JSON.parse(fs.readFileSync('./model/user.json'))
        if(!Array.isArray(data)) throw new Error()
    }
    catch(e){
        data = []
    }
    return data
}
const writeDataToJSON = (data)=>{
    fs.writeFileSync('./model/user.json', JSON.stringify(data))
}
const add = (req,res) => {
    if(req.query.name){
        let allUsers = readDataFromJSON()
        let user = {
            ...req.query,
            id:uniqid()
        }
        allUsers.push(user)
        writeDataToJSON(allUsers)
        res.redirect('/addUser')
    }
    res.render('add', {
        pageTitle:"add new user"
    })
}
const addPost = (req,res) => {
    res.render('addPost', {
        pageTitle:"add new user"
    })
}
const addPostLogic = (req,res) => {
    let allUsers = readDataFromJSON()
    let user = {
        ...req.body,
        id:uniqid()
    }
    allUsers.push(user)
    writeDataToJSON(allUsers)
    res.redirect('/')
}
const showAll = (req,res)=>{
    res.render("showall", {
        pageTitle:"All Users"
    })
}

const showSingle = (req,res)=>{
    const user = {name: "marwa radwan", age:36, email:"marwaradwan@techsexperts.com"}
    res.render("single", {
        pageTitle:"Single User",
        user
    })
}

const editUser = (req,res)=>{
    res.render("edit", {
        pageTitle:"Edit User"
    })
}

const delAll = (req,res)=>{
    res.send("delete all")
}

const delSingle = (req,res)=>{
    res.send("delete")
}

module.exports = { add, addPost,addPostLogic, showAll, showSingle, editUser, delAll, delSingle }