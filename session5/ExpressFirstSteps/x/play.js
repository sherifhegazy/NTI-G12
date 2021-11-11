console.log(__dirname+"..\\a.html")
// console.log(__filename)
// C:\Users\marwa radwan\Desktop\NTI-G12\session5\ExpressFirstSteps/a.html
//path
const path = require("path")
let x = path.join(__dirname, "../a.html")
console.log(x)