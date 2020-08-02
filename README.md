# IBM-Internship-Project
Complete caching and optimization technology for Angular and Nginx server, deploying the Angular Application via gulp on Nginx

- [Project Video](https://drive.google.com/file/d/1qMq2cFqPfi7TleEqdVRxQ0VclQtxqrcf/view?usp=sharing)
- [Project Setup Video](https://drive.google.com/file/d/1N_8mRyvmYU6mwzwTPcMgEFaOhWNDg3da/view)

**gulpfile.js**

```javascript
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
```


**package.json**
```json
"devDependencies": {
    "@angular-devkit/build-angular": "~0.901.9",
    "@angular/cli": "~9.1.9",
    "@angular/compiler-cli": "~9.1.11",
    "@types/jasmine": "~3.5.0",
    "@types/jasminewd2": "~2.0.3",
    "@types/node": "^12.11.1",
    "codelyzer": "^5.1.2",
    "del": "^5.1.0",
    "gulp": "^4.0.2",
    "gulp-eslint": "^6.0.0",
    "gulp-jscs": "^4.1.0",
    "gulp-jshint": "^2.1.0",
    "jasmine-core": "~3.5.0",
    "jasmine-spec-reporter": "~4.2.1",
    "jshint": "^2.11.2",
    "jshint-stylish": "^2.2.1",
    "karma": "~5.0.0",
    "karma-chrome-launcher": "~3.1.0",
    "karma-coverage-istanbul-reporter": "~2.1.0",
    "karma-jasmine": "~3.0.1",
    "karma-jasmine-html-reporter": "^1.4.2",
    "protractor": "~7.0.0",
    "ts-node": "~8.3.0",
    "tslint": "~6.1.0",
    "typescript": "~3.8.3"
  }
```

