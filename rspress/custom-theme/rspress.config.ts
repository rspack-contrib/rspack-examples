import * as path from 'path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  themeConfig: {
    footer: {
      createdBy: 'Rspress',
    } as any,
  },
});
