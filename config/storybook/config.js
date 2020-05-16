import { addParameters } from '@storybook/vue';
import { create } from '@storybook/theming/create';
import logo from '../../src/assets/images/logo.svg';
import '../../src/styles/main.scss';

addParameters({
  options: {
    theme: create({
      brandTitle: 'Bevitch',
      brandImage: logo
    })
  }
});

import { addDecorator } from '@storybook/vue';
import BvApp from '../../src/components/BvApp/BvApp.vue';
import BvButton from '../../src/components/BvButton/BvButton.vue';

addDecorator(() => ({
  data() {
    return {
      isLightThemeVisible: true
    };
  },
  components: {
    BvApp,
    BvButton
  },
  methods: {
    changeTheme() {
      this.isLightThemeVisible = !this.isLightThemeVisible;
    }
  },
  template: `
  <div>
    <BvApp :dark="!isLightThemeVisible">
      <div v-if="isLightThemeVisible" style="padding: 10px">
        <span style="display:inline-block; width: 200px;">Light application theme</span>
        <BvButton @click="changeTheme" rounded dark> Change to dark theme</BvButton>
      </div>
      <div v-else  style="padding: 10px">
      <span style="display:inline-block; width: 200px;">Dark application theme</span>
        <BvButton @click="changeTheme" rounded light> Change to light theme</BvButton>
      </div>
      <story/>
    </BvApp>
  </div>
  `
}));
