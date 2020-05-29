import Vue, { VueConstructor } from 'vue';
import { Options } from './index';

declare module 'vue/types/vue' {

  interface Vue {
      $neVueComponents: Options;
  }

  interface VueConstructor {
      $neVueComponents: Options;
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
      $neVueComponents?: Options;
  }
}