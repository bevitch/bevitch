module.exports = {
  stories: [
    '../../src/docs/installation.stories.mdx',
    '../../src/docs/quick-start.stories.mdx',
    '../../src/docs/configuration.stories.mdx',
    '../../src/docs/styles.stories.mdx',
    '../../src/components/introduction.stories.mdx',
    '../../src/components/**/*.stories.(js|jsx|ts|tsx|mdx)',
    '../../src/directives/introduction.stories.mdx',
    '../../src/directives/**/*.stories.(js|jsx|ts|tsx|mdx)'
  ],
  addons: [
    '@storybook/addon-actions',
    {
      name: '@storybook/addon-docs',
      options: {
        babelOptions: {
          presets: [
            [
              '@vue/cli-plugin-babel/preset',
              {
                jsx: false
              }
            ]
          ]
        }
      }
    },
    '@storybook/addon-knobs',
    '@storybook/addon-links',
    '@storybook/addon-notes',
    '@storybook/addon-a11y/register',
    '@storybook/addon-backgrounds/register'
  ]
};