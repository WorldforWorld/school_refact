import pug from "gulp-pug";
import versionNumber from "gulp-version-number";
import webpHtmlNosvg from "gulp-webp-html-nosvg";
export const html = () => {
  return (
    app.gulp
      .src(app.path.src.html)
      .pipe(
        app.plugins.plumber(
          app.plugins.notify.onError({
            title: "HTML",
            message: "Error <%= error.message %>",
          })
        )
      )
      // .pipe(
      //   fileinclude({
      //     context: {
      //       menu: nav.menu,
      //     },
      //   })
      //)  Не нужен при работе с расширением файлов PUG
      .pipe(
        pug({
          // Сжатие HTML файла
          pretty: true,
          // Показывать в терминале какой файл обработан
          verbose: true,
        })
      )
      .pipe(app.plugins.replace(/@img\//g, "img/"))
      .pipe(app.plugins.if(app.isBuild, webpHtmlNosvg()))
      .pipe(
        app.plugins.if(
          app.isBuild,
          versionNumber({
            value: "%DT%",
            append: {
              key: "_v",
              cover: 0,
              to: ["css", "js"],
            },
          })
        )
      )
      .pipe(app.gulp.dest(app.path.build.html))
      .pipe(app.plugins.browsersync.stream())
  );
};
