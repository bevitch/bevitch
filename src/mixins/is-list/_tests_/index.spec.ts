import { shallowMount, createLocalVue } from '@vue/test-utils';
import Mixin from '../index';

const localVue = createLocalVue();

describe('is-list mixin', () => {
  let wrapper: any;

  const propsData = {
    isList: true
  };

  const Component = Mixin.extend({
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

  describe('rootTag computed property', () => {
    it('Should return "ul" if isList property equals true', () => {
      wrapper.setProps({
        isList: true
      });
      expect(wrapper.vm.rootTag).toEqual('ul');
    });

    it('Should return "div" if isList property equals false', () => {
      wrapper.setProps({
        isList: false
      });
      expect(wrapper.vm.rootTag).toEqual('div');
    });
  });

  describe('childTag computed property', () => {
    it('Should return "li" if isList property equals true', () => {
      wrapper.setProps({
        isList: true
      });
      expect(wrapper.vm.childTag).toEqual('li');
    });

    it('Should return "div" if isList property equals false', () => {
      wrapper.setProps({
        isList: false
      });
      expect(wrapper.vm.childTag).toEqual('div');
    });
  });
});
