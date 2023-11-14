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
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  }
};

export default config;
