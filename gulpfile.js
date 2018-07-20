'use strict';

const gulp = require("gulp");
const browserSync = require('browser-sync');


const paths = {
  build: '_site',
  css: 'css',
  sass: ['css'],
  scripts: ['js']
};
// const HubRegistry = require("gulp-hub");
// const hub = new HubRegistry(["gulp/tasks/*.js"]);
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


// const del = require("del");
gulp.task("co``nsole", function(done) {
  return console.log("Console task"), done();
});

// gulp.task("clean", function(done) {
//   return del.sync("dist"), done();
// });

// gulp.task("watch", gulp.series("clean", "console"));



gulp.task('serve', function(done) {

 browserSync.init({
   server: {
     baseDir: paths.build
   }
 });
 return console.log('Serve function ran'), done();
});

gulp.task('default', gulp.series('serve'));