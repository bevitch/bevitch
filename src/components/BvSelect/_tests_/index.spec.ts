import { shallowMount, createLocalVue } from '@vue/test-utils';
import Component from '../Component.vue';

const localVue = createLocalVue();

describe('BvSelect', () => {
  let wrapper: any;

  const propsData = {
    id: 1,
    value: '',
    label: 'test slect',
    options: ['Option 1', 'Option 2', 'Option 3']
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
});
