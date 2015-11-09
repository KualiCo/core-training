var authToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTI4NTQwMDY2Mjk2NDkzNTE5MSwiaWF0IjoxNDQ3MDg5Njk5LCJleHAiOjE0Nzg2NDcyOTksImlzcyI6Imt1YWxpLmNvIn0.LiCMZRi-ZLTRWr8b5GegtBq_8EM8jjjgtkuOjB3f30A'
var request = require('request-json')
var client = request.createClient('https://taddgiles.kuali.co/api/v1/')

client.headers['Authorization'] = 'Bearer ' + authToken

client.get('users/', function(err, res, body) {
  console.log(res.statusCode, body)
})

// client.get('users/1230300638659266405/', function(err, res, body) {
//   console.log(res.statusCode, body)
// })

// var data = {
//   email: 'whatnow@heynow.com'
// }

// client.post('users/', data, function(err, res, body) {
//   console.log(res.statusCode, body)
// })


// var data = {
//   email: 'bad email'
// }

// client.put('users/1284773187223519585/', data, function(err, res, body) {
//   console.log(res.statusCode, body)
// })

// client.del('users/1284773187223519585/', function(err, res, body) {
//   console.log(res.statusCode, body)
// })

