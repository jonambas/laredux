const prod = require('./configureStore.prod');
const dev = require('./configureStore.dev');

if (process.env.NODE_ENV === 'production' || (location && location.hostname !== 'localhost')) {
  module.exports = prod;
} else {
  module.exports = dev;
}
