import path from 'path';

//
export function hashCode(input) {
  let hash = 0;
  for (let i = 0; i < input.length; i += 1) {
    const chr = input.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0;
  }
  return (hash + 2147483648).toString(16);
}

/**
 *  @url https://github.com/madyankin/postcss-modules#generating-scoped-names
 * @param {string} name
 * @param {string} fileNames
 * @returns
 */
export function generateScopedName(name, fileNames) {
  const componentName = path.basename(fileNames, '.module.css').toLowerCase();

  const filePaths = path.relative('.', fileNames).replace(/\\/g, '/');
  const hash = hashCode(filePaths);

  return `fds-${componentName}-${name}-${hash}`;
}
