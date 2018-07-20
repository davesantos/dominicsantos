'use strict';

var gulp = require("gulp");
var browserSync = require('browser-sync');


var paths = {
  build: '_site',
  css: 'css',
  sass: ['css'],
  scripts: ['js']
};

var sassFiles = [
  'css/**/*',
  '_sass/**/*'
]
// var HubRegistry = require("gulp-hub");
// var hub = new HubRegistry(["gulp/tasks/*.js"]);
// gulp.registry(hub);



// 'clean' and 'scripts' tasks defined in tasks directory
//gulp.task('default', gulp.series('clean', 'scripts'));

//gulp.task("default", gulp.series(build));







// define composite tasks
//gulp.task("default", gulp.series("clean", "scripts"));

/*
gulp.task("test", function(done) {
  console.log("Working"), done();
});
*/

//gulp.task("default", gulp.series("asdf", "console"));


// var del = require("del");
gulp.task("console", function(done) {
  return console.log("Console task"), done();
});


gulp.task('rebuild', function(){
 console.log('rebuilt');
})

gulp.task('serve', function(done) {
 browserSync.init({
   server: {
     baseDir: paths.build
   }
 });

 gulp.watch(sassFiles, gulp.series('rebuild')).on('change', browserSync.reload);

 return console.log('Serve function ran'), done();
});



gulp.task('default', gulp.series('serve'));