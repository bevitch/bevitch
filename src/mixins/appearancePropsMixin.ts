import Vue, { PropOptions } from 'vue';

export default Vue.extend({
  name: 'AppearancePropsMixin',
  props: {
    dark: {
      type: Boolean,
      default: false
    } as PropOptions<boolean>,
    light: {
      type: Boolean,
      default: false
    } as PropOptions<boolean>,
    color: {
      type: String,
      default: 'primary'
    } as PropOptions<string>,
    elevated: {
      type: Boolean,
      default: false
    } as PropOptions<boolean>,
    bordered: {
      type: Boolean,
      default: false
    } as PropOptions<boolean>,
    disabled: {
      type: Boolean,
      default: false
    } as PropOptions<boolean>,
    rounded: {
      type: Boolean,
      default: false
    } as PropOptions<boolean>,
    outlined: {
      type: Boolean,
      default: false
    } as PropOptions<boolean>
  }
});
