const altColorNumberMap = ['first', 'second', 'third'];

export const updateColorTokens = (
  colorScale: string[],
  altColorNumber: number,
) => {
  // update the brand-alt colors
  for (let i = 0; i < colorScale.length; i++) {
    document.documentElement.style.setProperty(
      `--fds-brand-alt${altColorNumber}-${(i + 1) * 100}`,
      colorScale[i],
    );
  }

  // change semantic-surface color
  document.documentElement.style.setProperty(
    `--fds-semantic-surface-${altColorNumberMap[altColorNumber - 1]}-light`,
    colorScale[2],
  );

  // change semantic-surface-hover color (accordion)
  document.documentElement.style.setProperty(
    `--fds-semantic-surface-${
      altColorNumberMap[altColorNumber - 1]
    }-light-hover`,
    colorScale[3],
  );

  // change the color of the text in the components
  // document.documentElement.style.setProperty(
  //   '--fds-semantic-text-neutral-default',
  //   checkColorContrast(newColorScale[1]) ? 'black' : 'white',
  // );
};
