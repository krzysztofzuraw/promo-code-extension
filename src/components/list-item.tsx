/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { FunctionComponent } from 'react';
import { Field } from './field';

type Props = {
  promoCode: string;
  date: string;
  url: string;
  onEditButtonClick: () => void;
};

export const ListItem: FunctionComponent<Props> = ({ promoCode, date, url, onEditButtonClick }) => {
  return (
    <li css={styles.item}>
      <Field
        value={promoCode}
        readOnly
        type="text"
        title="click icon to copy"
        icon="copy"
        onIconClick={() => navigator.clipboard.writeText(promoCode)}
      />
      <div css={styles.date}>Valid until {date}</div>
      <div css={styles.url}>{url}</div>
      <button css={styles.button} onClick={onEditButtonClick}>
        Edit
      </button>
    </li>
  );
};

const styles = {
  item: css({
    padding: '16px',
    boxShadow: '0 1px 4px rgba(12, 12, 13, 0.1)',
    borderRadius: '4px',
    display: 'grid',
    gridTemplateRows: 'repeat(2, 1fr)',
    gridTemplateColumns: 'minmax(100px, 300px) 200px',
    gridGap: '12px',
  }),
  date: css({
    fontSize: '13px',
    fontWeight: 500,
    alignSelf: 'center',
    justifySelf: 'flex-end',
  }),
  url: css({
    alignSelf: 'center',
    color: '#b1b1b3',
    fontSize: '13px',
    fontWeight: 400,
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  }),
  button: css({
    color: '#0c0c0d',
    height: '32px',
    borderRadius: '2px',
    paddingLeft: '8px',
    paddingRight: '8px',
    border: 'none',
    width: '52px',
    fontSize: '11px',
    fontWeight: 400,
    background: 'rgba(12, 12, 13, 0.1)',
    justifySelf: 'self-end',
  }),
};
