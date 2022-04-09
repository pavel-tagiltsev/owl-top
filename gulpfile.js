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

function watcher() {
  gulp.watch(path.watch.pug, pug)
}

gulp.task('default', watcher)
