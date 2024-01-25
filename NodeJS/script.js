const button = document.getElementById('button')
const loginButton = document.getElementById('login-button')

button.addEventListener('click', async function() {
    // Sending a request from the client - get request
    // const respObj = await fetch('/get-data')
    // // response object -> json data
    // const data = await respObj.json()
    // console.log(data)

    // post request
})

loginButton.addEventListener('click', async function() {
    // sending a post request
    const respObj = await fetch('/verify-user', {
        method : 'POST',
        body : JSON.stringify({
            "username" : "shri",
            "password" : 1234
        }),
        headers : {
            Accept : 'application/json',
            'Content-Type' : 'application/json'
        }
    })
    const data = await respObj
    .json()
    console.log(data)
})