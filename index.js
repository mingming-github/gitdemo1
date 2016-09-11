


var http=require("http");

var sever=http.createServer(function(req,res){
	res.writeHead(200,{
		"content-Type":"text/html",
		"key1":"value1"
	});
	res.write("<h1>hahahahahaha</h1>");
	res.end();
});
sever.listen(8080,function(err){
	console.log("成功监听8080端口");
});





















