var growl = require('growl')
var serve = require('gulp-live-serve')
var livereload = require('gulp-livereload')
var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var gutil = require('gulp-util')
var gulp = require('gulp')
var path = require('path')
var config = require('./webpack.config')
// test entry file
var testIndex = './test/test.js'
// webpack-dev-sserve port
var port = 8080
// no conflict
var myConfig = Object.assign({}, config, {
  devtool: 'cheap-module-eval-source-map',
  cache: true,
  debug: true
})

var paths = {
  // file list for webpack build
  scripts: ['example/style.css', 'src/style.css', 'src/*.js', 'example/index.js'],
  // file list for reload
  asserts: ['example/bundle.js', 'example/index.html']
}

gulp.task('default', ['build-dev'])

gulp.task('build-dev', ['webpack:build-dev', 'serve'], function () {
  livereload.listen({
    start: true
  })
  // build js files on change
  gulp.watch(paths.scripts, ['webpack:build-dev'])
  var watcher = gulp.watch(paths.asserts)
  watcher.on('change', function (e) {
    livereload.changed(e.path)
    growl(path.basename(e.path))
  })
})

// static server
gulp.task('serve', serve({
  root: __dirname,
  middlewares: []
}))


gulp.task('webpack:build-dev', function (callback) {
  var devCompiler = webpack(myConfig)
  devCompiler.run(function (err, stats) {
    if (err) throw new gutil.pluginError('webpack:build-dev', err) //eslint-disable-line
    gutil.log('[webpack:build-dev]', stats.toString({
      colors: true
    }))
    callback()
  })
})

gulp.task('webpack:test', function (callback) {
  var entry = [
    'stack-source-map/register.js',
    'webpack-dev-server/client?http://localhost:' + port,
    'webpack/hot/dev-server',
    'mocha!' + testIndex
  ]

  var config = Object.create(myConfig)
  config.entry = entry
  config.plugins = config.plugins || []
  // webpack need this to send request to webpack-dev-server
  config.plugins.push(new webpack.HotModuleReplacementPlugin())
  // must have
  config.output.path = __dirname
  var compiler = webpack(config)
  config.module = myConfig.module
  var server = new WebpackDevServer(compiler, {
    publicPath: '/',
    inline: true,
    historyApiFallback: false,
    stats: { colors: true }
  })
  server.listen(port, 'localhost', callback)
})
