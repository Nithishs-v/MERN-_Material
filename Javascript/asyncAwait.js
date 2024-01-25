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

async function executeDisplayFunctions() {
    await displayData('hello')
    await displayData('hii')
    displayData('hey')
    // displayData('hello').then(function(status) {
    //     displayData('hii').then(function(status){
    //         displayData('hey')
    //     })
    // }) // Promise chain
}

executeDisplayFunctions()
