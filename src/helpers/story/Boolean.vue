<template>
  <BvCheckbox
    :id="label"
    :value="value"
    :label="label"
    class="story-options-boolean"
    @input="input"
  />
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
import { BvCheckbox } from '@/components';

export default Vue.extend({
  name: 'BooleanOption',
  components: {
    BvCheckbox
  },
  props: {
    value: {
      type: Boolean,
      required: true
    } as PropOptions<boolean>,
    label: {
      type: String,
      required: true
    } as PropOptions<string>
  },
  methods: {
    input(isChecked: boolean): void {
      this.$emit('input', isChecked);
    }
  }
});
</script>

<style lang="scss">
.story-options-boolean {
  margin-top: 10px;
}
</style>
