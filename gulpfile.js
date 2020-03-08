var gulp       = require('gulp'),
	sass         = require('gulp-sass'),
	browserSync  = require('browser-sync'),
	concat       = require('gulp-concat'),
	uglify       = require('gulp-uglifyjs'),
	cssnano      = require('gulp-cssnano'),
	rename       = require('gulp-rename'),
	del          = require('del')
	cache        = require('gulp-cache'),
	autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function(){
	return gulp.src('app/sass/**/*.sass')
		.pipe(sass({outputStyle: 'expanded'}))
		.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: false }))
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false
	});
});

gulp.task('scripts', function() {
	return gulp.src([
		'app/libs/jquery/jquery.min.js',
		'app/libs/fancybox/jquery.fancybox.min.js',
		'app/libs/owl.carousel/owl.carousel.min.js',
		'app/libs/masked.input/masked.input.min.js'
	])
		.pipe(concat('libs.min.js'))
		.pipe(gulp.dest('app/js'));
});

gulp.task('css-libs', function() {
	return gulp.src([
		'app/libs/bootstrap/bootstrap.min.css',
		'app/libs/fancybox/jquery.fancybox.min.css',
		'app/libs/owl.carousel/owl.carousel.min.css'
	])
		.pipe(concat('libs.min.css'))
		.pipe(cssnano())
		.pipe(gulp.dest('app/css'));
});

gulp.task('clean', function() {
	return del.sync('dist');
});

gulp.task('build', ['clean', 'sass', 'scripts'], function() {

	var buildCss = gulp.src([
		'app/css/main.css',
		'app/css/libs.min.css'
	])
		.pipe(gulp.dest('dist/css'))

	var buildFonts = gulp.src('app/fonts/**/*')
		.pipe(gulp.dest('dist/fonts'))

	var buildJs = gulp.src('app/js/**/*')
		.pipe(gulp.dest('dist/js'))

	var buildHtml = gulp.src('app/*.html')
		.pipe(gulp.dest('dist'));

});

gulp.task('clear', function (callback) {
	return cache.clearAll();
});

gulp.task('watch', ['browser-sync', 'css-libs', 'scripts'], function() {
	gulp.watch('app/sass/**/*.sass', ['sass']);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch(['app/js/scripts.js', 'app/libs/**/*.js'], browserSync.reload);
});

gulp.task('default', ['watch']);