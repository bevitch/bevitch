<template>
  <div class="story-preview">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Preview'
};
</script>

<style lang="scss">
.story-preview {
  margin: 5px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border: 1px solid #ccc;
}
</style>
