const fs = require('fs');
const path = require('path');

takeScreenshots = (_browser,fileName) =>{
     _browser.takeScreenshot().then(function(data){
     fs.writeFileSync(fileName,data,'base64');
     });
};

removeScreenshotBeforeTestRun = (screenshotFilePath)=>{
    fs.readdir(screenshotFilePath, (err, files) => {
        if (err) throw err;
        for (const file of files) {
          fs.unlink(path.join(screenshotFilePath, file), err => {
            if (err) throw err;
          });
        }
      });
}

module.exports = {
    takeScreenshots,
    removeScreenshotBeforeTestRun
}