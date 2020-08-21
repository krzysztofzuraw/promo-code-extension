/** @jsx jsx */
import { css, Global, jsx } from '@emotion/core';
import { ThemeProvider as EmotonThemeProvider } from 'emotion-theming';
import { FunctionComponent } from 'react';

const theme = {};

export const ThemeProvider: FunctionComponent = ({ children }) => {
  return (
    <EmotonThemeProvider theme={theme}>
      <Global
        styles={css({
          body: {
            minHeight: '350px',
            minWidth: '500px',
            margin: 0,
            padding: 0,
          },
        })}
      />
      {children}
    </EmotonThemeProvider>
  );
};
