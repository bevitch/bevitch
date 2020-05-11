import defaultConfig from '@/config';

export const dictionary = (parent: any, stringifiedItems: string): string | null => {

  const customDictionary = parent.$bevitch  ? parent.$bevitch.dictionary : null;
  const getPropertyByPath = (path: string, obj: any) => path.split('.').reduce((p,c)=> p && p[c]||null, obj);
  return customDictionary ? getPropertyByPath(stringifiedItems, customDictionary) : getPropertyByPath(stringifiedItems, defaultConfig.dictionary);
};