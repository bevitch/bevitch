<template>
  <div>
    Close -
    <BvIcon 
      name="close" 
      class="bv--text-color-primary"
    />

    Check-mark - 
    <BvIcon 
      name="check-mark" 
      class="bv--text-color-primary"
    />
  </div>
</template>

<script>
import { BvIcon } from '@/components';

export default {
  name: 'BvIconExampleStory',
  components: { BvIcon }
};
</script>
