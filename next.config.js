'use strict';

const withImages = require('next-images');

module.exports = withImages({
  images: {
    domains: ['example.com'], // replace with your image domains
  },
  i18n: {
    locales: ['en', 'zh'],
    defaultLocale: 'en',
  },
});