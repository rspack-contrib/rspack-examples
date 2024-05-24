// babel.config.js
const ReactCompilerConfig = {
  /* ... */
};

module.exports = {
  plugins: [
    ['babel-plugin-react-compiler', ReactCompilerConfig], // must run first!
    '@babel/plugin-syntax-jsx',
  ],
};
