import { defineConfig } from 'taze';

export default defineConfig({
  mode: 'major',
  include: ['/rspack/', '/rsbuild/', '/rspress/', '/rsdoctor/'],
  write: true,
  recursive: true,
});
