import { addParameters } from '@storybook/vue';
import { create } from '@storybook/theming/create';
import logo from '../../src/assets/images/logo.png';
import '../../../icons/dist/ne-icons.css';
import '../../../icons/dist/ne-file-icons.css';
import '../../../styles/scss/main.scss';

addParameters({
  options: {
    theme: create({
      brandTitle: 'Nowa Era - Vue.js',
      brandImage: logo
    })
  }
});
