const gulp = require('gulp');
const concat = require('gulp-concat');
const postcss = require('gulp-postcss');
const mario = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const changed = require('gulp-changed');
const notify = require('gulp-notify');

var scripts = [
	'./bower_components/jquery/dist/jquery.js',
	'./bower_components/bootstrap/dist/js/bootstrap.js',
	'./bower_components/parallax.js/parallax.js',
	'./src/js/**/*.js',
	'./src/js/*.js'
],
css = [
    'bower_components/bootstrap/dist/css/bootstrap.css',
    'src/css/main.css'
];

function mushroom(e) {
  if(e.fileName) console.log(e.fileName);
  console.log(e.message);
  require('beepbeep')(2);
  notify("Error!" + e.message);
  this.emit('end');
}

gulp.task('scripts', function() {
	var dest = './dist/js/';
  	return gulp.src(scripts)
      .pipe(changed(dest))
      .pipe(mario(mushroom))
      .pipe(sourcemaps.init())
      .pipe(concat('main.min.js'))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(dest))
      .pipe(notify("scripts complete"))
      .pipe(browserSync.stream());
});

gulp.task('css', function() {
	var dest = './dist/css/';
	var processors = [
        require('autoprefixer')('last 1 version'),
        require('csswring'),
        require('postcss-import'),
        require('postcss-simple-vars'),
        require('postcss-nested'),
        require('css-mqpacker')
    ];
  	return gulp.src(css)
    //   .pipe(changed(dest))
      .pipe(mario(mushroom))
      .pipe(sourcemaps.init())
      .pipe(postcss(processors))
      .pipe(concat('main.css'))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(dest))
      .pipe(notify("css complete"));
});

gulp.task('reload', function() { browserSync.reload(); });

gulp.task('stream', function () {
    browserSync.init({
        server: "./dist"
    });

	gulp.watch('dist/css/main.css', ['reload']);
	gulp.watch('src/css/**/*.css', ['css']);
    gulp.watch('src/js/**/*.js', ['scripts','reload']);
    gulp.watch('dist/*.html', ['reload']);

    // Uncomment for asset extraction
    // gulp.watch(psAssetsFolder, ['psd','reload']);
});

gulp.task('default', ['css','scripts','stream']);
