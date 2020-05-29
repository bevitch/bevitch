import { ColorsSettings } from '@/types';

export const setColorClass = (settings: ColorsSettings): string[] => {
  const classes: string[] = [];
  if (settings.dark) classes.push('bv--theme-dark');
  if (settings.light) classes.push('bv--theme-light');
  if (settings.color) classes.push(`bv--color-${settings.color}`);
  if (settings.textColor) classes.push(`bv--text-color-${settings.textColor}`);
  if (settings.borderColor) classes.push(`bv--border-color-${settings.borderColor}`);
  if (settings.hoverColor) classes.push(`bv--hover-color-${settings.hoverColor}`);
  if (settings.hoverTextColor) classes.push(`bv--hover-text-color-${settings.hoverTextColor}`);
  return classes;
};
