import chroma from 'chroma-js';

/*
  This function generates a color scale based on the HSL color model.
  @param baseColor: string - The base color to generate the scale from.
  @param numberOfShades: number - The number of shades to generate.
*/

const generateColorScaleHSL = (
  baseColor: string,
  numberOfShades: number,
): string[] => {
  const colorScale: string[] = [];
  const [hue, saturation, luminance] = chroma(baseColor).hsl();
  const lightnessStep = 0.1;

  for (let i = Math.floor(numberOfShades / 2); i > 0; i--) {
    const adjustedLuminanceLight = luminance + lightnessStep * i;
    colorScale.push(chroma.hsl(hue, saturation, adjustedLuminanceLight).hex());
  }

  colorScale.push(baseColor);

  for (let i = 0; i < Math.floor(numberOfShades / 2); i++) {
    const adjustedLuminanceDark = luminance - lightnessStep * (i + 1);
    colorScale.push(chroma.hsl(hue, saturation, adjustedLuminanceDark).hex());
  }

  return colorScale;
};

export default generateColorScaleHSL;
