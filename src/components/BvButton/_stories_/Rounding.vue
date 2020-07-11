<template>
  <div>
    <h1>Filled</h1>
    <div>
      <BvButton
        rounded
        color="primary"
        size="sm"
      >
        I am small
      </BvButton>
      <BvButton
        rounded
        color="primary"
        size="md"
      >
        I am normal
      </BvButton>
      <BvButton
        rounded
        color="primary"
        size="lg"
      >
        I am large
      </BvButton>
    </div>
    <h1>Outlined</h1>
    <div>
      <BvButton
        rounded
        color="primary"
        outlined
        size="sm"
      >
        I am small
      </BvButton>
      <BvButton
        rounded
        color="primary"
        outlined
        size="md"
      >
        I am normal
      </BvButton>
      <BvButton
        rounded
        color="primary"
        outlined
        size="lg"
      >
        I am large
      </BvButton>
    </div>
  </div>
</template>

<script>
import { BvButton } from '@/components';

export default {
  name: 'BvButtonRoundingStory',
  components: { BvButton }
};
</script>
