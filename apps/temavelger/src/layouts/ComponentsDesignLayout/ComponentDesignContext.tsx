import { createContext, useContext } from 'react';

export const initialDesignTokens = {
  '--fds-semantic-surface-first-light': '#ffffff',
  '--fds-semantic-surface-second-light': '#ffffff',
  '--fds-semantic-surface-third-light': '#ffffff',
};

export const DesignTokenContext = createContext({
  designTokens: initialDesignTokens,
  setTokenValue: (_token: string, _value: string) => {},
});

export const useDesignTokenContext = () => useContext(DesignTokenContext);
