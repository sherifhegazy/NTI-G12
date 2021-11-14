const fs = require("fs")
const uniqid=require("uniqid")
const { all } = require("../routes/user.routes")

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
    const allUsers = readDataFromJSON()
    res.render("showall", {
        pageTitle:"All Users",
        allUsers,
        noData: allUsers.length==0? true: false
    })
}

const showSingle = (req,res)=>{
    let allUsers= readDataFromJSON()
    let user = allUsers.find(user=> user.id==req.params.id)
    if(!user) res.render('err404', {pageTitle:'user not found', err:"invalid user id"})
    res.render("single", { pageTitle:"Single User", user })
}

const editUser = (req,res)=>{
    let allUsers= readDataFromJSON()
    let user = allUsers.find(user=> user.id==req.params.id)
    if(!user) res.render('err404', {pageTitle:'user not found', err:"invalid user id"})
    res.render("edit", {
        pageTitle:"Edit User", user
    })
}
const editUserLogic = (req,res)=>{
    let allUsers= readDataFromJSON()
    let user = allUsers.findIndex(user=> user.id==req.params.id)
    // allUsers[user].name=req.body.name
    // allUsers[user].age=req.body.age
    // allUsers[user].email = req.body.email
    allUsers[user]={...req.body, id:req.params.id}
    writeDataToJSON(allUsers)
    res.redirect("/")
}

const delAll = (req,res)=>{
    writeDataToJSON([])
    res.redirect("/")
}

const delSingle = (req,res)=>{
    let allUsers = readDataFromJSON()
    allUsers = allUsers.filter(user=> user.id!=req.params.id)
    writeDataToJSON(allUsers)
    res.redirect("/")
}

module.exports = { add, addPost,addPostLogic, showAll, showSingle, editUser, editUserLogic, delAll, delSingle }