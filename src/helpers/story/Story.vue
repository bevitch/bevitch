<template>
  <div class="story">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Story'
};
</script>

<style lang="scss">
.story {
  padding: 5px;
  position: relative;
  flex-grow: 1;
  max-height: calc(100vh - 100px);
  overflow-y: auto;
}
</style>
