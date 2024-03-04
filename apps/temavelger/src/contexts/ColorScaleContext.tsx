import { useState } from 'react';
import { createContext } from 'react';

interface ColorScale {
  altColorNumber: number;
  colorScale: string[];
}

interface ColorScaleContextProps {
  colorScales: ColorScale[];
  addColorScale: (colorScale: string[]) => void;
  removeColorScale: (altColorNumber: number) => void;
  updateColorScale: (altColorNumber: number, colorScale: string[]) => void;
}

export const ColorScaleContext = createContext<ColorScaleContextProps>({
  colorScales: [],
  addColorScale: () => {},
  removeColorScale: () => {},
  updateColorScale: () => {},
});

export const ColorScaleProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [colorScales, setColorScales] = useState<ColorScale[]>([]);

  const addColorScale = (colorScale: string[]) => {
    const altColorNumber =
      colorScales[colorScales.length - 1].altColorNumber + 1;
    const newColorScale = { altColorNumber, colorScale: colorScale };

    setColorScales((prevColorScales) => ({
      ...prevColorScales,
      newColorScale,
    }));

    console.log(colorScales);
  };

  const removeColorScale = (altColorNumber: number) => {
    setColorScales((prevColorScales) =>
      prevColorScales.filter(
        (colorScale) => colorScale.altColorNumber !== altColorNumber,
      ),
    );
  };

  const updateColorScale = (altColorNumber: number, colorScale: string[]) => {
    setColorScales((prevColorScales) =>
      prevColorScales.map((prevColorScale) =>
        prevColorScale.altColorNumber === altColorNumber
          ? { ...prevColorScale, colorScale }
          : prevColorScale,
      ),
    );
  };

  return (
    <ColorScaleContext.Provider
      value={{
        colorScales,
        addColorScale,
        removeColorScale,
        updateColorScale,
      }}
    >
      {children}
    </ColorScaleContext.Provider>
  );
};
