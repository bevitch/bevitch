import { shallowMount, createLocalVue } from '@vue/test-utils';
import LinkMixin from '../index';

const localVue = createLocalVue();

describe('LinkMixin.vue', () => {
  let wrapper: any;

  const propsData = {};

  const Component = LinkMixin.extend({
    name: 'ComponentName',
    template: `
      <component
        :is="component || 'button'"
        :to="to"
        :href="href"
        :target="target"
      />
    `
  });

  beforeEach(() => {
    wrapper = shallowMount(Component, {
      localVue,
      propsData,
      stubs: {
        RouterLink: true
      }
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

  describe('Component property', () => {
    it('Should be <a> tag when href is provded', () => {
      wrapper.setProps({
        href: 'linkUrl'
      });
      expect(wrapper.vm.component).toEqual('a');
    });
    it('Should be <RouterLink> tag when to is provded', () => {
      wrapper.setProps({
        to: 'linkUrl'
      });
      expect(wrapper.vm.component).toEqual('RouterLink');
    });
  });
});
