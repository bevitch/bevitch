<template>
  <BvButton
    :dark="dark"
    :color="color"
    :size="size"
    :bordered="bordered"
    :elevated="elevated"
    :disabled="disabled"
    :rounded="rounded"
    :outlined="outlined"
    :hover-text="hoverText"
  >
    Configure me
  </BvButton>
</template>

<script>
import { BvButton } from '@/components';
import { bvColors } from '@/config/storybook';
import { boolean, select } from '@storybook/addon-knobs';

export default {
  name: 'BvButtonExampleStory',
  components: { BvButton },
  props: {
    light: {
      type: Boolean,
      default: boolean('Light theme', false)
    },
    dark: {
      type: Boolean,
      default: boolean('Dark theme', false)
    },
    color: {
      type: String,
      default: select('Color', bvColors, 'primary')
    },
    size: {
      type: String,
      default: select('Size', [
        'sm',
        'md',
        'lg'
      ], 'md')
    },
    bordered: {
      type: Boolean,
      default: boolean('Border', false)
    },
    elevated: {
      type: Boolean,
      default: boolean('Elevated', false)
    },
    disabled: {
      type: Boolean,
      default: boolean('Disabled', false)
    },
    rounded: {
      type: Boolean,
      default: boolean('Rounded', false)
    },
    flat: {
      type: Boolean,
      default: boolean('Flat', false)
    },
    outlined: {
      type: Boolean,
      default: boolean('Outlined', false)
    },
    hoverText: {
      type: String,
      default: select('Hover text color for outlined and flat button', bvColors, 'white')
    }
  }
};
</script>
