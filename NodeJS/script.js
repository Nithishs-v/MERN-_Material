const button = document.getElementById('button')
button.addEventListener('click', async function() {
    // Sending a request from the client
    const respObj = await fetch('/get-data')
    // response object -> json data
    const data = await respObj.json()
    console.log(data)
})
