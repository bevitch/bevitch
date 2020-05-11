import { DirectiveOptions } from 'vue';

function validate(binding: any) {
  if (typeof binding.value !== 'function') {
    return false;
  }

  return true;
}

function isServer(vNode: any) {
  return typeof vNode.componentInstance !== 'undefined' && vNode.componentInstance.$isServer;
}

const ClickOutside: DirectiveOptions = {
  bind: function(el: any, binding, vNode) {
    if (!validate(binding)) return;
    function handler(e: any) {
      if (!vNode.context) return;
      var elements = e.path || (e.composedPath && e.composedPath());
      elements && elements.length > 0 && elements.unshift(e.target);
      if (el.contains(e.target)) return;
      el.__vueClickOutside__.callback(e);
    }
    el.__vueClickOutside__ = {
      handler: handler,
      callback: binding.value
    };
    !isServer(vNode) && document.addEventListener('click', handler);
  },

  update: function(el: any, binding) {
    if (validate(binding)) el.__vueClickOutside__.callback = binding.value;
  },

  unbind: function(el: any, _binding, vNode) {
    !isServer(vNode) && document.removeEventListener('click', el.__vueClickOutside__.handler);
    delete el.__vueClickOutside__;
  }
};

export default ClickOutside;
