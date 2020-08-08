/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { FunctionComponent } from 'react';
import { Field } from './field';

export const ListItem: FunctionComponent<{ promoCode: string; date: string; url: string }> = ({
  promoCode,
  date,
  url,
}) => {
  return (
    <li css={styles.item}>
      <Field value={promoCode} readOnly type="text" title="click icon to copy" icon="copy" />
      <div css={styles.date}>Valid until {date}</div>
      <div css={styles.url}>{url}</div>
      <button css={styles.button}>Edit</button>
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
    background: 'rgba(12, 12, 13, 0.1)',
  }),
};
