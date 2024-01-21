let number = 5
// We can make the variable available in other JS files using the 'export' keyword
export let number2 = 10

function showNumber() {
    console.log('number 10')
}

/**
 * We can also export a set of variables and functions using the syntax
 * This should always be at the end of the file
 */
export {number, showNumber}