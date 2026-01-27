var http = require('http');
var a = 10;
var b = 20;
var c = a + b;
var msg = "";
if (c == 30) {
   msg = "Sum is 30";
} else {
    msg = "Sum is not 30";
}
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h3>Addition</h3>');
    res.write('value of a = ' + a);
    res.write('</br> value of b = ' + b);
    res.write('</br> Sum is :' + c);
    res.end("</br>" + msg);
}).listen(3000);

console.log("Server started on http://127.0.0.1:3000")