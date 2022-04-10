import gulp from 'gulp'
import path from './gulp/config/path.js'
import plugins from './gulp/config/plugins.js'

global.app = {
	isBuild: process.argv.includes('--build'),
  isDev: !process.argv.includes('--build'),
	gulp,
	path,
	plugins
}

import pug from './gulp/tasks/pug.js'
import server from './gulp/tasks/server.js'
import scss from './gulp/tasks/scss.js'

function watcher() {
  gulp.watch(path.watch.pug, pug)
  gulp.watch(path.watch.scss, scss)
}

const dev = gulp.series(pug, scss, gulp.parallel(watcher, server))

gulp.task('default', dev)
