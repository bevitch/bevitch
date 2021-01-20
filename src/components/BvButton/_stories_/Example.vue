<template>
  <Preview>
      <Story>
        <BvButton
          :dark="dark"
          :color="color"
          :size="size"
          :elevated="elevated"
          :disabled="disabled"
          :rounded="rounded"
          :outlined="outlined"
          :hover-text="hoverText"
        >
          Configure me
        </BvButton>
      </Story>
    <Options>
      <Boolean
        v-model="elevated"
        label="Elevated"
      />
      <Boolean
        v-model="rounded"
        label="Rounded"
      />
      <Boolean
        v-model="outlined"
        label="Outlined"
      />
      <Boolean
        v-model="disabled"
        label="Disabled"
      />
    </Options>
  </Preview>
</template>

<script>
import { BvButton } from '@/components';
import { bvColors } from '@/config/storybook';
import { Story, Preview, Options, List, Boolean } from '@/helpers/story';

export default {
  name: 'BvButtonExampleStory',
  components: { 
    BvButton, 
    Story, 
    Preview, 
    Options, 
    List, 
    Boolean
  },
  data() {
    return {
      light: true,
      dark: false,
      color: 'primary',
      size: 'md',
      elevated: false,
      disabled: false,
      rounded: false,
      outlined: false,
      hoverText: 'primary'
    };
  },
  computed: {
    colors() {
      return bvColors;
    }
  }
};
</script>
