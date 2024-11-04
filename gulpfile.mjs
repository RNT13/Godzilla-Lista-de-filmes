import gulp from 'gulp';
import * as sass from 'sass';
import gulpSassModule from 'gulp-sass';
import imagemin from 'gulp-imagemin';
import uglify from 'gulp-uglify';

const gulpSass = gulpSassModule(sass);

function scripts() {
    return gulp.src("./src/scripts/*.js")
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
}

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(gulpSass({ outputStyle: 'compressed' }).on('error', gulpSass.logError))
        .pipe(gulp.dest('./dist/css'));
}

function images() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

export const build = gulp.parallel(styles, images, scripts);

export function watch() {
    gulp.watch('./src/styles/*.scss', styles);
    gulp.watch('./src/scripts/*.js', scripts);
    gulp.watch('./src/images/**/*', images);
}

export default build;
