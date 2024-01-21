const domElement = document.getElementById('one')

domElement.addEventListener('click', function() {
    console.log(this)
})

// normal function - object reference : this
