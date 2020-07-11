export interface Dictionary {
}

export interface CustomIcons {
  [key: string]: string;
}

export enum Locale {
  PL = 'pl',
  EN = 'en'
}

export interface Options {
  locale: string;
  locales: {
    [key in string]: Dictionary;
  };
  customIcons: CustomIcons;
}

export interface CustomOptions {
  locale?: string;
  locales?: {
    [key in string]: Dictionary;
  };
  customIcons?: CustomIcons;
}
export interface ColorsSettings {
  dark?: boolean;
  light?: boolean;
  color?: string;
  textColor?: string;
  borderColor?: string;
  hoverColor?: string;
  hoverTextColor?: string;
}

export type CssClass =
  string |
  {
    [key in string]: boolean
  } |
  (
    string |
    {
      [key in string]: boolean
    }
  )[];
