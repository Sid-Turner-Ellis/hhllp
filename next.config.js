const path = require('path');
require('dotenv').config();
const withImages = require('next-images');

module.exports = {
  env: {
    API_URL: process.env.API_URL,
  },
  webpack: (config) => {
    config.resolve.alias['components'] = path.join(__dirname, 'components');
    config.resolve.alias['public'] = path.join(__dirname, 'public');
    config.resolve.alias['context'] = path.join(
      __dirname,
      'global/context/GlobalContext'
    );

    return config;
  },
};
