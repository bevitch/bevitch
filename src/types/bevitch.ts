import Vue, { VueConstructor } from 'vue';
import { Options } from './index';

declare module 'vue/types/vue' {

  interface Vue {
      $beVitch: Options;
  }

  interface VueConstructor {
      $beVitch: Options;
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
      $beVitch?: Options;
  }
}