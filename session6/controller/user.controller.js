const add = (req,res) => {
    res.render('add', {
        pageTitle:"add new user"
    })
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
module.exports = {
    add, showAll, showSingle,editUser, delAll, delSingle
}
