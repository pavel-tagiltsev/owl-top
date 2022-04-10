import path from 'path'

const rootFolder = path.basename(path.resolve())
const distFolder = `./build`
const srcFolder = `./source`
const ftpFolder = 'test'

export default {
  build: {
    html: `${distFolder}/`,
    css: `${distFolder}/css/`,
    images: `${distFolder}/images/`,
  },
  src: {
    pug: `${srcFolder}/view/pages/*.pug`,
    scss: `${srcFolder}/styles/index.scss`,
    images: `${srcFolder}/images/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: `${srcFolder}/images/**/*.svg`,
  },
  watch: {
    pug: `${srcFolder}/**/*.pug`,
    scss: `${srcFolder}/styles/**/*.scss`,
    images: `${srcFolder}/**/*.{jpg,jpeg,png,svg,gif,webp,ico}`,
  },
  distFolder,
  srcFolder,
  rootFolder,
  ftpFolder
}
