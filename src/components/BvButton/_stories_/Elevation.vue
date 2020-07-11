<template>
  <div>
    <div>
      <BvButton
        color="primary"
        style="margin:10px;"
      >
        I am not elevated
      </BvButton>
      <BvButton
        color="primary"
        elevated
        style="margin:10px;"
      >
        I am elevated
      </BvButton>
    </div>
    <div>
      <BvButton
        color="secondary"
        style="margin:10px;"
      >
        I am not elevated
      </BvButton>
      <BvButton
        color="secondary"
        elevated
        style="margin:10px;"
      >
        I am elevated
      </BvButton>
    </div>
  </div>
</template>

<script>
import { BvButton } from '@/components';

export default {
  name: 'BvButtonElevationStory',
  components: { BvButton }
};
</script>
