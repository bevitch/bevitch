<template>
  <component
    :is="component"
    :disabled="disabled"
    :class="classes"
    class="bv-button"
    type="button"
    @click="click"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
import { Route } from 'vue-router';

export default Vue.extend({
  name: 'BvButton',
  props: {
    dark: {
      type: Boolean,
      default: false
    } as PropOptions<boolean>,
    size: {
      type: String,
      default: 'md',
      validator: val => [
        'sm',
        'md',
        'lg'
      ].includes(val)
    } as PropOptions<'sm ' | 'md' | 'lg'>,
    color: {
      type: String,
      default: 'default'
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
    } as PropOptions<boolean>,
    to: {
      type: [Object, String],
      default: null
    } as PropOptions<Route | null>,
    href: {
      type: String,
      default: null
    } as PropOptions<string | null>
  },
  computed: {
    component() {
      return this.to ? 'RouterLink' : this.href ? 'a' : 'button';
    },
    classes() {
      const sizeClass = `bv-button--${this.size}`;
      const colorClass = `bv-button--color-${this.color}`;
      const themeClass = `bv-button--${this.dark ? 'dark' : 'light'}`;
      return [
        sizeClass,
        colorClass,
        themeClass,
        {
          'bv-button--elevated': this.elevated,
          'bv-button--bordered': this.bordered,
          'bv-button--disabled': this.disabled,
          'bv-button--rounded': this.rounded,
          'bv-button--outlined': this.outlined
        }
      ];
    }
  },
  methods: {
    click(): void {
      this.$emit('click');
    }
  }
});
</script>

<style lang="scss">
@import './BvButton.scss';
</style>
