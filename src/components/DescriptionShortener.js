export const excerpt = (str, count) => {
  return str.length > count ? `${str.substring(0, count)} ... ` : str;
};