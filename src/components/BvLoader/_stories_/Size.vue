<template>
  <div>
    size=20
    <BvLoader
      :size="20"
      :type="1"
    />
    size=30
    <BvLoader
      :size="30"
      :type="2"
    />
    size=50
    <BvLoader
      :size="50"
      :type="1"
    />
    size=123
    <BvLoader
      :size="123"
      :type="1"
    />
    <div />
  </div>
</template>

<script>
import { BvLoader } from '@/components';

export default {
  name: 'BvLoaderSizeStory',
  components: { BvLoader }
};
</script>
