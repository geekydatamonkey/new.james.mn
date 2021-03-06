// eslintrc
module.exports = {
  extends: 'airbnb',
  plugins: [
    'react'
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
        jsx: true,
        experimentalObjectRestSpread: true,
    },
  },
};
