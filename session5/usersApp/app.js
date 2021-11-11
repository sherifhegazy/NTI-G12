
// npm modules ( npm i yargs chalk validator uniqid )
const { strict } = require("yargs")
const yargs = require("yargs")
const utills = require("./utils/myFunctions")
//yargs commands
//add user
yargs.command({
    command:"addUser",
    builder:{
        name: { type:'string', demandOption:true },
        email: { type:'string', demandOption:true }
    },
    handler:function(argv){
        let user = {
            name: argv.name,
            email: argv.email
        }
        utills.addNewUser(user)
    }
})
//show all users
yargs.command({
    command:"allUsers",
    handler:function(){
        utills.getAllData()
    }
})
//show single user
yargs.command({
    command:"singleUser",
    builder:{id: {type:"string", demandOption:true}},
    handler:function(argv){
        utills.getSingle(argv.id)
    }
})
//edit user
yargs.command({
    command:"editUser",
    builder:{},
    handler:function(argv){

    }
})
// delete user
yargs.command({
    command:"delUser",
    builder:{id: {type:"string", demandOption:true}},
    handler:function(argv){
        utills.deleteUser(argv.id)
    }
})
//end commands
//run yargs module
yargs.argv