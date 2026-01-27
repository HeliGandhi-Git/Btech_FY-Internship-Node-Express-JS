var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello World!');
    res.write('</br> Hello Heli!');
    res.write('</br> Hello Mann!');
    res.end("</br>bye");
}).listen(3000);

console.log("Server started on http://127.0.0.1:3000")
