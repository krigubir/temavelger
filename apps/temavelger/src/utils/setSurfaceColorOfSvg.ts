export const setSurfaceColorOfSvg = (
  colorScale: string[],
  chosenColorIndex: number,
) => {
  if (chosenColorIndex < 7) {
    document.documentElement.style.setProperty(
      '--tv-composite-component-color-1',
      colorScale[chosenColorIndex + 1],
    );
    document.documentElement.style.setProperty(
      '--tv-composite-component-color-2',
      colorScale[chosenColorIndex + 2],
    );
  } else {
    document.documentElement.style.setProperty(
      '--tv-composite-component-color-1',
      colorScale[chosenColorIndex - 1],
    );
    document.documentElement.style.setProperty(
      '--tv-composite-component-color-2',
      colorScale[chosenColorIndex - 2],
    );
  }
};
