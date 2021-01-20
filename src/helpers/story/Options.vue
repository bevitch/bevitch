<template>
  <div class="story-options ne--theme-light">
    <div class="ne--subtitle-2">
      Options
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Options'
};
</script>

<style lang="scss">
.story-options {
  width: 300px;
  padding: 10px;
  background-color: #f5f5f5;
  border-left: 1px solid #ccc;
  display: flex;
  flex-direction: column;
}
</style>
