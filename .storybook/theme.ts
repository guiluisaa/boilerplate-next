import { create } from '@storybook/theming';

const theme = create({
  base: 'dark',

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Brand
  brandTitle: 'Chama Website'
});

export default theme;
