// const generateOutput = () => {
//   let tokenOutput = ':root {\n';
//   Object.entries(colorScales).forEach(([key, value]) => {
//     value.forEach((color, index) => {
//       tokenOutput += `  --fds-brand-alt${key}-${
//         (index + 1) * 100
//       }: ${color};\n`;
//     });
//     tokenOutput += '\n';
//   });
//   tokenOutput += '}';
//   return tokenOutput;
// };

// const copyOutputToClipboard = () => {
//   const codeGeneratorOutput = generateTokenOutput();
//   navigator.clipboard.writeText(codeGeneratorOutput).then(() => {
//     alert('CSS copied to clipboard!');
//   });
// };
