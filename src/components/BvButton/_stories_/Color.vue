<template>
  <div>
    <div style="margin-bottom: 10px;">
      <BvButton color="primary">
        I am primary
      </BvButton>
      <BvButton color="secondary">
        I am secondary
      </BvButton>
    </div>
    <div style="margin-bottom: 10px;">
      <BvButton>I am default</BvButton>
      <BvButton color="success">
        I am success
      </BvButton>
      <BvButton color="info">
        I am info
      </BvButton>
      <BvButton color="warning">
        I am warning
      </BvButton>
      <BvButton color="error">
        I am error
      </BvButton>
    </div>
    <div style="margin-bottom: 10px;">
      <BvButton color="red">
        I am red
      </BvButton>
      <BvButton color="blue">
        I am blue
      </BvButton>
      <BvButton color="green">
        I am green
      </BvButton>
    </div>
  </div>
</template>

<script>
import { BvButton } from '@/components';

export default {
  name: 'BvButtonColorStory',
  components: { BvButton }
};
</script>
