export const getmovieurl = (obj) => {
  const lowercaseStr = obj?.original_title.toLowerCase();
  // Remove all special characters and spaces
  const cleanedStr = lowercaseStr.replace(/[^\w\s]|_/g, "").replace(/\s+/g, "");
  // Add hyphen after every word
  const hyphenatedStr = cleanedStr.replace(/\s/g, "-");
  const url = `/movie/${obj?.id}-${hyphenatedStr}`;
  return url;
};
