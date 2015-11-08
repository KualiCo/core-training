var authToken = ''
var request = require('request-json')
var client = request.createClient('https://taddgiles.kuali.co/api/v1/')

client.headers['Authorization'] = 'Bearer ' + authToken

client.get('users/', function(err, res, body) {
  console.log(res.statusCode, body)
})
