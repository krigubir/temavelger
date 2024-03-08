import {
  getColorPickerBrandTokens,
  getColorPickerSemanticTokens,
} from '../data/designTokens';

/*
  This function updates the color tokens in the DOM
  @param colorScale
  @param altColorNumber
 */

export const updateColorTokens = (
  colorScale: string[],
  altColorNumber: number,
) => {
  // update the brand-alt colors
  for (let i = 0; i < colorScale.length; i++) {
    const { brandColor } = getColorPickerBrandTokens(altColorNumber, i);
    document.documentElement.style.setProperty(brandColor, colorScale[i]);
  }

  // update the surface colors
  const { surfaceColor, surfaceColorHover } =
    getColorPickerSemanticTokens(altColorNumber);
  document.documentElement.style.setProperty(surfaceColor, colorScale[2]);
  document.documentElement.style.setProperty(surfaceColorHover, colorScale[5]);

  // change the color of the text in the components
  // document.documentElement.style.setProperty(
  //   '--fds-semantic-text-neutral-default',
  //   checkColorContrast(newColorScale[1]) ? 'black' : 'white',
  // );
};
