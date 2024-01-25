// import in js -> require in cjs
// export {} in js -> module.exports = {} in cjs
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(express.static(__dirname))
// bodyParser -> converts body to an understandable form
app.use(bodyParser.json())

// Capturing the request
app.get('/get-data', function(request, response) {
    // console.log(request)
    // status code -> response status
    const respData = {
        "name" : "shri",
        "password" : "1234"
    }
    // sending the response
    response.status(200).json(respData)
})

app.post('/verify-user', function(request, response) {
    if(request.body.username === 'shri' && request.body.password === '1234') {
        response.status(200).json({
            "status" : "valid user"
        })
    } else {
        response.status(200).json({
            "status" : "invalid user"
        })
    }
})

app.listen(8000)