//https://jestjs.io/docs/en/webpack.html
module.exports = {
  rootDir: '../',
  roots: [
    '<rootDir>/src',
  ],
  setupFilesAfterEnv: [
    'react-testing-library/cleanup-after-each',
  ],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
}
