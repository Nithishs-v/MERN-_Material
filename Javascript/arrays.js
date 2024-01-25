const arr = [123, 53, 112]
console.log(arr)
arr.sort(function(a, b) {
    return b - a
    // positive
})
console.log(arr)
// default nature - alphabetical wise


// Array [objects]
// Object -> {name, data}
// array1 : object {price and id, details}
// array1.sort()
// sorted array

const newArr = arr.filter(function(value) {
    return value > 100 
})

console.log(newArr)
// console.log(arr)


// sort - modifies the actual array itself
// reverse - "
// filter - we should be using a new array to store