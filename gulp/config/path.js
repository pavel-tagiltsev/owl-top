import path from 'path'

const rootFolder = path.basename(path.resolve())
const distFolder = `./build`
const srcFolder = `./source`
const ftpFolder = 'test'

export default {
  build: {
    pug: `${distFolder}/`
  },
  src: {
    pug: `${srcFolder}/view/pages/*.pug`,
  },
  watch: {
    pug: `${srcFolder}/**/*.pug`,
  },
  clean: distFolder,
  distFolder,
  srcFolder,
  rootFolder,
  ftpFolder
}
