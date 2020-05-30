<template>
  <component
    :is="itemTag"
    :class="classes"
    class="bv-grid-item"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';

export default Vue.extend({
  name: 'BvGridItem',
  props: {
    colsXs: {
      type: Number,
      default: undefined
    } as PropOptions<number>,
    colsSm: {
      type: Number,
      default: undefined
    } as PropOptions<number>,
    colsMd: {
      type: Number,
      default: undefined
    } as PropOptions<number>,
    colsLg: {
      type: Number,
      default: undefined
    } as PropOptions<number>,
    isList: {
      type: Boolean,
      default: false
    } as PropOptions<boolean>
  },
  computed: {
    itemTag():string {
      return this.isList ? 'li' : 'div';
    },
    classes(): string[] {
      let classes: string[] = [];
      if (this.colsXs) classes.push(`bv-grid-item--cols-xs-${this.colsXs}`);
      if (this.colsSm) classes.push(`bv-grid-item--cols-sm-${this.colsSm}`);
      if (this.colsMd) classes.push(`bv-grid-item--cols-md-${this.colsMd}`);
      if (this.colsLg) classes.push(`bv-grid-item--cols-lg-${this.colsLg}`);
      if (classes.length === 0 ) classes.push('bv-grid__item');
      return classes;
    }
  }
});
</script>

<style lang="scss">
@import './BvGridItem.scss';
</style>
