import chroma from 'chroma-js';

const checkColorContrast = (color: string): boolean => {
  const rgb = chroma(color).rgb();
  const luminance = (0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]) / 255;
  return luminance > 0.6;
};

export default checkColorContrast;
