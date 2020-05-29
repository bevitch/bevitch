import { shallowMount, createLocalVue } from '@vue/test-utils';
import BvButton from './BvButton.vue';

const localVue = createLocalVue();

describe('BvButton.vue', () => {
  let wrapper: any;

  const propsData = {
    light: false,
    dark: true,
    size: 'md',
    color: 'primary',
    hoverText: 'white',
    elevated: true,
    disabled: false,
    outlined: false,
    flat: false
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
    it('Should include bv--theme-light class if light property equals true', () => {
      wrapper.setProps({ light: true });
      const result = wrapper.vm.classes.includes('bv--theme-light');
      expect(result).toEqual(true);
    });
    it('Should include bv--theme-dark class if dark property equals true', () => {
      wrapper.setProps({ dark: true });
      const result = wrapper.vm.classes.includes('bv--theme-dark');
      expect(result).toEqual(true);
    });
    it('Should include bv--color-primary class', () => {
      const result = wrapper.vm.classes.includes('bv--color-primary');
      expect(result).toEqual(true);
    });
    it('Should include bv--hover-color-primary-lighten-1 class', () => {
      const result = wrapper.vm.classes.includes('bv--hover-color-primary-lighten-1');
      expect(result).toEqual(true);
    });
    it('Should include bv--hover-text-color-white class', () => {
      const result = wrapper.vm.classes.includes('bv--hover-text-color-white');
      expect(result).toEqual(true);
    });
    describe('classes property for flat button', () => {
      beforeEach(()=>{ wrapper.setProps({ flat: true });} );
      it('Should include bv--text-color-primary class', () => {
        const result = wrapper.vm.classes.includes('bv--text-color-primary');
        expect(result).toEqual(true);
      });
      it('Should include bv--hover-color-primary class', () => {
        const result = wrapper.vm.classes.includes('bv--hover-color-primary');
        expect(result).toEqual(true);
      });
      it('Should include bv--hover-text-color-white class', () => {
        const result = wrapper.vm.classes.includes('bv--hover-text-color-white');
        expect(result).toEqual(true);
      });
    });
    describe('classes property for outlined button', () => {
      beforeEach(()=>{ wrapper.setProps({ outlined: true });} );
      it('Should include bv--text-color-primary class', () => {
        const result = wrapper.vm.classes.includes('bv--text-color-primary');
        expect(result).toEqual(true);
      });
      it('Should include bv--hover-color-primary class', () => {
        const result = wrapper.vm.classes.includes('bv--hover-color-primary');
        expect(result).toEqual(true);
      });
      it('Should include bv--hover-text-color-white class', () => {
        const result = wrapper.vm.classes.includes('bv--hover-text-color-white');
        expect(result).toEqual(true);
      });
      it('Should include bv--border-color-primary class', () => {
        const result = wrapper.vm.classes.includes('bv--border-color-primary');
        expect(result).toEqual(true);
      });
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
