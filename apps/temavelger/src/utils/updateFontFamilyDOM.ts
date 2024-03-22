export const updateFontFamilyDOM = (fontFamily: string) => {
  document.documentElement.style.setProperty('font-family', fontFamily);
};
