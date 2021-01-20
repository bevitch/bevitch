<template>
  <BvSelect
    :id="value"
    :value="value"
    :options="items"
    :label="label"
    class="story-options-list"
    @input="select"
  />
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
import { BvSelect } from '@/components';

export default Vue.extend({
  name: 'ListOption',
  components: {
    BvSelect
  },
  props: {
    value: {
      type: [String],
      default: null
    } as PropOptions<string | number | null>,
    items: {
      type: Array,
      required: true
    } as PropOptions<String[]>,
    label: {
      type: String,
      required: true
    } as PropOptions<string>
  },
  methods: {
    select(item: string): void {
      this.$emit('select', item);
      if (item !== this.value) {
        this.$emit('change', item);
      }
    }
  }
});
</script>

<style lang="scss">
.story-options-list {
  margin-top: 10px;
  background-color: #fff;
}
</style>
