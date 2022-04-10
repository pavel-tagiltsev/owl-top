import path from 'path'

const rootFolder = path.basename(path.resolve())
const distFolder = `./build`
const srcFolder = `./source`
const ftpFolder = 'test'

export default {
  build: {
    html: `${distFolder}/`,
    css: `${distFolder}/css/`,
  },
  src: {
    pug: `${srcFolder}/view/pages/*.pug`,
    scss: `${srcFolder}/styles/index.scss`,
  },
  watch: {
    pug: `${srcFolder}/**/*.pug`,
    scss: `${srcFolder}/styles/**/*.scss`,
  },
  clean: distFolder,
  distFolder,
  srcFolder,
  rootFolder,
  ftpFolder
}
