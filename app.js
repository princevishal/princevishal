var express=require('express')
var app=express()
app.get('/',function(req,res){
	res.writeHead(200,{"contentType":"text/html"})
	res.write("how are you")
	res.end()
})
app.listen(8080)