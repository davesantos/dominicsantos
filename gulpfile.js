'use strict';

var gulp = require("gulp");
var browserSync = require('browser-sync');
var exec = require('child_process').exec


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

var jsFiles = [
  'js/**/*.js'
]

var jekyllFiles = [
  '**/*.{html,yml,md}'
]

// Unused
function errorHandler(error) {
  console.error(String(error));
  this.emit('end');
  browserSync.notify('Error');
}

gulp.task('js', function() {
  var stream = gulp.src(jsFiles)
    .pipe(gulp.dest(paths.build + '/' + paths.scripts))
    .pipe(browserSync.reload({
      stream: true
    }));
  return stream;
});

gulp.task('jekyll-build', function(cb) {
  exec('bundle exec jekyll build', function(err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

// // var del = require("del");
// gulp.task("console", function(done) {
//   return console.log("Console task"), done();
// });


gulp.task('jekyll-rebuild', gulp.series('jekyll-build', function(done) {
  browserSync.reload(), done();
}));

gulp.task('serve', function(done) {

 browserSync.init({
   server: {
     baseDir: paths.build
   }
 });

 gulp.watch(sassFiles, gulp.series('jekyll-rebuild')).on('change', browserSync.reload);
 gulp.watch(jsFiles, gulp.series('js')).on('change', browserSync.reload);
 gulp.watch(jekyllFiles, gulp.series('jekyll-rebuild')).on('change', browserSync.reload);
 return console.log('Serve function ran'), done();
});

gulp.task('default', gulp.series('serve'));