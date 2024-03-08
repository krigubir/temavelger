## 📖 About Themebuilder

Uncertain about how the Designsystemet can adapt to your needs, or curious about the possible customizations? **Temavelgeren** is a tool for those who want to utilize Designsystemet with their own brand. This tool will allow you to explore various adjustments such as brand-color, action-color, border-radius settings, and more. Temavelgeren enables you to see how your choices will affect Designsystemets components in real-time. Subsequently, a CSS file is generated which you can easily incorporate into your own project.

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
