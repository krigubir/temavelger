export const formatFontFamilyInput = (fontFamily: string) => {
  const fontFamilyList: string[] = fontFamily.split(' ');

  // Fjerner ugyldige tegn og mellomrom fra hver font
  const formattedFontFamilyList = fontFamilyList.map((font) =>
    font.replace(/[^a-zA-Z\s-]/g, '').trim(),
  );

  const validFontFamily: string = formattedFontFamilyList
    .filter((font) => font !== '')
    .map((font) => {
      if (
        font === 'sans-serif' ||
        font === 'serif' ||
        font === 'monospace' ||
        font === 'system-ui' ||
        font === 'sans'
      ) {
        return font;
      }
      return `'${font}'`;
    })
    .join(', ');

  return validFontFamily;
};
