const fs = require('fs');
const util = require('util');
const readFileAsync = util.promisify(fs.readFile);

/**
 * async await
 */
async function init() {
  try {
    const data = await readFileAsync('./package.json');
    const json = JSON.parse(data);
    console.log(json.name);
  } catch (error) {
    console.log(error);
  };
};

init();