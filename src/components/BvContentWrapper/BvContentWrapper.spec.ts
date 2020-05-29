import { shallowMount, createLocalVue } from '@vue/test-utils';
import BvContentWrapper from './BvContentWrapper.vue';

const localVue = createLocalVue();

describe('BvButton.vue', () => {
  let wrapper: any;

  const propsData = {
    fullWidth: true,
    withPaddingsh: true
  };

  beforeEach(() => {
    wrapper = shallowMount(BvContentWrapper, {
      localVue,
      propsData
    });
  });

  it('Should be defined', () => {
    expect(wrapper.is(BvContentWrapper)).not.toBeUndefined();
  });

  it('Should be Vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true);
  });

  it('Should match snapshot', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
