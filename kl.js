var http = require('http')
var server=http.createServer(function(req,res){
res.writeHead(200,{"content":"text/html"})
res.write("<!Doctype html>" +
          "<html lang='en'>"+
          "<head>" +
          "<meta charset='UTF-8'>" +
          "<title>Login Form</title>"+
          "<body>"+
          "<h1>Login Details</h1>"+"<br>"+
          "Name:<input type='text' name='uid'>" +"<br>"+"<br>"+
          "Password:<input type='password' name='pwd'>" +"<br>"+"<br>"+
          "<input type='submit' value='Submit'>"+
          "</body>" +
          "</html>"
        )
res.end()

})
server.listen(8080)