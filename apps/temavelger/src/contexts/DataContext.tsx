import React from 'react';
import { createContext } from 'react';
import { ColorScaleContext } from './ColorScaleContext';

/*
Responsible for managing the state of design choices. 
Data is updated by relevant components and passed down to the components that need it.
*/

export const DataContext = createContext({
  colorScaleContext: ColorScaleContext,
  // other contexts
});

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <DataContext.Provider value={{ colorScaleContext: ColorScaleContext }}>
      {children}
    </DataContext.Provider>
  );
};
