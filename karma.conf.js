module.exports = function () {
return {
frameworks: ['jasmine'],
files: [
"lib/angular.js",
"lib/angular-mocks.js",
"src/cookbook.js",
"src/*.js",
"test/cookbookSpec.js"
],
autoWatch: true,
browsers: ['Chrome']
};
};