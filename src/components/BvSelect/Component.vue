<template>
  <div class="bv-select">
    <select
      :id="`select_${id}`"
      :key="id"
      v-model="selectedValue"
      class="bv-select__input"
    >
      <option
        v-for="option in options"
        :key="option"
        :value="option"
      >
        {{ option }}
      </option>
    </select>
    <label
      class="bv-select__label"
      :for="`slect_${id}`"
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
  name: 'BvSelect',
  props: {
    options: {
      type: Array,
      required: true
    } as PropOptions<string[]>,
    value: {
      type: String,
      default: ''
    } as PropOptions<string>,
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
      get(): string {
        return this.value;
      },
      set(val: string): void {
        this.input(val);
      }
    }
  },
  methods: {
    input(val: string): void {
      this.$emit('input', val);
    }
  }
});
</script>

<style lang="scss">
@import 'styles';
</style>
