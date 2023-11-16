// Получаем имя папки проекта
import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
  build: {
    js: `${buildFolder}/assets/js/`,
    css: `${buildFolder}/assets/css/`,
    html: `${buildFolder}/`,
    images: `${buildFolder}/assets/images/`,
    fonts: `${buildFolder}/assets/fonts/`,
    files: `${buildFolder}/files/`,
    favicon: `${buildFolder}/assets/images/favicon/`,
  },
  src: {
    js: `${srcFolder}/js/app.js`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: `${srcFolder}/img/**/*.svg`,
    scss: `${srcFolder}/scss/style.scss`,
    html: `${srcFolder}/*.pug`, // .pug
    files: `${srcFolder}/files/**/*.*`,
    svgicons: `${srcFolder}/svgicons/*.svg`,
    favicon: `${srcFolder}/images/favicon/favicon.svg`,
  },
  watch: {
    js: `${srcFolder}/js/**/*.js`,
    scss: `${srcFolder}/scss/**/*.{sass,scss}`,
    html: `${srcFolder}/**/*.pug`, //.pub
    images: `${srcFolder}/images/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
    files: `${srcFolder}/files/**/*.*`,
    favicon: `${srcFolder}/images/favicon/favicon.svg`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: `test`, // Название папки на удалённом сервере
};
