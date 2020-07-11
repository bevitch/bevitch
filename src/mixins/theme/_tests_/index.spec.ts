import { shallowMount, createLocalVue } from '@vue/test-utils';
import Mixin from '../index';

const localVue = createLocalVue();

describe('theme mixin', () => {
  let wrapper: any;

  const propsData = {
    dark: true,
    light: false
  };

  const Component = Mixin.extend({
    name: 'ComponentName',
    template: `
      <div
        :dark="dark"
        :light="light"
        :class="themeClasses"
      />
    `
  });

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

  describe('Snapshots', () => {
    describe('dark property equals true and light property equals false', () => {
      beforeEach(() => {
        wrapper.setProps({
          dark: true,
          light: false
        });
      });
      it('Should match snapshot', () => {
        expect(wrapper.element).toMatchSnapshot();
      });
    });
    describe('dark property equals false and light property equals true', () => {
      beforeEach(() => {
        wrapper.setProps({
          dark: false,
          light: true
        });
      });
      it('Should match snapshot', () => {
        expect(wrapper.element).toMatchSnapshot();
      });
    });
  });
});
