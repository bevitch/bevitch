<template>
  <div
    class="bv-loader"
    :class="`bv-loader--${type}`"
    :style="style"
  >
    <div
      v-for="index in 3"
      :key="index"
      :class="`bv-loader__circle bv--color-${color}`"
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';

export default Vue.extend({
  name: 'BvLoader',
  props: {
    type: {
      type: Number,
      default: 1
    } as PropOptions<number>,
    color: {
      type: String,
      default: 'primary'
    } as PropOptions<string>,
    size: {
      type: Number,
      default: 20
    } as PropOptions<number>
  },
  computed: {
    style(): Object {
      return [{ '--loader-initial-size': `${this.size}px` }];
    }
  }
});
</script>

<style lang="scss">
@import './BvLoader.scss';
</style>
