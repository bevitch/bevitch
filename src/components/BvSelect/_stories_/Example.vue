<template>
  <BvSelect
    label="Basic select"
    :options="['Option 1', 'Option 2', 'Option 3']"
  />
</template>

<script>
import { BvSelect } from '@/components';

export default {
  name: 'BvSelectExampleStory',
  components: { BvSelect }
};
</script>
