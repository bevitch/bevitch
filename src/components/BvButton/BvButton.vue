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
import { PropOptions } from 'vue';
import mixins from 'vue-typed-mixins';
import { BasicAppearanceProps, ShapeAppearanceProps, LinkBehaviourProps } from '@/mixins/commonPropsMixin';

export default mixins(BasicAppearanceProps, ShapeAppearanceProps, LinkBehaviourProps).extend({
  name: 'BvButton',
  props: {
    size: {
      type: String,
      default: 'md',
      validator: val => [
        'sm',
        'md',
        'lg'
      ].includes(val)
    } as PropOptions<'sm ' | 'md' | 'lg'>
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
