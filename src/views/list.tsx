/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { FunctionComponent } from 'react';
import { EmptyState, ListItem } from '../components';

type Props = {
  onAddButtonClick: () => void;
  onEditButtonClick: () => void;
};

export const List: FunctionComponent<Props> = ({ onAddButtonClick, onEditButtonClick }) => {
  const MOCKED_LIST_DATA = [{ promoCode: 'lorem', date: '12/03/2020', url: 'https://www.onet.pl' }];
  return (
    <div css={styles.container}>
      <ul>
        {MOCKED_LIST_DATA.length > 0 ? (
          MOCKED_LIST_DATA.map((data) => (
            <ListItem
              {...data}
              key={`${data.promoCode}-${data.date}-${data.url}`}
              onEditButtonClick={onEditButtonClick}
            />
          ))
        ) : (
          <EmptyState />
        )}
      </ul>
      <footer>
        <button css={styles.button} onClick={onAddButtonClick}>
          Add new
        </button>
      </footer>
    </div>
  );
};

const styles = {
  container: css({
    display: 'grid',
    gridTemplateRows: '1fr 52px',
    height: 'calc(100vh - 32px)',
    padding: '16px',
    footer: {
      display: 'grid',
      placeItems: 'center right',
      gridAutoFlow: 'column',
    },
    ul: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
    },
  }),
  button: css({
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
  }),
};
