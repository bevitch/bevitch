import { shallowMount, createLocalVue } from '@vue/test-utils';
import ThemeMixin from '../index';

const localVue = createLocalVue();

describe('ThemeMixin.vue', () => {
  let wrapper: any;

  const propsData = {};

  const Component = ThemeMixin.extend({
    name: 'ComponentName',
    template: `
      <div
        :dark="dark"
        :light="light"
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
