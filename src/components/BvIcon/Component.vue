<template>
  <span 
    aria-hidden="true"
    class="bv-icon" 
    :class="nameClass"
    :style="style"
  />
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';

export default Vue.extend({
  name: 'BvIcon',
  props: {
    name: {
      type: String,
      default: ''
    } as PropOptions<string>,
    size: {
      type: String,
      default: 'inherit'
    } as PropOptions<string>
  },
  computed: {
    nameClass ():string {
      return this.name ? `bv-icon--${this.name}` : '';
    },
    style(): Object {
      return [{ '--bv-icon-size': this.size }];
    }
  }
});
</script>

<style lang="scss">
@import 'styles';
</style>
