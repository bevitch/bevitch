import { shallowMount, createLocalVue } from '@vue/test-utils';
import Mixin from '../index';

const localVue = createLocalVue();

describe('elevation mixin', () => {
  let wrapper: any;

  const propsData = {
    elevated: true
  };

  const Component = Mixin.extend({
    name: 'ComponentName',
    template: `
      <div
        :elevated="elevated"
        :class="elevationClass"
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
    describe('elevated property equals true', () => {
      beforeEach(() => {
        wrapper.setProps({
          elevated: true
        });
      });
      it('Should match snapshot', () => {
        expect(wrapper.element).toMatchSnapshot();
      });
    });
    describe('elevated property equals false', () => {
      beforeEach(() => {
        wrapper.setProps({
          elevated: false
        });
      });
      it('Should match snapshot', () => {
        expect(wrapper.element).toMatchSnapshot();
      });
    });
  });
});
