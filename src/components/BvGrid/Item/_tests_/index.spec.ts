import { shallowMount, createLocalVue } from '@vue/test-utils';
import Component from '../Component.vue';

const localVue = createLocalVue();

describe('BvGridItem - as simple grid list item', () => {
  let wrapper: any;
  let propsData = {
    isList: true
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

describe('BvGridItem - as combined grid item', () => {
  let wrapper: any;
  let propsData = {
    colsXs: 2,
    colsSm: 2,
    colsMd: 2,
    colsLg: 2
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
