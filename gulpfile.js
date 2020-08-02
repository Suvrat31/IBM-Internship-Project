const { series } = require('gulp');
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var del = require('del');

var config = {
js: 'js/**/*.js',
  	images: 'images/*.*'}

var dist = {
	path: 'dist/',
	images: 'images/',
	fonts: 'fonts/'
}



function copyimages(cleanimages){
	return gulp.src([config.images])
    .pipe(gulp.dest(dist.path + dist.images));
cleanimages();}



function cleanimages(){
	del(dist.path + dist.images);
}
exports.build = series(copyimages);

