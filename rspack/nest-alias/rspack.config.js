const {defineConfig } = require('@rspack/cli');
const path = require('path');
module.exports = defineConfig({
  entry: {
    main: './src/index.ts',
  },
  experiments: {
    rspackFuture: {
      newResolver:true
    }
  },
  resolve: {
    tsConfig: {
      references: 'auto',
      configFile:path.resolve(__dirname,'./tsconfig.json')
    }
  }
});
