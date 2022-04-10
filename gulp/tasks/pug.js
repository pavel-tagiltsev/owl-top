import pug from 'gulp-pug' // Компиляция pug в html

export default () => {
	const { src, dest } = app.gulp
	const { plumber, notify, browserSync } = app.plugins

	return src(app.path.src.pug)
		.pipe(plumber(
			notify.onError({
				title: 'PUG',
				message: 'Error: <%= error.message %>'
			})
		))
		.pipe(pug({ pretty: app.isDev} ))
		.pipe(dest(app.path.build.html))
    .pipe(browserSync.stream())
}
