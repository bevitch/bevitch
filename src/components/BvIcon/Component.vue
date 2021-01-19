<template>
  <span 
    aria-hidden="true"
    class="bv-icon" 
    :class="nameClass"
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
    } as PropOptions<string>
  },
  computed: {
    nameClass ():string {
      return this.name ? `bv-icon--${this.name}` : '';
    }
  }
});
</script>

<style lang="scss">
@import 'styles';
</style>
