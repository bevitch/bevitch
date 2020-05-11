export interface Dictionary {
    search: {
        search: string;
        noMatchingItems: string;
    }
}

export interface CustomIcons {
    [key: string]: string;
}

export interface Options {
    dictionary: Dictionary,
    customIcons: CustomIcons
}

export interface CustomOptions {
    dictionary?: Dictionary,
    customIcons?: CustomIcons
}

export interface ColorsSettings {
  dark?: boolean;
  light?: boolean;
  color?: string | null;
  textColor?: string | null;
  borderColor?: string | null;
  hoverBgColor?: string | null;
}
