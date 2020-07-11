import { shallowMount, createLocalVue } from '@vue/test-utils';
import Mixin from '../index';

const localVue = createLocalVue();

describe('link mixin', () => {
  let wrapper: any;

  const propsData = {
    href: 'https://some-url.com'
  };

  const Component = Mixin.extend({
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

  describe('Snapshots', () => {
    describe('to property is defined', () => {
      beforeEach(() => {
        wrapper.setProps({
          to: {
            name: 'some-route'
          }
        });
      });
      it('Should match snapshot', () => {
        expect(wrapper.element).toMatchSnapshot();
      });
    });
    describe('to property is not defined', () => {
      beforeEach(() => {
        wrapper.setProps({
          to: null,
          href: 'https://some-url.com'
        });
      });
      it('Should match snapshot', () => {
        expect(wrapper.element).toMatchSnapshot();
      });
    });
    describe('to and href property are not defined', () => {
      beforeEach(() => {
        wrapper.setProps({
          to: null,
          href: null
        });
      });
      it('Should match snapshot', () => {
        expect(wrapper.element).toMatchSnapshot();
      });
    });
  });

  describe('component property', () => {
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

  describe('target property', () => {
    it('Should return  "_blank" if neWindow property equals true', () => {
      wrapper.setProps({
        newWindow: true
      });
      expect(wrapper.vm.target).toEqual('_blank');
    });
    it('Should return  "_self" if neWindow property equals false', () => {
      wrapper.setProps({
        newWindow: false
      });
      expect(wrapper.vm.target).toEqual('_self');
    });
  });
});
