<template>
  <div>
    <div>
      <BvButton>I am not disabled</BvButton>
      <BvButton disabled>
        I am disabled
      </BvButton>
    </div>
    <div>
      <BvButton color="secondary">
        I am not disabled
      </BvButton>
      <BvButton
        color="secondary"
        disabled
      >
        I am disabled
      </BvButton>
    </div>
  </div>
</template>

<script>
import { BvButton } from '@/components';

export default {
  name: 'BvButtonDisabilityStory',
  components: { BvButton }
};
</script>
