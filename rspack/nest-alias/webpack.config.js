const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin').TsconfigPathsPlugin;

module.exports = {
  mode: 'none',
  entry: {
    main: './src/index.ts',
  },
  resolve: {
    extensions: ['.ts', '...'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: './tsconfig.json',
        extensions: ['.ts', '.tsx'],
        references: ['../common-libs/lib1/tsconfig.json', '../common-libs/lib2/tsconfig.json'],
      }),
    ],
  },
};
