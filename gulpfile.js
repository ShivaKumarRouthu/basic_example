var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
gulp.task('connect', function () {
var connect = require('connect');
var app = connect()
  .use(connect.static('src'));
  $.server = require('http').createServer(app)
  .listen(9876);
});

gulp.task('test', function (done) {
	var karma = require('karma').server;
	var karmaConf = require('./karma.conf.js')();
	karma.start(karmaConf, done);
});