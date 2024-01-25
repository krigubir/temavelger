import chroma from 'chroma-js';
import styles from './ColorGenerator.module.css';

interface ColorGeneratorProps {
  baseColor: string;
}

const ColorGenerator: React.FC<ColorGeneratorProps> = ({ baseColor }) => {
  const generateColorScale = () => {
    const colorScale = chroma.scale([
      chroma(baseColor).brighten(3),
      chroma(baseColor).brighten(2),
      chroma(baseColor).brighten(1),
      chroma(baseColor).brighten(0.5),
      baseColor,
      chroma(baseColor).darken(0.5),
      chroma(baseColor).darken(1),
      chroma(baseColor).darken(2),
      chroma(baseColor).darken(3),
    ]);

    return colorScale.colors(9);
  };
  return (
    <div className={styles.colorGenerator}>
      {generateColorScale().map((color: string, index: number) => (
        <div
          key={index}
          className={styles.colorShade}
          style={{ backgroundColor: color }}
        ></div>
      ))}
    </div>
  );
};
export default ColorGenerator;
