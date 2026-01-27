var http = require('http')
var mydata = {
 name: "Heli",
 mobile: 9377530775,
 city: "Ahmedabad",
 address: "Judges Banglow",
 course: ["NodeJS", "ReactJS", "MongoDB", "ExpressJS"]
}
http.createServer((req, res) => {
 res.writeHead(200, { 'Content-type': 'text/json' })
 res.write(JSON.stringify(mydata))
 res.end()
}).listen(3000)
console.log("Server Started on http://127.0.0.1:3000")
