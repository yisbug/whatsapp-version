const { getVersionAndMd5 } = require('../index');

const main = async () => {
  //
  const res = await getVersionAndMd5('/Users/x/Downloads/com.whatsapp.w4b.2.24.10.85.apk');
  console.log('res', res);
};

main();
