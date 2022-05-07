import path from 'path'
import __dirname from '../../root.js'
import gulpLoadPlugins from 'gulp-load-plugins'

/*
module.parent deprecated in Node 14+
https://github.com/jackfranklin/gulp-load-plugins/issues/141
*/
export default gulpLoadPlugins({
  config: path.resolve(__dirname, 'package.json'),
  pattern: ['gulp-*', 'gulp.*', '@*/gulp{-,.}*', 'browser-*'],
  rename: {
    'gulp-if': 'gulpIf'
  }
})
