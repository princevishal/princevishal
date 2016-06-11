var http=require('http')
var url=require('url')
var server=http.createServer(function(req,res){
var page=url.parse(req.url).pathname
console.log(page)
if(page=='/login'){
	res.write("welcome to log in")
}
else if(page=='/signup'){
	res.write("welcome to signup")
}
else{
	res.write("welcome bye")
}
res.end()
})
server.listen(8080)