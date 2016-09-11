

var gulp = require('gulp');
var less=require('gulp-less');
var browserSync = require('browser-sync');

//建立一个任务
gulp.task('copy', function() {
	//取出文件
	gulp.src('src/index.html')
	//将文件放入dist
	.pipe(gulp.dest('dist/'))
	.pipe(browserSync.reload({
		stream:true
	}))
});


gulp.task('less',function(){
	gulp.src('src/style/*.less')
	.pipe(less())
	.pipe(gulp.dest('dist/style'))
	.pipe(browserSync.reload({
		stream:true
	}))
})



//建立任务
/*gulp.task('listen',function(){
	//监听'src/index.html'   一改变就执行任务‘copy’
	gulp.watch('src/index.html',['copy']);
	gulp.watch('src/style/*.less',['less']);
})*/




//监听服务器还可以写成     这样可以使浏览器自动刷新执行

gulp.task('sever',function(){
	browserSync({
		server: {
			baseDir:['dist']	
		}
	}, function(err, bs) {
		console.log(bs.options.getIn(["urls", "local"]));
	});
	
	gulp.watch('src/index.html',['copy']);
	gulp.watch('src/style/*.less',['less']);
})







