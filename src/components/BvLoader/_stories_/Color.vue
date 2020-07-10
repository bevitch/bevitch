<template>
  <div>
    primary
    <BvLoader color="primary" />
    primary-variant
    <BvLoader color="primary-variant" />
    secondary
    <BvLoader color="secondary" />
    secondary-variant
    <BvLoader color="secondary-variant" />
    success
    <BvLoader color="success" />
    info
    <BvLoader color="info" />
    warning
    <BvLoader color="warning" />
    error
    <BvLoader color="error" />
    <div />
  </div>
</template>

<script>
import { BvLoader } from '@/components';

export default {
  name: 'BvLoaderColorStory',
  components: { BvLoader }
};
</script>
