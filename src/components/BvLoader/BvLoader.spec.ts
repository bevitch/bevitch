import { shallowMount, createLocalVue } from '@vue/test-utils';
import BvLoader from '@/components/BvLoader/BvLoader.vue';

const localVue = createLocalVue();

describe('BvLoader.vue', () => {
  let wrapper: any;
  let propsData = {};

  beforeEach(() => {
    wrapper = shallowMount(BvLoader, {
      localVue,
      propsData
    });
  });

  it('Should be defined', () => {
    expect(wrapper.is(BvLoader)).not.toBeUndefined();
  });

  it('Should be Vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true);
  });

  it('Should match snapshot', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
