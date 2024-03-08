import { State } from '../../../contexts/ReducerContext';
import {
  getButtonFirstTokens,
  getButtonSecondTokens,
  getFormElementTokens,
} from '../../../data/designTokens';

const generateOutput = (state: State) => {
  let tokenOutput = ':root {\n';

  state.colorScales.map((value) => {
    value.colorScale.map((color, colorIndex) => {
      tokenOutput += `  --fds-brand-alt${value.altColorNumber}-${
        (colorIndex + 1) * 100
      }: ${color.toUpperCase()};\n`;
    });
  });

  const buttonFirstTokenList = getButtonFirstTokens(
    state.buttonFirstData.chosenColorIndex,
  );
  const buttonSecondTokenList = getButtonSecondTokens(
    state.buttonSecondData.chosenColorIndex,
  );
  const formElementsTokenList = getFormElementTokens(
    state.formElementsData.chosenColorIndex,
  );

  for (const token in buttonFirstTokenList) {
    tokenOutput += `  --fds-button-first-${token}: ${state.buttonFirstData.actionColorScale[
      buttonFirstTokenList[token]
    ].toUpperCase()};\n`;
  }
  for (const token in buttonSecondTokenList) {
    tokenOutput += `  --fds-button-second-${token}: ${state.buttonSecondData.actionColorScale[
      buttonSecondTokenList[token]
    ].toUpperCase()};\n`;
  }

  for (const token in formElementsTokenList) {
    tokenOutput += `  --fds-form-element-${token}: ${state.formElementsData.actionColorScale[
      formElementsTokenList[token]
    ].toUpperCase()};\n`;
  }

  return tokenOutput + '}';
};

const copyOutputToClipboard = (state: State) => {
  const codeGeneratorOutput = generateOutput(state);
  navigator.clipboard.writeText(codeGeneratorOutput).then(() => {
    alert('CSS copied to clipboard!');
  });
};

export default copyOutputToClipboard;
