export const replaceHyphensWithSpaces = (inputString: string): string => {
  return inputString.replace(/-/g, " ");
};

export const capitalizeFirstLetterOfEachWordInString = (str: string) => {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
};
