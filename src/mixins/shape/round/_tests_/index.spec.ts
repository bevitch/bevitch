import { shallowMount, createLocalVue } from '@vue/test-utils';
import Mixin from '../index';

const localVue = createLocalVue();

describe('round mixin', () => {
  let wrapper: any;

  const propsData = {
    round: true
  };

  const Component = Mixin.extend({
    name: 'ComponentName',
    template: `
      <div
        :round="round"
        :class="roundClass"
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
    describe('round property equals true', () => {
      beforeEach(() => {
        wrapper.setProps({
          round: true
        });
      });
      it('Should match snapshot', () => {
        expect(wrapper.element).toMatchSnapshot();
      });
    });
    describe('round property equals false', () => {
      beforeEach(() => {
        wrapper.setProps({
          round: false
        });
      });
      it('Should match snapshot', () => {
        expect(wrapper.element).toMatchSnapshot();
      });
    });
  });
});
