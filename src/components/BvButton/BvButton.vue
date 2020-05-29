<template>
  <component
    :is="component"
    :disabled="disabled"
    :class="classes"
    class="bv-button"
    type="button"
    :target="target"
    @click="click"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { PropOptions } from 'vue';
import mixins from 'vue-typed-mixins';
import { setColorClass } from '@/helpers/set-color-class';
import { ColorsSettings } from '@/types';
import { BasicAppearanceProps, ShapeAppearanceProps, LinkBehaviourProps } from '@/mixins/commonPropsMixin';

export default mixins(BasicAppearanceProps, ShapeAppearanceProps, LinkBehaviourProps).extend({
  name: 'BvButton',
  props: {
    outlined: {
      type: Boolean,
      default: false
    } as PropOptions<boolean>,
    flat: {
      type: Boolean,
      default: false
    } as PropOptions<boolean>,
    hoverText: {
      type: String,
      default: 'white'
    } as PropOptions<string>,
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
    component():string {
      return this.to ? 'RouterLink' : this.href ? 'a' : 'button';
    },
    target():string {
      return (this.to || this.href) ? ((this.newWindow) ?'_blank' : '_self') : '';
    },
    classes() {
      const sizeClass = `bv-button--${this.size}`;
      let colorClass: string[] = [];

      if (!this.flat && !this.outlined) { // basic button (no outline, no flat)
        colorClass = setColorClass(
          {
            color: this.color,
            hoverColor: `${this.color}-lighten-1`,
            hoverTextColor: this.hoverText
          } as ColorsSettings);
      } else if (this.flat && !this.outlined) { // flat button
        colorClass = setColorClass(
          {
            textColor: this.color,
            hoverColor: this.color,
            hoverTextColor: this.hoverText
          } as ColorsSettings);
      } else {
        colorClass = setColorClass( // outlined button
          {
            textColor: this.color,
            hoverColor: this.color,
            hoverTextColor: this.hoverText,
            borderColor: this.color
          } as ColorsSettings);
      }
      return [
        ...colorClass,
        sizeClass,
        ...setColorClass({
          dark: this.dark,
          light: this.light
        }),
        {
          'bv-button--elevated': this.elevated,
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
