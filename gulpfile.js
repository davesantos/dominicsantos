'use strict';

var gulp = require("gulp");
var browserSync = require('browser-sync');
var exec = require('child_process').exec
var sass = require('gulp-sass');

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
  '*.{html,yml,md}',
  '_posts/*.markdown',
  '_posts/*.md',
  '_layouts/*.html',
  '_includes/*.html'
]

// Unused
function errorHandler(error) {
  console.error(String(error));
  this.emit('end');
  browserSync.notify('Error');
}


gulp.task('sass', function () {
  var stream = gulp.src(sassFiles)
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest(paths.build + '/' + paths.css));
  return stream;
});

gulp.task('js', function() {
  var stream = gulp.src(jsFiles)
    .pipe(gulp.dest(paths.build + '/' + paths.scripts))
  return stream;
});

gulp.task('jekyll-build', function(cb) {
  exec('bundle exec jekyll build', function(err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('jekyll-rebuild', gulp.series('jekyll-build', function(done) {
  browserSync.reload(), done();
}));

gulp.task('serve', function(done) {

 browserSync.init({
   server: {
     baseDir: paths.build
   }
 });

 gulp.watch(sassFiles, gulp.parallel('jekyll-rebuild')).on('change', browserSync.reload);
 gulp.watch(jsFiles, gulp.parallel('js')).on('change', browserSync.reload);
 gulp.watch(jekyllFiles, gulp.parallel('jekyll-rebuild')).on('all', browserSync.reload);
 return console.log('Serve function ran'), done();
});

gulp.task('default', gulp.series('serve'));