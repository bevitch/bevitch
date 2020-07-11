import { shallowMount, createLocalVue } from '@vue/test-utils';
import IsListMixin from '../index';

const localVue = createLocalVue();

describe('IsListMixin.vue', () => {
  let wrapper: any;

  const propsData = {
    isList: true
  };

  const Component = IsListMixin.extend({
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
