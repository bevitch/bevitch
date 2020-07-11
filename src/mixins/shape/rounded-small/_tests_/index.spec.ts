import { shallowMount, createLocalVue } from '@vue/test-utils';
import Mixin from '../index';

const localVue = createLocalVue();

describe('rounded-small mixin', () => {
  let wrapper: any;

  const propsData = {
    roundedSmall: true
  };

  const Component = Mixin.extend({
    name: 'ComponentName',
    template: `
      <div
        :rounded-small="roundedSmall"
        :class="roundedSmallClass"
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
    describe('roundedSmall property equals true', () => {
      beforeEach(() => {
        wrapper.setProps({
          roundedSmall: true
        });
      });
      it('Should match snapshot', () => {
        expect(wrapper.element).toMatchSnapshot();
      });
    });
    describe('roundedSmall property equals false', () => {
      beforeEach(() => {
        wrapper.setProps({
          roundedSmall: false
        });
      });
      it('Should match snapshot', () => {
        expect(wrapper.element).toMatchSnapshot();
      });
    });
  });
});
