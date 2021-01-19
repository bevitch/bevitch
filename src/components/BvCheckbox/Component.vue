<template>
  <div class="bv-checkbox">
    <input
      :id="`check_${id}`"
      ref="checkboxRef"
      :key="id"
      v-model="selectedValue"
      class="bv-checkbox__input"
      type="checkbox"
    >
    <label
      class="bv-checkbox__label"
      :for="`check_${id}`"
    >
      <slot>
        {{ label }}
      </slot>
    </label>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';

export default Vue.extend({
  name: 'BvCheckbox',
  props: {
    value: {
      type: Boolean,
      required: true
    } as PropOptions<boolean>,
    id: {
      type: [Number, String],
      required: true
    } as PropOptions<number | string>,
    label: {
      type: String,
      default: null
    } as PropOptions<string | null>,
    color: {
      type: String,
      default: 'primary'
    } as PropOptions<string>
  },
  computed: {
    selectedValue: {
      get(): boolean {
        return this.value;
      },
      set(val: boolean): void {
        this.input(val);
      }
    }
  },
  methods: {
    input(val: boolean): void {
      this.$emit('input', val);
    }
  }
});
</script>

<style lang="scss">
@import 'styles';
</style>
