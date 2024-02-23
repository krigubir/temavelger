import styles from './ColorGenerator.module.css';

interface ColorGeneratorProps {
  colorScale: string[];
}

const ColorGenerator: React.FC<ColorGeneratorProps> = ({ colorScale }) => {
  return (
    <div className={styles.colorGenerator}>
      {colorScale.map((color: string, index: number) => (
        <div
          key={index}
          className={styles.colorGeneratorContainer}
        >
          <div
            className={
              index === 4 ? styles.highlightedColorBox : styles.colorBox
            }
            style={{ backgroundColor: color }}
          ></div>
          <div className={styles.colorNumber}>{`${index + 1}00`}</div>
        </div>
      ))}
    </div>
  );
};
export default ColorGenerator;
