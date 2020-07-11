import Vue, { PropOptions } from 'vue';
import { CssClass } from '@/types';

export default Vue.extend({
  name: 'ThemeMixin',
  props: {
    dark: {
      type: Boolean,
      default: false
    } as PropOptions<boolean>,
    light: {
      type: Boolean,
      default: false
    } as PropOptions<boolean>
  },
  computed: {
    themeClasses(): CssClass {
      return {
        'ne--theme-dark': this.dark,
        'ne--theme-light': this.light
      };
    }
  }
});