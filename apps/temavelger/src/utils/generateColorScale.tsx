import chroma from 'chroma-js';

const generateColorScale = (baseColor: string): string[] => {
  const colorScale = chroma.scale([
    chroma(baseColor).brighten(2),
    chroma(baseColor).brighten(1.6),
    chroma(baseColor).brighten(0.8),
    chroma(baseColor).brighten(0.4),
    baseColor,
    chroma(baseColor).darken(0.4),
    chroma(baseColor).darken(0.8),
    chroma(baseColor).darken(1.6),
    chroma(baseColor).darken(2),
  ]);

  return colorScale.colors(9);
};

export default generateColorScale;
