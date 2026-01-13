import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  stories: [
    '../../../packages/components/src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../../../packages/components/src/**/*.mdx',
    '../../../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../../../src/components/**/*.mdx',
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'
  ],
  staticDirs: ['../../../public'],
  addons: [getAbsolutePath('@storybook/addon-links'), getAbsolutePath('@storybook/addon-docs')],
  framework: {
    name: getAbsolutePath('@storybook/vue3-vite'),
    options: {}
  },
  core: { disableTelemetry: true },
  docs: {}
};

export default config;

function getAbsolutePath(value) {
  return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)));
}
