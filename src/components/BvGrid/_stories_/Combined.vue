<template>
  <div>
    <h2 class="bv--title">
      Combined grid
    </h2>
    <p>
      Creates layout with different items width. <br>
      Declare number of columns from 12 column grid each item shoudl take on grid item component.
    </p>
    <BvGrid
      :is-list="isList"
    >
      <BvGridItem
        :is-list="isList"
        :cols-md="3"
        :cols-lg="9"
        class="bv--color-primary"
        style="height: 150px; padding: 10px;"
      >
        cols-md="3" cols-lg="9"
      </BvGridItem>
      <BvGridItem
        :is-list="isList"
        :cols-md="3"
        class="bv--color-secondary"
        style="height: 150px; padding: 10px;"
      >
        cols-md="3"
      </BvGridItem>
      <BvGridItem
        :is-list="isList"
        :cols-md="3"
        class="bv--color-primary-variant"
        style="height: 150px; padding: 10px;"
      >
        cols-md="3"
      </BvGridItem>
      <BvGridItem
        :is-list="isList"
        :cols-md="3"
        class="bv--color-secondary-variant"
        style="height: 150px; padding: 10px;"
      >
        cols-md="3"
      </BvGridItem>
      <BvGridItem
        :is-list="isList"
        :cols-sm="6"
        :cols-lg="2"
        class="bv--color-primary"
        style="height: 150px; padding: 10px;"
      >
        cols-sm="6" cols-lg="2"
      </BvGridItem>
      <BvGridItem
        :is-list="isList"
        :cols-sm="6"
        :cols-lg="2"
        class="bv--color-secondary"
        style="height: 150px; padding: 10px;"
      >
        cols-sm="6" cols-lg="2"
      </BvGridItem>
      <BvGridItem
        :is-list="isList"
        :cols-sm="6"
        :cols-lg="2"
        class="bv--color-primary-variant"
        style="height: 150px; padding: 10px;"
      >
        cols-sm="6" cols-lg="2"
      </BvGridItem>
      <BvGridItem
        :is-list="isList"
        :cols-sm="6"
        :cols-lg="2"
        class="bv--color-secondary-variant"
        style="height: 150px; padding: 10px;"
      >
        cols-sm="6" cols-lg="2"
      </BvGridItem>
    </BvGrid>
  </div>
</template>

<script>
import { BvGrid, BvGridItem } from '@/components';
import { boolean } from '@storybook/addon-knobs';

export default {
  name: 'BvGridCombinedStory',
  components: { BvGrid, BvGridItem },
  props: {
    isList: {
      type: Boolean,
      default: boolean('Is list type', false)
    }
  }
};
</script>
