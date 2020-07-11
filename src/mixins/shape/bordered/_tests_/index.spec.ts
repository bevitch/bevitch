import { shallowMount, createLocalVue } from '@vue/test-utils';
import Mixin from '../index';

const localVue = createLocalVue();

describe('bordered mixin', () => {
  let wrapper: any;

  const propsData = {
    bordered: true
  };

  const Component = Mixin.extend({
    name: 'ComponentName',
    template: `
      <div
        :bordered="bordered"
        :class="borderedClass"
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
    describe('bordered property equals true', () => {
      beforeEach(() => {
        wrapper.setProps({
          bordered: true
        });
      });
      it('Should match snapshot', () => {
        expect(wrapper.element).toMatchSnapshot();
      });
    });
    describe('bordered property equals false', () => {
      beforeEach(() => {
        wrapper.setProps({
          bordered: false
        });
      });
      it('Should match snapshot', () => {
        expect(wrapper.element).toMatchSnapshot();
      });
    });
  });
});
