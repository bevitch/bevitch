import Vue, { PropOptions } from 'vue';

export default Vue.extend({
  name: 'SizeMixin',
  props: {
    size: {
      type: String,
      default: 'md',
      validator: val => [
        'sm',
        'md',
        'lg'
      ].includes(val)
    } as PropOptions<'sm' | 'md' | 'lg'>
  }
});
