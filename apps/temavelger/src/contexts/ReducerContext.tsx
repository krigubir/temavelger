import { createContext, useReducer } from 'react';
import reducer, { Action, State } from '../reducer/reducer';
import colorPickerData from '../data/colorPickerData';

// create context
interface ReducerContextProps {
  state: State;
  dispatch: React.Dispatch<Action>;
}

export const ReducerContext = createContext<ReducerContextProps>({
  state: { colorPickerList: [], colorScales: [] },
  dispatch: () => {},
});

const defaultState = {
  colorPickerList: colorPickerData,
  colorScales: [], // add default state
  actionColorScales: [],
  borderRadius: [],
  fontFamily: [],
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
