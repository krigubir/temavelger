import { useContext } from 'react';
import { ColorScaleContext } from './ColorScaleContext';

export const useColorScale = () => useContext(ColorScaleContext);
