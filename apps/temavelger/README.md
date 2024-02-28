# Temavelger

Usikker på hvordan designsystemet lar seg tilpasse ditt behov, eller nysgjerrig på hvilke tilpasninger som er mulig? Temavelgeren er et verktøy for deg som ønsker å ta i bruk designsystemet. Verktøyet vil gi deg muligheten til å utforske en rekke tilpasninger av felles komponenter som brand-farger, action-farger, border-radius innstillinger og mer. Temavelgeren gir deg muligheten til å se hvordan dine valg vil påvirke designsystemets komponenter i real-time. Deretter genereres det en css-fil som du enkelt kan ta i bruk i ditt eget prosjekt med dine egne valg. 


## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
