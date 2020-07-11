import { shallowMount, createLocalVue } from '@vue/test-utils';
import ElevationMixin from '../index';

const localVue = createLocalVue();

describe('ElevationMixin.vue', () => {
  let wrapper: any;

  const propsData = {};

  const Component = ElevationMixin.extend({
    name: 'ComponentName',
    template: `
      <div
        :elevated="elevated"
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

  it('Should match snapshot', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
