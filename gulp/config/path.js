import path from 'path'

const rootFolder = path.basename(path.resolve())
const distFolder = `./build`
const srcFolder = `./source`
const ftpFolder = 'test'

export default {
  build: {
    html: `${distFolder}/`,
    css: `${distFolder}/css/`,
    js: `${distFolder}/js/`,
    images: `${distFolder}/images/`,
    files: `${distFolder}/files/`,
    fonts: `${distFolder}/fonts/`,
  },
  src: {
    pug: `${srcFolder}/pages/*.pug`,
    scss: `${srcFolder}/styles.scss`,
    js: `${srcFolder}/scripts.js`,
    images: `${srcFolder}/images/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: `${srcFolder}/images/**/*.svg`,
    files: `${srcFolder}/files/**/*.*`,
    fonts: `${srcFolder}/fonts/`,
    fontStyle: `${srcFolder}/scss/fonts.scss`,
    svgSprite: `${srcFolder}/svg/*.svg`,
  },
  watch: {
    pug: `${srcFolder}/**/*.pug`,
    scss: `${srcFolder}/**/*.scss`,
    js: `${srcFolder}/**/*.js`,
    images: `${srcFolder}/**/*.{jpg,jpeg,png,svg,gif,webp,ico}`,
    files: `${srcFolder}/files/**/*.*`,
  },
  distFolder,
  srcFolder,
  rootFolder,
  ftpFolder
}
