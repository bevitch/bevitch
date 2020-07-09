<template>
  <BvButton @click="action">
    Go to next story!
  </BvButton>
</template>

<script>
import { BvButton } from '@/components';
import { linkTo } from '@storybook/addon-links';

export default {
  name: 'BvButtonClickEventStory',
  components: { BvButton },
  methods: {
    action: linkTo('Components|Button', 'Sizes')
  }
};
</script>
