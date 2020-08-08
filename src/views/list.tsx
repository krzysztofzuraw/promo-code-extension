/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { FunctionComponent } from 'react';
import { EmptyState, ListItem } from '../components';

export const ListView: FunctionComponent = () => {
  const MOCKED_LIST_DATA = [{ promoCode: 'lorem', date: '12/03/2020', url: 'https://www.onet.pl' }];
  return (
    <div css={styles.container}>
      <ul>
        {MOCKED_LIST_DATA.length > 0 ? (
          MOCKED_LIST_DATA.map((data) => <ListItem {...data} />)
        ) : (
          <EmptyState />
        )}
      </ul>
      <footer>
        <button>Add new</button>
      </footer>
    </div>
  );
};

const styles = {
  container: css({
    display: 'grid',
    gridTemplateRows: '1fr 52px',
    width: '100%',
    height: '100%',
    padding: '16px',
    footer: {
      display: 'grid',
      placeItems: 'center right',
      gridAutoFlow: 'column',
    },
    button: {
      height: '32px',
      borderRadius: '2px',
      paddingLeft: '8px',
      paddingRight: '8px',
      border: 'none',
      minWidth: '132px',
      fontSize: '11px',
      fontWeight: 400,
      color: '#ffffff',
      background: '#0060df',
    },
    ul: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
    },
  }),
};
