<template>
  <div
    v-click-outside="onOutsideClick"
    style="background-color: #000; color: #fff;"
  >
    Click outside of me and check console
  </div>
</template>

<script>
import { ClickOutside } from '@/directives';

export default {
  name: 'ClickOutsideExampleStory',
  directives: {
    ClickOutside
  },
  methods: {
    onOutsideClick() {
      console.log('clicked outside');
    }
  }
};
</script>
