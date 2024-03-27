import type { State } from '../reducer/reducer';

export const generateColorScaleOptions = (state: State) => {
  const options: React.ReactNode[] = [];
  {
    state.colorScales.map((value, index) =>
      value.colorScale.map((color, colorNuanceIndex) =>
        options.push(
          <option
            key={`${index + 1}-${colorNuanceIndex}`}
            value={JSON.stringify({
              color: color,
              chosenColorIndex: colorNuanceIndex,
              altColorNumber: index,
            })}
          >{`alt${value.altColorNumber} - ${
            (colorNuanceIndex + 1) * 100
          }`}</option>,
        ),
      ),
    );
  }

  return options;
};
