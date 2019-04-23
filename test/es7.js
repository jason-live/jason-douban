/** 
 * 目前配置只支持es6，还需要配置es7支持
 * 1. 新增build构建
 * "build": "rimraf dist && babel test -s -D -d dist --presets env",
 * 2. 新增prod运行
 * "prod": "node dist/es7.js"
 * 3. baocuo
 * ReferenceError: regeneratorRuntime is not defined
 * 4. 安装 babel-runtime babel-plugin-transform-runtime
 * 5. 配置 .babelrc
 * 
*/

import { promisify } from 'util';
import { readFile } from 'fs';
import { resolve as r } from 'path';

async function init() {
  let data = await promisify(readFile)(r(__dirname, '../package.json'));
  data = JSON.parse(data);
  console.log(data.name);
};

init();