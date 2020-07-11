<template>
  <div>
    <div style="margin-bottom: 10px;">
      <BvButton
        flat
        color="primary"
      >
        I am primary
      </BvButton>
      <BvButton
        flat
        color="secondary"
      >
        I am secondary
      </BvButton>
    </div>
    <div style="margin-bottom: 10px;">
      <BvButton flat>
        I am default
      </BvButton>
      <BvButton
        flat
        color="success"
        :hover-text="hoverText"
      >
        I am success
      </BvButton>
      <BvButton
        flat
        color="info"
        :hover-text="hoverText"
      >
        I am info
      </BvButton>
      <BvButton
        flat
        color="warning"
        :hover-text="hoverText"
      >
        I am warning
      </BvButton>
      <BvButton
        flat
        color="error"
        :hover-text="hoverText"
      >
        I am error
      </BvButton>
    </div>
    <div style="margin-bottom: 10px;">
      <BvButton
        flat
        color="red"
        :hover-text="hoverText"
      >
        I am red
      </BvButton>
      <BvButton
        flat
        color="blue"
        :hover-text="hoverText"
      >
        I am blue
      </BvButton>
      <BvButton
        flat
        color="green"
        :hover-text="hoverText"
      >
        I am green
      </BvButton>
    </div>
  </div>
</template>

<script>
import { BvButton } from '@/components';
import { bvColors } from '@/config/storybook';
import { select } from '@storybook/addon-knobs';

export default {
  name: 'BvButtonFlatnessStory',
  components: { BvButton },
  props: {
    hoverText: {
      type: String,
      default: select('Hover text color for outlined and flat button', bvColors, 'white')
    }
  }
};
</script>
