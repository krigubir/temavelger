import React from 'react';
import { createContext, useState } from 'react';

interface ColorScaleContextProps {
  colorScales: Record<number, string[]>;
  addColorScale: (altColorNumber: number, colorScale: string[]) => void;
}

export const ColorScaleContext = createContext<ColorScaleContextProps>({
  colorScales: {},
  addColorScale: () => {},
});

export const ColorScaleProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [colorScales, setColorScales] = useState<Record<number, string[]>>({});

  const addColorScale = (altColorNumber: number, colorScale: string[]) => {
    setColorScales((prevColorScales) => ({
      ...prevColorScales,
      [altColorNumber]: colorScale,
    }));
  };

  return (
    <ColorScaleContext.Provider value={{ colorScales, addColorScale }}>
      {children}
    </ColorScaleContext.Provider>
  );
};
