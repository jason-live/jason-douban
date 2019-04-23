/** 
 * 所有浏览器包括nodejs版本均不支持import，需要通过babel转译
 * 1. 安装babel-cli babel-preset-env nodeman
 * 2. 新增 .babelrc文件
 * {
    "presets": [[
      "env",
      {
        "targets": {
          "node": "current"
        }
      }
    ]]
  }
 * 3. package script下新增编译命令
 * "dev": "babel-node test/module.js --presets env",
 * 4. npm run dev
*/

import { promisify } from 'util';
import { resolve as r } from 'path';
import { readFile, writeFileSync as wfs } from 'fs';
import * as qs from 'querystring';

promisify(readFile)(r(__dirname, '../package.json'))
  .then((data) => {
    const name = JSON.parse(data).name;

    wfs(r(__dirname, './module.txt'), String(name), 'utf-8');
  });