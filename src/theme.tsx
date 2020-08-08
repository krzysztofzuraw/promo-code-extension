import { ThemeProvider as EmotonThemeProvider } from 'emotion-theming';
import React, { FunctionComponent } from 'react';

const theme = {};

export const ThemeProvider: FunctionComponent = ({ children }) => {
  return <EmotonThemeProvider theme={theme}>{children}</EmotonThemeProvider>;
};
