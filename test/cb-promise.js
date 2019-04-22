const fs = require('fs');

/**
 * callback
 */
// fs.readFile('./package.json', (error, data) => {
//   if (error) {
//     console.log(error);
//     return;
//   };
//   const json = JSON.parse(data);
//   console.log(json.name);
// });

/**
 * Promise
 */
// function readFileAsync(path) {
//   return new Promise((resolve, reject) => {
//     fs.readFile('./package.json', (error, data) => {
//       if (error) {
//         reject(error);
//         return;
//       };
//       resolve(data);
//     });
//   });
// };

// readFileAsync('./package.json')
//   .then((data) => {
//     const json = JSON.parse(data);
//     console.log(json.name);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

/** 
 * promisify
 */
// const util = require('util');
// util.promgisify(fs.readFile)('./package.json')
//   .then(JSON.parse)
//   .then((data) => {
//     console.log(data.name);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
