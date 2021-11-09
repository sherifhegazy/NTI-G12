//clousers
// const myClouser = (c) => {
//     return {
//         c,
//         x(){ console.log(`x ${this.c}`) },
//         y(){ console.log("y") },
//         z(){ console.log("z") }
//     }
// }
// let t = myClouser(10)
// t.x() 

//callback
// const myCallBack = (x, cb)=>{
//     if(x>10) cb("done")
//     else cb({name:"test error"})
// }

// myCallBack(5, (result)=>{
//     console.log(result)
// })

// const test = (cb) =>{
//     const t = () =>{
//         const z=()=>{
//             cb ("hello")
//         }
//         z()
//     }
//     t()
// }
// test(a=>{
//     console.log(a)
// })

// const numTest = (x, cb)=>{
    
//     if(x%2==0) cb("even number", false)
//     else cb(false, "odd number")
// }
// numTest(50, (result, err)=>{
//     if(!err) console.log(result)
//     else console.log(err)
// })

////////
// setTimeout(()=>{console.log('a')},2000)
// setTimeout(()=>{console.log('b')},1500)
// setTimeout(()=>{console.log('c')},1000)
// console.log("d")
///////

//Promises
const myPromise =(num)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            typeof num == "number"? resolve("number"): reject("not a number")
        }, 2000)
    })
}
// console.log(myPromise(5))
//then catch

// myPromise("h")
// .then( res=>console.log(res) )
// .catch(e=> console.log(e))
// console.log("a")

//async await
handelPromise = async () =>{
    try{
        x = await myPromise("a")
        y= await myPromise(x)
        console.log(x)
        console.log("test")    
    }
    catch(e){
        console.log(e)
    }
}
handelPromise()

