var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const aylien  = require('aylien_textapi');
const dotenv = require('dotenv');

const app = express()

app.use(express.static('dist'))
//app.use(express.static('src/client'))

console.log(__dirname)

// set aylien API credentias
dotenv.config();
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
  });


app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
