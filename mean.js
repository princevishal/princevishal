var express=require('express')
var app=express()
app.get('/course/:coursename',function(req,res){
	res.render('login1.ejs',{
		data:req.params.coursename
	})
	res.end()
})
app.listen(8080)