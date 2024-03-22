import { createContext, useReducer } from 'react';
import reducer from '../reducer/reducer';
import colorPickerData from '../data/colorPickerData';
import { ColorPicker } from '../components/ColorPicker/ColorPicker';

/*
  Responsible for defining the state-interface and distribute both the state and
  the reducer to child components. 
*/

interface ColorScale {
  altColorNumber: number;
  colorScale: string[];
}

interface ActionColorData {
  chosenColorIndex: number;
  actionColorScale: string[];
}

export type State = {
  colorPickerList: ColorPicker[];
  colorScales: ColorScale[];
  buttonFirstData: ActionColorData;
  buttonSecondData: ActionColorData;
  formElementsData: ActionColorData;
  borderRadiusData: number;
};

export type Action = {
  type: string;
  payload?: unknown;
};

// create context
interface ReducerContextProps {
  state: State;
  dispatch: React.Dispatch<Action>;
}

export const ReducerContext = createContext<ReducerContextProps>({
  state: {
    colorPickerList: [],
    colorScales: [],
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
  },
  dispatch: () => {},
});

const defaultState = {
  colorPickerList: colorPickerData,
  colorScales: [],
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
};

// create reducer provider
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
