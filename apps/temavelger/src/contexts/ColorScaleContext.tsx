import React from 'react';
import { createContext, useState } from 'react';

interface ColorScaleContextProps {
  colorScales: Record<number, string[]>;
  updateColorScale: (altColorNumber: number, colorScale: string[]) => void;
}

export const ColorScaleContext = createContext<ColorScaleContextProps>({
  colorScales: {},
  updateColorScale: () => {},
});

export const ColorScaleProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [colorScales, setColorScales] = useState<Record<number, string[]>>({});

  const updateColorScale = (altColorNumber: number, colorScale: string[]) => {
    setColorScales((prevColorScales) => ({
      ...prevColorScales,
      [altColorNumber]: colorScale,
    }));
  };

  return (
    <ColorScaleContext.Provider value={{ colorScales, updateColorScale }}>
      {children}
    </ColorScaleContext.Provider>
  );
};
