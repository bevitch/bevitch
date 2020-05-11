export const debounce: (...params: any[]) => any = function (func: (...params: any[]) => any, wait:number, immediate: boolean) {
  let timeout: number | undefined;
  return function(this: any) {
    let context = this, args:any = arguments;
    let later = function() {
      timeout = undefined;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};
