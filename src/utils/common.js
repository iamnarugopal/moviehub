export const getmovieurl = (obj) => {
  const lowercaseStr1 = !!obj?.title
    ? obj?.title?.toLowerCase()
    : obj?.original_title?.toLowerCase();
  const lowercaseStr2 = !!obj?.name
    ? obj?.name?.toLowerCase()
    : obj?.original_name?.toLowerCase();

  const lowercaseStr = lowercaseStr1 || lowercaseStr2;

  // Remove all special characters and spaces
  const cleanedStr = lowercaseStr
    ?.replace(/[^\w\s]|_/g, "")
    .replace(/\s+/g, "-");
  // Add hyphen after every word
  const hyphenatedStr = cleanedStr?.replace(/\s/g, "-");
  const url = `/${!!lowercaseStr1 ? "movie" : "tv"}/${
    obj?.id
  }-${hyphenatedStr}`;
  return url;
};
