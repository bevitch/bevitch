import { shallowMount, createLocalVue } from '@vue/test-utils';
import BvButton from './BvButton.vue';

const localVue = createLocalVue();

describe('BvButton.vue', () => {
  let wrapper: any;

  const propsData = {
    dark: false,
    size: 'md',
    color: 'primary',
    elevated: true,
    bordered: false,
    disabled: false,
    outlined: true
  };

  beforeEach(() => {
    wrapper = shallowMount(BvButton, {
      localVue,
      propsData,
      stubs: {
        RouterLink: true
      }
    });

    wrapper.vm.$emit = jest.fn();
  });

  it('Should be defined', () => {
    expect(wrapper.is(BvButton)).not.toBeUndefined();
  });

  it('Should be Vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true);
  });

  it('Should match snapshot', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  describe('click method', () => {
    it('Should call $emit method', () => {
      wrapper.vm.click();
      expect(wrapper.vm.$emit).toHaveBeenCalled();
    });
  });

  describe('classes property', () => {
    it('Should include bv-button--dark class if dark property equals true', () => {
      wrapper.setProps({ dark: true });
      const result = wrapper.vm.classes.includes('bv-button--dark');
      expect(result).toEqual(true);
    });
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
