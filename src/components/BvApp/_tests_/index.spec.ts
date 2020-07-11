import { shallowMount, createLocalVue } from '@vue/test-utils';
import Component from '../Component.vue';

const localVue = createLocalVue();

describe('BvApp', () => {
  let wrapper: any;

  const propsData = {
    dark: true
  };

  beforeEach(() => {
    wrapper = shallowMount(Component, {
      localVue,
      propsData
    });
  });

  it('Should be defined', () => {
    expect(wrapper.is(Component)).not.toBeUndefined();
  });

  it('Should be Vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true);
  });

  it('Should match snapshot', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  describe('themeClass property', () => {
    it('Should return "ne-theme-light" if dark property equals false', () => {
      wrapper.setProps({ dark: false });
      expect(wrapper.vm.themeClass).toEqual('bv--theme-light');
    });
  });
});
