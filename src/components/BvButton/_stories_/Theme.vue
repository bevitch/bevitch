<template>
  <div>
    <div>Theme works on button text color with colors other than primary and secondary. Purple for example.</div>
    <BvButton
      light
      color="purple"
    >
      I am light
    </BvButton>
    <BvButton
      dark
      color="purple"
    >
      I am dark
    </BvButton>
  </div>
</template>

<script>
import { BvButton } from '@/components';

export default {
  name: 'BvButtonThemeStory',
  components: { BvButton }
};
</script>
