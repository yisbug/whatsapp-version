const { getVersionAndMd5 } = require('../index');

const main = async () => {
  //
  const res = await getVersionAndMd5('/Users/y/Downloads/WhatsApp.20240818.apk');
  console.log('res', res);
};

main();
