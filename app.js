var express = require('express')
var cookieParser = require('cookie-parser')
var request = require('request')

var app = express()

app.use(cookieParser())

app.get('/', function(req, res, next) {
  var html = '<h1>Core Tutorial</h1>'
  res.send(html)
})

var https = require('https')
var fs = require('fs')
var config = {
  key: fs.readFileSync('ssl.pem'),
  cert: fs.readFileSync('ssl.crt')
}
https.createServer(config, app).listen(3000)
