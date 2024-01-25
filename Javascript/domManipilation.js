// // DOM and DOM manipulation
// // html -- browser(process) -- webpage

// /**
//  * Tag
//  * id
//  * class
//  */

// // Selecting DOM element
// const titleDOMElement = document.getElementById('title')
// const buttonElement = document.getElementById('change-description')
// const counter = document.getElementById('timer')

// // What to change
// function changeTitle() {
//     titleDOMElement.textContent = 'JAVA SCRIPT'
// }
// function startIncreamenting() {
//     const currValue = counter.textContent
//     counter.textContent = parseInt(currValue) + 1
// }
// function runCounter() {
//     setInterval(startIncreamenting, 1000)
// }

// // When
// buttonElement.addEventListener('click', runCounter)

// function printHello() {
//     console.log('hello')
// }
// // setTimout and setInterval
// // setTimeout(printHello, 5000) //5000 milliseconds

// const arr = [1, 2, true, 4, "hello"]


// selecting DOM element
// text manipulate -> .textcontent
// add or update HTML -> .innerHTML
// styling : two approaches

// mobile -> (database : mobiles data) -> adding dynamic HTML element 

// select
// const buttonElement = document.getElementById('datatypes-selection')
// const dataTypesDisplay = document.getElementById('js-datatypes')
// // What to do
// const dataTypes = ['number', 'string', 'boolean']
// function displayDataTypes() {
//     for(let i = 0; i<dataTypes.length; i++) {
//         dataTypesDisplay.innerHTML += `<p>${dataTypes[i]}</p>`
//     }
//     // replace
//     // += add, concat
// }
// // when
// buttonElement.addEventListener('click', displayDataTypes)


// const num = 3
// console.log(`number : ${num}`)

// setProperty
// classList.add classList.remove
//  const buttonElement = document.getElementById('change-color')
//  const title = document.getElementById('title')
 
//  function changeColor() {
//     // title.style.setProperty('color', 'tomato')
//     title.classList.add('add-additional-styles')
//  }

//  buttonElement.addEventListener('click', changeColor)

const buttonElement = document.getElementById('change-shape')
const shapeDiv = document.getElementById('shape')

function changeShape() {
    shapeDiv.textContent = 'Circle'
    // shapeDiv.style.setProperty('border-radius', '50%')
    shapeDiv.classList.add('circle')
}

buttonElement.addEventListener('click', changeShape)

console.log(buttonElement)

const para = document.getElementsByClassName('p')
console.log(para)

// document.querySelector('')
// document.querySelectorAll('')
// document.getElementsByClassName()
// document.getElementById('')

