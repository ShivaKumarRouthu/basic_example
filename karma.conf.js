module.exports = function () {
return {
frameworks: ['jasmine'],
files: [
"lib/angular.js",
"lib/angular-mocks.js",
"lib/angular-route.js",

"src/*.js",
"test/**/*.js"
],
autoWatch: true,
browsers: ['Chrome']
};
};
