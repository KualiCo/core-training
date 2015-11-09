var express = require('express')
var cookieParser = require('cookie-parser')
var request = require('request-json')
var client = request.createClient('https://taddgiles.kuali.co/api/v1/')

var app = express()

app.use(cookieParser())

app.use(function(req, res, next) {
  var authToken = req.cookies.authToken
  if(!authToken) { return next() }

  client.headers['Authorization'] = 'Bearer ' + authToken
  client.get('users/current/', function(error, response, body) {
    req.currentUser = body
    console.log(req.currentUser)
    next()
  })
})

app.get('/', function(req, res, next) {
  var requestedUrl = req.protocol + '://' + req.get('Host') + req.url
  var html = '<h1>Core Training</h1>'
  if(req.currentUser) {
    html += '<h2>' + req.currentUser.displayName + '</h2>'
    html +=
     '<a href="https://taddgiles.kuali.co/auth/signout?return_to=' +
    requestedUrl + '">Sign out</a>'
  } else {
    html += "<a href='https://taddgiles.kuali.co/auth'>Sign In</a>"
  }
  res.send(html)
})

var https = require('https')
var fs = require('fs')
var config = {
  key: fs.readFileSync('ssl.pem'),
  cert: fs.readFileSync('ssl.crt')
}
https.createServer(config, app).listen(3000)
