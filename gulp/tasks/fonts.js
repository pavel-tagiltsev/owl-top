import fs from 'fs'
import fonter from 'gulp-fonter'
import ttf2woff2 from 'gulp-ttf2woff2'

export const otfToTtf = () => {
  const {src, dest} = app.gulp
  const {fonts: source} = app.path.src
  const {plumber, notify} = app.plugins

  return src(`${source}*.otf`)
    .pipe(
      plumber(
        notify.onError({
          title: 'OTF_TO_TTF',
          message: 'Error: <%= error.message %>'
        })
      )
    )
    .pipe(
      fonter({
        formats: ['ttf']
      })
    )
    .pipe(dest(source))
}

export const ttfToWoff = () => {
  const {src, dest} = app.gulp
  const {fonts: build} = app.path.build
  const {fonts: source} = app.path.src
  const {plumber, notify} = app.plugins

  return src(`${source}*.ttf`)
    .pipe(
      plumber(
        notify.onError({
          title: 'TTF_TO_WOFF',
          message: 'Error: <%= error.message %>'
        })
      )
    )
    .pipe(
      fonter({
        formats: ['woff']
      })
    )
    .pipe(dest(build))
    .pipe(src(`${source}*.ttf`))
    .pipe(ttf2woff2())
    .pipe(dest(build))
}

export const transferWoff = () => {
  const {src, dest} = app.gulp
  const {fonts: build} = app.path.build
  const {fonts: source} = app.path.src

  return src(`${source}*.{woff,woff2}`).pipe(dest(build))
}

export const fontStyle = (done) => {
  const {fonts: build} = app.path.build
  const {fontStyle} = app.path.src

  // Файл стилей подключения шрифтов
  let fontsFile = fontStyle
  // Проверяем существуют ли файлы шрифтов
  fs.readdir(build, function (err, fontsFiles) {
    if (fontsFiles) {
      // Проверяем существует ли файл стилей для подключения шрифтов
      if (!fs.existsSync(fontsFile)) {
        // Если файла нет, создаем его
        fs.writeFile(fontsFile, '', done)
        let newFileOnly
        for (var i = 0; i < fontsFiles.length; i++) {
          // Записываем подключения шрифтов в файл стилей
          let fontFileName = fontsFiles[i].split('.')[0]
          if (newFileOnly !== fontFileName) {
            let fontName = fontFileName.split('-')[0]
              ? fontFileName.split('-')[0]
              : fontFileName
            let fontWeight = fontFileName.split('-')[1]
              ? fontFileName.split('-')[1]
              : fontFileName

            if (fontWeight.toLowerCase() === 'thin') {
              fontWeight = 100
            } else if (fontWeight.toLowerCase() === 'extralight') {
              fontWeight = 200
            } else if (fontWeight.toLowerCase() === 'light') {
              fontWeight = 300
            } else if (fontWeight.toLowerCase() === 'medium') {
              fontWeight = 500
            } else if (fontWeight.toLowerCase() === 'semibold') {
              fontWeight = 600
            } else if (fontWeight.toLowerCase() === 'bold') {
              fontWeight = 700
            } else if (
              fontWeight.toLowerCase() === 'extrabold' ||
              fontWeight.toLowerCase() === 'heavy'
            ) {
              fontWeight = 800
            } else if (fontWeight.toLowerCase() === 'black') {
              fontWeight = 900
            } else {
              fontWeight = 400
            }

            fs.appendFile(
              fontsFile,
              `@font-face {\n  font-family: ${fontName};\n  font-display: swap;\n  src: url("../fonts/${fontFileName}.woff2") format("woff2"),\n   url("../fonts/${fontFileName}.woff") format("woff");\n  font-weight: ${fontWeight};\n  font-style: normal;\n}\n\r`,
              done
            )

            newFileOnly = fontFileName
          }
        }
      } else {
        // Если файл есть нужно его удалить
        console.log(
          `${fontStyle} уже существует. Для обновления файла нужно его удалить!`
        )
      }
    }
  })

  done()
}
