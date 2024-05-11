import { createContext, useReducer } from 'react';

import reducer from '../reducer/reducer';
import type { ColorPicker } from '../components/DesignMenuTools/ColorPicker/ColorPicker';
import { defaultState } from '../data/defaultStateData';

/*
  This file contains the following functions and objects:
  - State: an object containing the data that is shared between components
  - Action: an object containing the type of action that is dispatched to the reducer function
  - ReducerContextProps: an object containing the state and dispatch function
  - ReducerContext: a context object containing the state and dispatch function
  - ReducerProvider: a wrapper component necessary to distribute the state and dispatch function to child components
*/

interface ActionColorData {
  chosenColorIndex: number;
  actionColorScale: string[];
}

interface SurfaceColor {
  chosenColorIndex: number;
  altColorNumber: number;
}

export type State = {
  colorPickerList: ColorPicker[];
  surfaceColorData: SurfaceColor[];
  fontColor: string;
  buttonFirstData: ActionColorData;
  buttonSecondData: ActionColorData;
  formElementsData: ActionColorData;
  borderRadiusData: number;
  fontFamilyData: string;
};

export type Action = {
  type: string;
  payload?: unknown;
};

interface ReducerContextProps {
  state: State;
  dispatch: React.Dispatch<Action>;
}

// Creates a context object with containing the state and dispatch function
export const ReducerContext = createContext<ReducerContextProps>({
  state: {
    colorPickerList: [],
    surfaceColorData: [],
    fontColor: '',
    buttonFirstData: {
      chosenColorIndex: 0,
      actionColorScale: [],
    },
    buttonSecondData: {
      chosenColorIndex: 0,
      actionColorScale: [],
    },
    formElementsData: {
      chosenColorIndex: 0,
      actionColorScale: [],
    },
    borderRadiusData: 0,
    fontFamilyData: '',
  },
  dispatch: () => {},
});

/*
  ReducerProvider is a wrapper component necessary to distribute the state and dispatch
  function to child components. This wrapper component is used in the App.tsx 
*/
export const ReducerProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <ReducerContext.Provider value={{ state, dispatch }}>
      {children}
    </ReducerContext.Provider>
  );
};
