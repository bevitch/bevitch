<template>
  <div>
    <div style="margin-bottom: 10px;">
      <BvButton
        outlined
        color="primary"
      >
        I am primary
      </BvButton>
      <BvButton
        outlined
        color="secondary"
      >
        I am secondary
      </BvButton>
    </div>
    <div style="margin-bottom: 10px;">
      <BvButton
        outlined
        :hover-text="hoverText"
      >
        I am default
      </BvButton>
      <BvButton
        outlined
        color="success"
        :hover-text="hoverText"
      >
        I am success
      </BvButton>
      <BvButton
        outlined
        color="info"
        :hover-text="hoverText"
      >
        I am info
      </BvButton>
      <BvButton
        outlined
        color="warning"
        :hover-text="hoverText"
      >
        I am warning
      </BvButton>
      <BvButton
        outlined
        color="error"
        :hover-text="hoverText"
      >
        I am error
      </BvButton>
    </div>
    <div style="margin-bottom: 10px;">
      <BvButton
        outlined
        color="red"
        :hover-text="hoverText"
      >
        I am red
      </BvButton>
      <BvButton
        outlined
        color="blue"
        :hover-text="hoverText"
      >
        I am blue
      </BvButton>
      <BvButton
        outlined
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
  name: 'BvButtonOutlineStory',
  components: { BvButton },
  props: {
    hoverText: {
      type: String,
      default: select('Hover text color for outlined and flat button', bvColors, 'white')
    }
  }
};
</script>
