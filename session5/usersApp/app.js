
// npm modules ( npm i yargs chalk validator uniqid )
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
    builder:{},
    handler:function(argv){

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
    builder:{},
    handler:function(argv){

    }
})
//end commands
//run yargs module
yargs.argv