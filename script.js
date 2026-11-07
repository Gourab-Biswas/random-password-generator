// let str = 'abcde'
// console.log(str[Math.floor(Math.random() * str.length)])


let inputfield = document.getElementById("inputfield")

let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lower = "abcdefghijklmnopqrstuvwxyz"
let number = "0123456789"
let symbol = "@#$%^&*_-{]}[+./<>"
let all = upper + symbol + number + lower;

let createPassword = ()=>{
let password = ""
password += upper[ Math.floor(Math.random() * upper.length)]
for(let i =0;i<11;i++){
    password += all[ Math.floor(Math.random() * all.length)]
}
// console.log(password)
inputfield.value = password
}

document.getElementById("cpImg").addEventListener("click",()=>{

    // inputfield.select()
    // document.execCommand("copy")


    navigator.clipboard.writeText(inputfield.value)

})






document.getElementById("btn").addEventListener("click",createPassword)