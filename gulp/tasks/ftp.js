import util from "gulp-util";
import vinylFTP from "vinyl-ftp";
import { configFTP } from "../config/ftp.js";

export const ftp = () => {
  configFTP.log = util.log;
  const FtpConnect = vinylFTP.create(configFTP);
  return app.gulp
    .src(`${app.path.buildFolder}/**/*.*`, {})
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "FTP",
          message: "Error <%= error.message %>",
        })
      )
    )
    .pipe(FtpConnect.dest(`/${app.path.ftp}/${app.path.buildFolder}`));
};
