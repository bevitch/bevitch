import { shallowMount, createLocalVue } from '@vue/test-utils';
import BvGrid from '@/components/BvGrid/BvGrid.vue';

const localVue = createLocalVue();

describe('BvGrid.vue as simple grid list', () => {
  let wrapper: any;
  let propsData = {
    colsXs: 2,
    colsSm: 2,
    colsMd: 2,
    colsLg: 2,
    isList: true
  };

  beforeEach(() => {
    wrapper = shallowMount(BvGrid, {
      localVue,
      propsData
    });
  });

  it('Should be defined', () => {
    expect(wrapper.is(BvGrid)).not.toBeUndefined();
  });

  it('Should be Vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true);
  });

  it('Should match snapshot', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});

describe('BvGrid.vue as combined grid', () => {
  let wrapper: any;
  let propsData = {
    isList: false
  };

  beforeEach(() => {
    wrapper = shallowMount(BvGrid, {
      localVue,
      propsData
    });
  });

  it('Should be defined', () => {
    expect(wrapper.is(BvGrid)).not.toBeUndefined();
  });

  it('Should be Vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true);
  });

  it('Should match snapshot', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});

