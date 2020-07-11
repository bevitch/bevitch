import Vue, { PropOptions } from 'vue';

export default Vue.extend({
  name: 'IsListMixin',
  props: {
    isList: {
      type: Boolean,
      default: false
    } as PropOptions<boolean>
  },
  computed: {
    rootTag():string {
      return this.isList ? 'ul' : 'div';
    },
    childTag():string {
      return this.isList ? 'li' : 'div';
    }
  }
});
