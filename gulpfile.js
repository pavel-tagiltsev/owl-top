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
import reset from './gulp/tasks/reset.js'
import images from './gulp/tasks/images.js'
import js from './gulp/tasks/js.js'
import files from './gulp/tasks/files.js'

function watcher() {
  gulp.watch(path.watch.pug, pug)
  gulp.watch(path.watch.scss, scss)
  gulp.watch(path.watch.js, js)
  gulp.watch(path.watch.images, images)
  gulp.watch(path.watch.files, files)
}

const mainTasks = gulp.parallel(pug, scss, js, images, files)
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server))
const build = gulp.series(reset, mainTasks)

export { build }

gulp.task('default', dev)
