const { watch, src, dest, series } = require('gulp');
const { exec } = require('child_process');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;


const paths = {
  build: '_site',
  css: 'css',
  scripts: ['js']
};

const cssFiles = [
  'css/**/*',
]

const jsFiles = [
  'js/**/*.js'
]

const jekyllFiles = [
  '*.{html,yml,md}',
  '_posts/*.markdown',
  '_posts/*.md',
  '_layouts/*.html',
  '_includes/*.html'
]

function clean(cb) {
  console.log('cleaned');
  cb();
}

function jsBuild() {
  return src(jsFiles)
    .pipe(dest(paths.build + '/' + paths.scripts));
}

function cssBuild() {
  return src(cssFiles)
    .pipe(dest(paths.build + '/' + paths.css));
}

// The `build` function is exported so it is public and can be run with the `gulp` command.
// It can also be used within the `series()` composition.
function build(cb) {
  exec('bundle exec jekyll build', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
}

function serve() {

  browserSync.init({
   server: {
     baseDir: paths.build
   },
   notify: false,
   open: false
  });

  watch(cssFiles, cssBuild);
  watch(jsFiles, jsBuild);
  watch(jekyllFiles, build);
  watch(paths.build + '/**/*').on('all', reload);
};

exports.build = build;
exports.default = series(clean, build, serve);
