var express=require('express')
var app=express()
app.get('/',function(req,res){
	var mydata=["red","blue","green"]
	res.render('login1.ejs',{
		data:mydata
	});
	res.end()
});
app.listen(8080)