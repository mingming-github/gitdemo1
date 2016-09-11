

var http=require('http');

var sever=http.createServer(function(req,res){
	var reqUrl=req.url;
	switch(reqUrl){
		//请求登录
		case '/signin':
			signin(req,res);
			break;
		//请求表单
		case '/post':
			post(req,res);
			break;
			
		default:
			res.writeHead(404,{});
			res.end();
			break;
	}
});

sever.listen(8080,function(err){
	console.log('监听8080端口成功');
})

function signin(req,res){
	res.writeHead(200,{'Content-Type':'text/html'});
	
	res.write('	<!DOCTYPE html>');
	res.write('		<html>');
	res.write('			<head>');
	res.write('				<meta charset="UTF-8">');
	res.write('				<title></title>');
	res.write('			</head>');
	res.write('			<body>');
	res.write('				<form action="/post" method="post">');
	res.write('					<span>用户名是：</span>');
	res.write('					<input type="text" name="usename"/><br />');
	res.write('					<span>密码是：</span>');
	res.write('					<input type="password" name="pwd"/>');
	res.write('					<input type="submit"/>');
	res.write('				</form>');
	res.write('			</body>');
	res.write('		</html>');
	
	console.log('请求登录页面');
	res.end();
}

var querystring=require('querystring')
function post(req,res){
	//console.log('请求表单提交');
	var postdata='';
	req.on('data',function(part){
		postdata+=part;
	});
	req.on('end',function(){
		//console.log(postdata);
		var obj=querystring.parse('postdata')
		console.log(postdata);
	})
	res.end();
}








