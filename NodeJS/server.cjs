// import in js -> require in cjs
// export {} in js -> module.exports = {} in cjs
const express = require('express')
const app = express()
app.use(express.static(__dirname))

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

app.listen(8000)