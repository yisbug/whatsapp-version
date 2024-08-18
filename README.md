### 本地使用

```shell
$ npm install whatsapp-version --save
```

```javascript
const { getVersionAndMd5 } = require('whatsapp-version');

const res = await getVersionAndMd5('~/Downloads/whatsapp.apk');

const { VERSION, MD5_CLASSES } = res;
```

### 全局安装

```shell
$ npm install whatsapp-version -g
```

### 全局使用

```shell
$ wsv whatsapp.apk
$ wsv ~/Downloads/whatsapp.apk
```
