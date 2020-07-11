<template>
  <div>
    <BvButton size="sm">
      I am small
    </BvButton>
    <BvButton size="md">
      I am normal
    </BvButton>
    <BvButton size="lg">
      I am large
    </BvButton>
  </div>
</template>

<script>
import { BvButton } from '@/components';

export default {
  name: 'BvButtonSizeStory',
  components: { BvButton }
};
</script>
