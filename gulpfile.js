const gulp = require("gulp");
const sass = require("gulp-sass");
const gulpAutoprefixer = require("gulp-autoprefixer");
const uglify = require("gulp-uglify");
const plumber = require("gulp-plumber");
const browsersync = require("browser-sync").create();
const cleanCSS = require("gulp-clean-css");
const babel = require("gulp-babel");
const imageMin = require("gulp-imagemin");
const clean = require("del");
const changed = require("gulp-changed");
// globby = require('globby');
const browserify = require("browserify");
gulp.task("sass", function() {
    return gulp.src("./src/css/**/*.scss")
        .pipe(plumber())
        .pipe(changed("./dist/css"))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulpAutoprefixer())
        .pipe(cleanCSS())
        .pipe(gulp.dest("./dist/css"))
});
gulp.task("js", function(e, entries) {
    return gulp.src("./src/js/*.js")
        .pipe(changed("./dist/js"))
        .pipe(plumber())
        .pipe(babel())
        .pipe(uglify())
        .pipe(gulp.dest("./dist/js"))
});
gulp.task("image", function() {
    return gulp.src("./src/image/**/*.{png,jpg,gif,ico}")
        .pipe(plumber())
        .pipe(imageMin({
            progressive: true
        }))
        .pipe(gulp.dest("./dist/image"))
});
gulp.task('clean', function(cb) {
    return clean([
        'dist/{js.,css,image,font}/*'
    ], cb)
});
gulp.task('icon', function() {
    return gulp.src(['src/font/**.*'])
        .pipe(gulp.dest('./dist/font'))
});
gulp.task("start", gulp.series(["clean", "sass", 'icon', "image"], function(done) {
    // browsersync.init({
    //   browser: "chrome",
    //   server: {
    //     baseDir: './',
    //     index: 'src/html/orderNav.html',
    //   },
    //   port: 8050
    // });
    gulp.watch("src/css/**/*.scss", gulp.series('sass'));
    // gulp.watch("src/js/*.js", gulp.series('js'));
    // gulp.watch("src/image/*", gulp.series('image'));
    done();
}));