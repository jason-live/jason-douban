const fs = require('fs');

/**
 * 第一阶段 回调函数
*/
// function readFile(fn) {
//   fs.readFile('package.json', (error, data) => {
//     if (error) {
//       return fu(error);
//     };
//     fn(null, data);
//   });
// };

// readFile((error, data) => {
//   if (!error) {
//     data = JSON.parse(data);
//     console.log(data.name);
//   };
// });

/**
 * 第二阶段 Promise
*/

// function readFilePromise(path) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(path, (error, data) => {
//       if (error) {
//         return reject(error);
//       };
//       resolve(data);
//     });
//   });
// };

// readFilePromise('./package.json')
//   .then((data) => {
//     const json = JSON.parse(data);
//     console.log(json.name);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

/**
 * 第三阶段 co gentrator function promise
*/
// const util = require('util');
// const co = require('co');

// co(function *() {
//   let data = yield util.promisify(fs.readFile)('./package.json');
//   data = JSON.parse(data);
//   console.log(data.name);
// });

/**
 * 第四阶段 async 统一世界
*/
// const util = require('util');
// const readFile = util.promisify(fs.readFile);

// async function init() {
//   let data = await readFile('./package.json');
//   data = JSON.parse(data);
//   console.log(data.name);
// };

// init();
