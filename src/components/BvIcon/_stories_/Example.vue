<template>
  <div>
    Close -
    <BvIcon 
      name="close" 
      class="bv--text-color-primary icon"
    />

    Check-mark - 
    <BvIcon 
      name="check-mark" 
      size="30px"
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

<style lang="scss">
.icon {
  font-size: 40px;
}
</style>
