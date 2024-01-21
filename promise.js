// async/sync
// event loop

// callback - callback hell, pyramid of doom
// promise
// async/await

// single threaded - async
// event loop

function displayData(s) {
    return new Promise(function(resolve, reject){
        // Actual function
        setTimeout(function() {
            console.log(s)
            resolve('completed')
        }, 2000)
        // Function ends
    })  
}

displayData('hello').then(function(status) {
    displayData('hii').then(function(status){
        displayData('hey')
    })
}) // Promise chain


// let newPromise = new Promise(function(resolve, reject) {
//     // function
//     setTimeout(function() {
//         console.log('hello')
//     }, 2000)
//     resolve('function completed') // status message
//     // reject('function incompleted')
// })
// newPromise.then(function(status) {
//     console.log(status)
// })

// console.log(newPromise)
