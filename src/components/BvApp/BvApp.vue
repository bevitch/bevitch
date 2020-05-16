<template>
  <div
    class="bv-app"
    :class="themeClass"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';

export default Vue.extend({
  name: 'BvApp',
  props: {
    dark: {
      type: Boolean,
      default: false
    } as PropOptions<boolean>
  },
  computed: {
    themeClass(): string {
      return `bv--theme-${this.dark ? 'dark' : 'light'}`;
    }
  }
});
</script>

<style lang="scss">
@import './BvApp.scss';
</style>
