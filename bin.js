#!/usr/bin/env node

const path = require('path');
const { getVersionAndMd5 } = require('./index');

const argv = process.argv.slice(2) || [];
const arg = argv[0] || '';

if (!arg) {
  console.error('Please provide the path to the apk file');
  return;
}

const pwd = process.cwd();

const apkFilePath = path.resolve(pwd, arg);

console.log('start getVersionAndMd5', apkFilePath);

getVersionAndMd5(apkFilePath)
  .then(res => {
    console.log('VERSION', res.VERSION);
    console.log('MD5_CLASSES', res.MD5_CLASSES);
  })
  .finally(() => {
    console.log('done!');
  });
