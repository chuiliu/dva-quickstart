const fs = require('fs');
const path = require('path');

const mockPath = path.resolve(__dirname, 'mock');
const mock = {};

fs.readdirSync(mockPath).forEach(file => {
  Object.assign(mock, require(`./mock/${file}`));
});

export default mock;
