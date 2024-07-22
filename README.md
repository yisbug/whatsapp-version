使用

```javascript
const { getVersionAndMd5 } = require('whatsapp-version');

const res = await getVersionAndMd5('~/Downloads/whatsapp.apk');

const { VERSION, MD5_CLASSES } = res;
```
