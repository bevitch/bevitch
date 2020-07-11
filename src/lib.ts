import defaultConfig from './config';
import { CustomOptions } from './types';

const beVitch = {
  install(Vue: any, options: CustomOptions = {}) {
    Vue.prototype.$beVitch = { ...defaultConfig, ...options };
  }
};
  
export default beVitch;

export * from './components';
export * from './directives';
