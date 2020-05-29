<template>
  <div
    class="bv-content-wrapper"
    :class="classes"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';

export default Vue.extend({
  name: 'BvContentWrapper',
  props: {
    fullWidth: {
      type: Boolean,
      default: false
    } as PropOptions<boolean>,
    withPaddings: {
      type: Boolean,
      default: false
    } as PropOptions<boolean>
  },
  computed: {
    classes(): object {
      return {
        'bv-content-wrapper--full-width': this.fullWidth,
        'bv-content-wrapper--with-paddings': this.withPaddings
      };
    }
  }
});
</script>

<style lang="scss">
@import './BvContentWrapper.scss';
</style>
