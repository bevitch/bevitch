import { shallowMount, createLocalVue } from '@vue/test-utils';
import Mixin from '../index';

const localVue = createLocalVue();

describe('elevation mixin', () => {
  let wrapper: any;

  const propsData = {
    bordered: true,
    elevated: true,
    rounded: true
  };

  const Component = Mixin.extend({
    name: 'ComponentName',
    template: `
      <div
        :bordered="bordered"
        :elevated="elevated"
        :round="round"
        :rounded="rounded"
        :rounded-small="roundedSmall"
        :class="shapeClasses"
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
