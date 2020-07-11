import Vue, { PropOptions } from 'vue';
import { CssClass } from '@/types';

export default Vue.extend({
  name: 'RoundMixin',
  props: {
    round: {
      type: Boolean,
      default: false
    } as PropOptions<boolean>
  },
  computed: {
    roundClass(): CssClass {
      return { 'ne--round': this.round };
    }
  }
});
