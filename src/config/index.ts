import { Options, Locale } from '@/types';
import { pl } from './locales/pl';
import { en } from './locales/en';

const defaultConfig: Options = {
  locale: Locale.PL,
  locales: {
    [Locale.PL]: pl,
    [Locale.EN]: en
  },
  customIcons: {}
};

export default defaultConfig;