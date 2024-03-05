import { useContext } from 'react';
import { ReducerContext } from './ReducerContext';

export const useReducerContext = () => useContext(ReducerContext);
