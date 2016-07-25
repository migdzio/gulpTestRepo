var gulp = require("gulp");
var browserSync = require("browser-sync");
var concat = require("gulp-concat");
var minify = require('gulp-minify');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var inject = require('gulp-inject');

Files = {
    css:
        ['./css/style1.css', './css/style2.css', './css/style3.css', './css/style4.css'],
    js:
        ['./js/app1.js', './js/app2.js', './js/app3.js', './js/app4.js'],
    html: "./index.html"
};

gulp.task('inject', ["minify-css", "concat-js"], function () {
  var target = gulp.src(Files.html);
  var sources = gulp.src(['./js/start.js', './css/main.css'], {read: false});
 
  return target.pipe(inject(sources))
        .pipe(gulp.dest('./'));
});


gulp.task("concat-js", function() {
    
    return gulp.src(Files.js)
        .pipe(concat('start.js'))
        .pipe(minify({
        ext:{
            src:'-debug.js',
            min:'.js'
        }
    }))
        .pipe(gulp.dest('./js/'));
});

gulp.task("concat-css", function() {
    
    return gulp.src(Files.css)
        .pipe(concat('debug.css'))
        .pipe(gulp.dest('./css/'));
});

gulp.task("minify-css", ["concat-css"], function() {
    
    return gulp.src("./css/debug.css")
        .pipe(rename("main.css"))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('./css/'));
});

gulp.task("default", ["inject"], function() {
   
    browserSync.init({
        server: {
            baseDir: "./"
    }});
    
    gulp.watch(Files.html).on("change", browserSync.reload);
    gulp.watch(Files.css, ["inject"]);
   
});

// gulp.task("default", ["inject"]);

