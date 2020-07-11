import Vue, { PropOptions } from 'vue';
import { Location } from 'vue-router';

export default Vue.extend({
  name: 'LinkMixin',
  props: {
    to: {
      type: [Object, String],
      default: null
    } as PropOptions<Location | null>,
    href: {
      type: String,
      default: null
    } as PropOptions<string | null>,
    newWindow: {
      type: Boolean,
      default: false
    } as PropOptions<boolean>
  },
  computed: {
    component(): string {
      return this.to ? 'RouterLink' : this.href ? 'a' : '';
    },
    target(): string {
      return this.newWindow ?'_blank' : '_self';
    }
  }
});
