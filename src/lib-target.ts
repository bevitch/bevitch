import defaultConfig from './config';
import { CustomOptions } from './types';

const NeVueComponents = {
  install(Vue: any, options: CustomOptions = {}) {
    Vue.prototype.$neVueComponents = { ...defaultConfig, ...options };
  }
};
  
export default NeVueComponents;

export * from './components';
export * from './directives';
