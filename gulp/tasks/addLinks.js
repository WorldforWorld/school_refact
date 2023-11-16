export const addLinks = () => {
  return app.gulp
    .src(app.path.src.html)
    .pipe(
      app.plugins.replace(
        "</head>",
        '\n\t<!-- Подключаемы скрипты -->\n\t<link rel="stylesheet" href="style.css">\n\t<script src="mani.js"></script>\n\t</head>\n\t'
      )
    )
    .pipe(app.gulp.dest(app.path.build.files));
};
