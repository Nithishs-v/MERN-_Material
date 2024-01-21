// console.log('hello')

// // must be declared, block scope
// const pi = 3.14

// // can be updated, but not be redeclared, block 
// let y = 3
// y = 4

// // can be updated, can be redeclared, global
// var z = 4
// var z = 6
// z = 6
// console.log(pi,y,z)

/**
 * number (int and float)
 * string
 * boolean
 * BigInt
 * undefined
 * null
 */
// let x = BigInt(123)
// console.log(typeof(x))
// const obj = null
// // + - * / % **
// // == != === !==
// let a = 5
// let b = "5"
// console.log(a === b)
// // && ||
// console.log(5 === 5 && 'hiii' === 'hii')
// console.log(5 === 5 || 'hii' === 'hii')

// if(5 === 5 && 'hiii' === 'hii'){
//     // function
// } else if(7 === 7) {

// } else {

// }


// let i = 1
// console.log(typeof(i))
// i = "hello"
// console.log(typeof(i))

// console.log(5 + "5") // 55
// console.log(5 + 5 + "5") // 10 + "5"
// console.log(true + true)
// console.log(true + false)
// console.log(false + "hii")
// console.log(1+ true + 1 + "1")
// console.log()

// normal, arrow, IIFE
// (() => {
//     console.log('IIFE')
// })()

function showDescription() {
    console.log('description')
}

function populateDropdown() {
    // actual code
    console.log("html css js")
    setTimeout(showDescription, 3000)
}
populateDropdown()

console.log(1*"3h")


const var1 = 5
const Var2 = 5

var a = null

console.log(true + 3)
console.log("1"+3+true+3)
console.log(1+true*5+"hello")
console.log(1*"3h")
// "1" * "3" -normal
// 1 * 3 - 3

const value = "3h"
console.log(parseInt(value)) // NaN

/**
 * type coercion - "3h" - NaN
 * explicit(parseInt) - "3h" - 3
 */