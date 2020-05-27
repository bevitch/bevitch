import Vue, { PropOptions } from 'vue';
import { Route } from 'vue-router';

const BasicAppearanceProps = Vue.extend({
  name: 'BasicAppearanceProps',
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
    } as PropOptions<string>
  }
});

const ShapeAppearanceProps = Vue.extend({
  name: 'ShapeAppearanceProps',
  props: {
    elevated: {
      type: Boolean,
      default: false
    } as PropOptions<boolean>,
    bordered: {
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

const LinkBehaviourProps = Vue.extend({
  name: 'LinkBehaviourProps',
  props: {
    disabled: {
      type: Boolean,
      default: false
    } as PropOptions<boolean>,
    to: {
      type: [Object, String],
      default: null
    } as PropOptions<Route | null>,
    href: {
      type: String,
      default: null
    } as PropOptions<string | null>,
    newWindow: {
      type: Boolean,
      default: false
    } as PropOptions<boolean>
  }
});

export { BasicAppearanceProps, ShapeAppearanceProps, LinkBehaviourProps };
