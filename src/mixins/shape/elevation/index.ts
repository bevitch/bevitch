import Vue, { PropOptions } from 'vue';
import { CssClass } from '@/types';

export default Vue.extend({
  name: 'ElevationMixin',
  props: {
    elevated: {
      type: Boolean,
      default: false
    } as PropOptions<boolean>
  },
  computed: {
    elevationClass(): CssClass {
      return { 'ne--elevated': this.elevated };
    }
  }
});
