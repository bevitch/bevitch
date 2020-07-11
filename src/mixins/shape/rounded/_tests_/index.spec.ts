import { shallowMount, createLocalVue } from '@vue/test-utils';
import Mixin from '../index';

const localVue = createLocalVue();

describe('rounded mixin', () => {
  let wrapper: any;

  const propsData = {
    rounded: true
  };

  const Component = Mixin.extend({
    name: 'ComponentName',
    template: `
      <div
        :rounded="rounded"
        :class="roundedClass"
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
    describe('rounded property equals true', () => {
      beforeEach(() => {
        wrapper.setProps({
          rounded: true
        });
      });
      it('Should match snapshot', () => {
        expect(wrapper.element).toMatchSnapshot();
      });
    });
    describe('rounded property equals false', () => {
      beforeEach(() => {
        wrapper.setProps({
          rounded: false
        });
      });
      it('Should match snapshot', () => {
        expect(wrapper.element).toMatchSnapshot();
      });
    });
  });
});
