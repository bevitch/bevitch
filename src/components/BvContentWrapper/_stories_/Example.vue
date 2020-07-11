<template>
  <div class="bv--color-grey">
    Whole screen is gray, content is white
    <BvContentWrapper
      :full-width="fullWidth"
      :with-paddings="withPaddings"
      class="bv--color-white"
    >
      Configure me
    </BvContentWrapper>
  </div>
</template>

<script>
import { BvContentWrapper } from '@/components';
import { boolean } from '@storybook/addon-knobs';

export default {
  name: 'BvContentWrapperExampleStory',
  components: { BvContentWrapper },
  props: {
    fullWidth: {
      type: Boolean,
      default: boolean('Full width', false)
    },
    withPaddings:  {
      type: Boolean,
      default: boolean('With paddings', false)
    }
  }
};
</script>
