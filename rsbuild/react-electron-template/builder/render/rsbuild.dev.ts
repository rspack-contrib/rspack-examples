import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { join } from 'path';
import { srcRenderPath } from '../common/paths';
import { spawn } from 'node:child_process';
import CommonConfig from '../common/rsbuild.common';

const Config = defineConfig({
  plugins: [pluginReact()],
  source: {
    entry: {
      index: join(srcRenderPath, './index.tsx'),
    },
  },
  server: {
    port: Number(process.env.PORT || 8088),
  },
  dev: {
    setupMiddlewares: [
      (middlewares) => {
        spawn('npm', ['run', 'dev:main'], {
          shell: true,
          stdio: 'inherit',
        }).on('error', (spawnError: Error) => {
          console.error(`Main Server err:${spawnError}`);
        });
        return middlewares;
      },
    ],
  },
});

module.exports = Object.assign(CommonConfig, Config);
