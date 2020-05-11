import { addParameters } from '@storybook/vue';
import { create } from '@storybook/theming/create';
import logo from '../../src/assets/images/logo.png';
import '../../src/styles/main.scss';

addParameters({
  options: {
    theme: create({
      brandTitle: 'Bevitch',
      brandImage: logo
    })
  }
});
