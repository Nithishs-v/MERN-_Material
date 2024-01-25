// Event bubbling and event capturing
const outerBlock = document.getElementById('one')
const innerBlock = document.getElementById('two')
const innerMostBlock = document.getElementById('three')

outerBlock.addEventListener('click', function() {
    console.log('outer block')
})

innerBlock.addEventListener('click', (event) => {
    console.log('inner block')
})

innerMostBlock.addEventListener('click', function(event) {
    event.stopPropagation()
    console.log('innerMost block')
})