<template>
  <component
    :is="rootTag"
    class="bv-grid"
    :class="classes"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';

export default Vue.extend({
  name: 'BvGrid',
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
    rootTag():string {
      return this.isList ? 'ul' : 'div';
    },
    classes(): string[] {
      let classes: string[] = [];
      if (this.colsXs) classes.push(`bv-grid--cols-xs-${this.colsXs}`);
      if (this.colsSm) classes.push(`bv-grid--cols-sm-${this.colsSm}`);
      if (this.colsMd) classes.push(`bv-grid--cols-md-${this.colsMd}`);
      if (this.colsLg) classes.push(`bv-grid--cols-lg-${this.colsLg}`);
      return classes;
    }
  }
});
</script>

<style lang="scss">
@import './BvGrid.scss';
</style>
