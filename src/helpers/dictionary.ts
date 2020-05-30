import { Dictionary, Locale, Options } from '@/types';
import defaultOptions from '@/config';


export const getDictionary = (options: Options = defaultOptions): Dictionary => {
  const locale = options.locale;
  return options.locales[locale] || options.locales[Locale.EN];
};