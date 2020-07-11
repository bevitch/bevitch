import { shallowMount, createLocalVue } from '@vue/test-utils';
import RoundMixin from '../index';

const localVue = createLocalVue();

describe('RoundMixin.vue', () => {
  let wrapper: any;

  const propsData = {};

  const Component = RoundMixin.extend({
    name: 'ComponentName',
    template: `
      <div
        :round="round"
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
