/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FunctionComponent } from 'react';

export const EmptyState: FunctionComponent = () => {
  return (
    <div
      css={{
        display: 'grid',
        placeItems: 'center',
        fontSize: '17px',
        fontWeight: 600,
      }}
    >
      <p>There are no promo codes - click button below to add first</p>
    </div>
  );
};
