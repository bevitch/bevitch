import Vue, { PropOptions } from 'vue';
import { CssClass } from '@/types';

export default Vue.extend({
  name: 'RoundedMixin',
  props: {
    rounded: {
      type: Boolean,
      default: false
    } as PropOptions<boolean>
  },
  computed: {
    roundedClass(): CssClass {
      return { 'ne--rounded': this.rounded };
    }
  }
});
