module.exports = function check(str, bracketsConfig) {

let x = str.split('').filter(item => item === ")").length
let y = str.split('').filter(item => item === "(").length
return (x === y)

}
