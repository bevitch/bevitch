import { shallowMount, createLocalVue } from '@vue/test-utils';
import Mixin from '../index';

const localVue = createLocalVue();

describe('is-list mixin', () => {
  let wrapper: any;

  const propsData = {
    isList: true
  };

  const Component = Mixin.extend({
    name: 'ComponentName',
    template: '<component :is="rootTag" />'
  });

  beforeEach(() => {
    wrapper = shallowMount(Component, {
      localVue,
      propsData
    });

    wrapper.vm.$emit = jest.fn();
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
});
