let user = [
    {name: "marwa", age:36},
    {name: "mazen", age:41},
    {name: "nouran", age:27},
    {name: "marwa", age:20},
    {name: "marwa", age:25}
]

// user.forEach((u, i)=>{
//     console.log(u)
//     console.log(`${i}----------`)
// })
// let x = user.filter( u=> u.name != "marwa" )
// console.log(x)
// let x = user.find( u=> u.name != "marwa" )
// x.name= "ahmed"
// console.log(x)
// console.log(user)
let x = user.findIndex( u=> u.name == "hasan" )
console.log(x)


0
1
3
4


delete(2)