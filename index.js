const AppInfoParser = require('app-info-parser');
const unzipper = require('unzipper');
const crypto = require('crypto');

module.exports = {
  async getVersionAndMd5(apkFilePath) {
    const version = await new Promise((resolve, reject) => {
      const parser = new AppInfoParser(apkFilePath); // or xxx.ipa
      parser
        .parse()
        .then(result => {
          resolve(result.versionName);
        })
        .catch(err => {
          console.log('err ----> ', err);
          reject(err);
        });
    });

    const directory = await unzipper.Open.file(apkFilePath);
    const file = directory.files.find(d => d.path === 'classes.dex');
    const content = await file.buffer();
    const md5 = crypto
      .createHash('md5')
      .update(content)
      .digest('base64');

    return {
      VERSION: version,
      MD5_CLASSES: md5,
    };
  },
};
