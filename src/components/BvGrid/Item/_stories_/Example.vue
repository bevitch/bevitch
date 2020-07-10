<template>
  <div>
    <h2 class="bv--title">
      Grid item
    </h2>
    <p>
      Creates element of selectet width. Can be used without grid component <br>
      Declare number of columns from 12 column grid item shoudl take.
    </p>
    <BvGridItem
      :cols-xs="colsXs"
      :cols-sm="colsSm"
      :cols-md="colsMd"
      :cols-lg="colsLg"
      class="bv--color-primary"
      style="height: 150px; padding: 10px;"
    >
      Configure me
    </BvGridItem>
  </div>
</template>

<script>
import { BvGridItem } from '@/components';
import { select } from '@storybook/addon-knobs';
const columnNumber = [
  null,
  1,
  2,
  3,
  4,
  6,
  12
];

export default {
  name: 'BvGridItemExampleStory',
  components: { BvGridItem },
  props: {
    colsXs: {
      type: Number,
      default: select('xs cols number', columnNumber, 3)
    },
    colsSm: {
      type: Number,
      default: select('sm cols number', columnNumber, null)
    },
    colsMd: {
      type: Number,
      default: select('md cols number', columnNumber, null)
    },
    colsLg: {
      type: Number,
      default: select('lg cols number', columnNumber, null)
    }
  }
};
</script>
