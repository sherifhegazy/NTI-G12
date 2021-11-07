//variables ( var - const - let )
// var x = 10
// var x = 3
// var x = 7

// console.log(x)

//let y = 5
// let y = 10

// if(true){
//     var x=15
//     let y=10
//     // console.log(x)
//     console.log(y)
// }

// console.log(x)
// console.log(y)



//conditional operators (any)
// == ===  >  <   >=   <=  != !==  
// let x = 5
// x = "omar"
// x = true
// x = 5.6

// console.log(typeof x);

// x === "5.6" ? console.log("done") : console.log('error')


//if else
//0 false null undefined
// let status = true
// if(!status){
//     console.log("true")
// }
// else{
//     console.log("false")
// }
// let degree = 95
// if(degree>90) console.log("A")
// else if(degree>80) console.log("B")
// else if(degree>70) console.log("C")
// else if(degree>60) console.log("D")
// else console.log("F")

// day = 5
// switch(day){
//     case 1: console.log('sunday');break;
//     case 2: console.log('monday');break;
//     case 3: console.log('tues');break;
//     case 4: console.log('wed');break;
//     case 5: console.log('thu');break;
//     case 6: console.log('fri');break;
//     case 7: console.log('sat');break;
//     default:console.log('not a day');
// }


//loops (for - foreach - for in - for of - while - do while)
// i = 0
// for(;;){
//     i++
//     if(i==5) continue
//     console.log(i)
//     if(i==10) break;
// }

// let user = {
//     name: "marwa",
//     age:36,
//     job:"instructor"
// }
// user.name // user['name']
// for(u in user){
//     console.log(`${u} => ${ user[u] } `)
// }

// let x = [1,2,3,4]
// for(z of x){
//     console.log(z)
// }
// let x = prompt("enter data")

/* 
1- get input from user temp in c
2- get input from user to type of convertion
3- convert according user need
4- print new temp
*/

// function getInputFromUser(msg){
//     return prompt(msg)
// }
// function checkIfNumber(num){
//     num = Number(num)
//     if(isNaN(num)) return false
//     return num
// }
// function convertToF(c){
//     return c+32
// }
// function convertToK(c){
//     return c+10
// }
// let temp = getInputFromUser("please enter temp in C")
// temp = checkIfNumber(temp)
// if(temp!=false){
//     let convertType = (getInputFromUser("please enter type")).toLowerCase()
//     switch(convertType){
//         case 'f': console.log(convertToF(temp)); break;
//         case 'k': console.log(convertToK(temp)); break;
//         default: console.log("error type")
//     }
// }


/*
todo app
tasks = [
    {title:"", content:"", dueDate:15/12/2021, status:false}
]
task => id=> random, title, content, dueDate, status(t, f)
add task => default false
edit task status => id => change status
edit task => edit details 
remove task
show all tasks
show single task

addTask => (titl, due, content) => current time stamp, array push
remove task => taskId => splice, indexof - filter
edit status => taskId => indexof or find
edit task => task id, new task details
show all => for each
show single => id => find
 */
















































