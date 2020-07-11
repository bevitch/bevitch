<template>
  <div>
    <h2 class="bv--title">
      Simple grid
    </h2>
    <p>
      Creates layout with equal items width. <br>
      Declare number of columns from 12 column grid each item shoudl take on grid component.
    </p>
    <BvGrid
      :cols-xs="colsXs"
      :cols-sm="colsSm"
      :cols-md="colsMd"
      :cols-lg="colsLg"
      :is-list="isList"
    >
      <BvGridItem
        :is-list="isList"
        class="bv--color-primary"
        style="height: 150px; padding: 10px;"
      >
        item 1
      </BvGridItem>
      <BvGridItem
        :is-list="isList"
        class="bv--color-primary"
        style="height: 150px; padding: 10px;"
      >
        item 2
      </BvGridItem>
      <BvGridItem
        :is-list="isList"
        class="bv--color-primary"
        style="height: 150px; padding: 10px;"
      >
        item 3
      </BvGridItem>
      <BvGridItem
        :is-list="isList"
        class="bv--color-primary"
        style="height: 150px; padding: 10px;"
      >
        item 4
      </BvGridItem>
      <BvGridItem
        :is-list="isList"
        class="bv--color-primary"
        style="height: 150px; padding: 10px;"
      >
        item 5
      </BvGridItem>
      <BvGridItem
        :is-list="isList"
        class="bv--color-primary"
        style="height: 150px; padding: 10px;"
      >
        item 6
      </BvGridItem>
      <BvGridItem
        :is-list="isList"
        class="bv--color-primary"
        style="height: 150px; padding: 10px;"
      >
        item 7
      </BvGridItem>
      <BvGridItem
        :is-list="isList"
        class="bv--color-primary"
        style="height: 150px; padding: 10px;"
      >
        item 8
      </BvGridItem>
    </BvGrid>
  </div>
</template>

<script>
import { BvGrid, BvGridItem } from '@/components';
import { boolean, select } from '@storybook/addon-knobs';
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
  name: 'BvGridExampleStory',
  components: { BvGrid, BvGridItem },
  props: {
    colsXs: {
      type: Number,
      default: select('xs row cols number', columnNumber, 3)
    },
    colsSm: {
      type: Number,
      default: select('sm row cols number', columnNumber, null)
    },
    colsMd: {
      type: Number,
      default: select('md row cols number', columnNumber, null)
    },
    colsLg: {
      type: Number,
      default: select('lg row cols number', columnNumber, null)
    },
    isList: {
      type: Boolean,
      default: boolean('Is list type', false)
    }
  }
};
</script>
