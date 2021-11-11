// build in modules
const fs = require("fs")
// npm installed modules
const uniqid = require('uniqid'); 
const chalk = require("chalk")
const validator = require("validator")
// deal with json files
const writeDataToFile = (users)=>{
    fs.writeFileSync("users.json", JSON.stringify(users))
}
const readDataFromFile = () =>{
    let data
    try{
        data = JSON.parse(fs.readFileSync("users.json"))
        if(!Array.isArray(data)) throw new Error()
    }
    catch(e){
        data = []
    }
    return data
}
//end working with json

//add new user
addNewUser = (userData)=>{
    try{
        if(!validator.isEmail(userData.email)) throw new Error("invalid Email")
        const allUsers = readDataFromFile()
        const notUnique = allUsers.find(user=> user.email == userData.email)
        if(notUnique) throw new Error("Email used before")
        let user = { id:uniqid(), ...userData }
        allUsers.push(user)
        writeDataToFile(allUsers)   
        console.log(chalk.green("data added successfuly")) 
    }
    catch(e){
        console.log(chalk.red(e.message))
    }
}
//get all users data
getAllData = () =>{
    const allUsers = readDataFromFile()
    if(allUsers.length==0)return console.log(chalk.red("No users yet"))
    console.log(`your file has ${allUsers.length} record`)
    allUsers.forEach(user=>{
        console.log(chalk.green(`id: ${user.id} - user name: ${user.name} - user email: ${user.email}`))
    })

}
//get single user

//delete user

//edit user

module.exports = { addNewUser, getAllData }