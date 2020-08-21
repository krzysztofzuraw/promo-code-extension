/** @jsx jsx */
import { css, Global, jsx } from '@emotion/core';
import { FunctionComponent, Fragment } from 'react';

export const GlobalStyles: FunctionComponent = ({ children }) => {
  return (
    <Fragment>
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
    </Fragment>
  );
};
