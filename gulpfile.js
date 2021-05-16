var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('scripts', done => {
  gulp.src(['./card.js', './cashfree.js', './payment_form.js', './views/paymentForm.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/'));
    done();
});
