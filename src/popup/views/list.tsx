/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { FunctionComponent, useEffect, useState } from 'react';
import { EmptyState, ListItem } from '../components';
import { PromoCodeEntry } from '../models';

type Props = {
  onAddButtonClick: () => void;
  onEditButtonClick: (itemId: string) => void;
};

export const List: FunctionComponent<Props> = ({ onAddButtonClick, onEditButtonClick }) => {
  const [listItems, setListItems] = useState<PromoCodeEntry[]>([]);
  useEffect(() => {
    chrome.storage.local.get(['codes'], (items: { [codes: string]: PromoCodeEntry[] }) => {
      if (items.codes) {
        setListItems(items.codes);
      }
    });
  }, []);

  return (
    <div css={styles.container}>
      <ul>
        {listItems.length > 0 ? (
          listItems.map((data) => (
            <ListItem
              {...data}
              key={data.id}
              onEditButtonClick={() => onEditButtonClick(data.id)}
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

List.displayName = 'ListView';

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
