// function displayHello() {
//     setTimeout(function() {
//         console.log('hello')
//     }, 20000)
// }

// displayHello()

function displayData(s, callBackFunc) {
    setTimeout(function() {
        console.log(s) // hello hey
        // functionalities
        if(callBackFunc) {
            callBackFunc()
        }
    }, 2000) // 2seconds
}

displayData('hello', () => {
    displayData('hey', () => {
        displayData('hii')
    })
})

// callbackqueue -> f1(hello), f2(hello)