import Vue, { PropOptions } from 'vue';
import { CssClass } from '@/types';

export default Vue.extend({
  name: 'RoundedSmallMixin',
  props: {
    roundedSmall: {
      type: Boolean,
      default: false
    } as PropOptions<boolean>
  },
  computed: {
    roundedSmallClass(): CssClass {
      return { 'ne--rounded-small': this.roundedSmall };
    }
  }
});
