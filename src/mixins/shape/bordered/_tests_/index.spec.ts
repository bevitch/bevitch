import { shallowMount, createLocalVue } from '@vue/test-utils';
import BorderedMixin from '../index';

const localVue = createLocalVue();

describe('BorderedMixin.vue', () => {
  let wrapper: any;

  const propsData = {};

  const Component = BorderedMixin.extend({
    name: 'ComponentName',
    template: `
      <div
        :bordered="bordered"
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
