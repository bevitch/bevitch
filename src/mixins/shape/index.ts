import { CssClass } from '@/types';
import mixins from '@/helpers/mixins';
import ElevationMixin from './elevation';
import BorderedMixin from './bordered';
import RoundMixin from './round';
import RoundedMixin from './rounded';
import RoundedSmallMixin from './rounded-small';

export default mixins(
  ElevationMixin,
  BorderedMixin,
  RoundMixin,
  RoundedMixin,
  RoundedSmallMixin
).extend({
  name: 'ShapeMixin',
  computed: {
    shapeClasses(): CssClass[] {
      return [
        this.elevationClass,
        this.borderedClass,
        this.roundClass,
        this.roundedClass,
        this.roundedSmallClass
      ];
    }
  }
});
