<template>
  <BvLoader
    :type="type"
    :size="size"
    :color="color"
  />
</template>

<script>
import { BvLoader } from '@/components';
import { bvColors } from '@/config/storybook';
import { number, select } from '@storybook/addon-knobs';

export default {
  name: 'BvLoaderExampleStory',
  components: { BvLoader },
  props: {
    type: {
      type: Number,
      default: select('Loader type', [
        1,
        2,
        3,
        4
      ], 1)
    },
    size: {
      type: Number,
      default: number('Size', 30)
    },
    color: {
      type: String,
      default: select('Color', bvColors, 'primary')
    }
  }
};
</script>
