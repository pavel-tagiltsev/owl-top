import path from 'path'
import __dirname from '../../root.js'
import gulpLoadPlugins from 'gulp-load-plugins'

export default gulpLoadPlugins({
  // Explanation of this code,
  // look for in readme.md file in bug's section
  // * start *
  config: path.resolve(__dirname, 'package.json'),
  // * end *
  pattern: ['gulp-*', 'gulp.*', '@*/gulp{-,.}*', 'browser-*'],
  rename: {
    'gulp-if': 'gulpIf'
  }
})
