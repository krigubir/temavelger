import {
  getColorPickerBrandTokens,
  getSurfaceFirstColorTokens,
  getSurfaceSecondColorTokens,
  getSurfaceThirdColorTokens,
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
};

export const updateSurfaceColorTokens = (
  colorScale: string[],
  altColorNumber: number,
  chosenColorIndex: number,
) => {
  if (altColorNumber === 1) {
    const surfaceTokens = getSurfaceFirstColorTokens(chosenColorIndex);

    if (chosenColorIndex === 8) {
      for (const token in surfaceTokens) {
        document.documentElement.style.setProperty(token, colorScale[8]);
      }
      return;
    }

    for (const token in surfaceTokens) {
      document.documentElement.style.setProperty(
        token,
        colorScale[surfaceTokens[token]],
      );
    }
  }

  if (altColorNumber === 2) {
    const surfaceTokens = getSurfaceSecondColorTokens(chosenColorIndex);

    if (chosenColorIndex === 8) {
      for (const token in surfaceTokens) {
        document.documentElement.style.setProperty(token, colorScale[8]);
      }
      return;
    }

    for (const token in surfaceTokens) {
      document.documentElement.style.setProperty(
        token,
        colorScale[surfaceTokens[token]],
      );
    }
  }

  if (altColorNumber === 3) {
    const surfaceTokens = getSurfaceThirdColorTokens(chosenColorIndex);

    if (chosenColorIndex === 8) {
      for (const token in surfaceTokens) {
        document.documentElement.style.setProperty(token, colorScale[8]);
      }
      return;
    }

    for (const token in surfaceTokens) {
      document.documentElement.style.setProperty(
        token,
        colorScale[surfaceTokens[token]],
      );
    }
  }
};

// change the color of the text in the components
// document.documentElement.style.setProperty(
//   '--fds-semantic-text-neutral-default',
//   checkColorContrast(newColorScale[1]) ? 'black' : 'white',
// );
