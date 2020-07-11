import Vue, { PropOptions } from 'vue';
import { CssClass } from '@/types';

export default Vue.extend({
  name: 'BorderedMixin',
  props: {
    bordered: {
      type: Boolean,
      default: false
    } as PropOptions<boolean>
  },
  computed: {
    borderedClass(): CssClass {
      return { 'ne--bordered': this.bordered };
    }
  }
});
