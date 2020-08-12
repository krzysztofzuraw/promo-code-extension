/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { FunctionComponent, useState } from 'react';
import { Field } from '../components/field';

type Props = {
  onButtonClick: () => void;
};

export const Edit: FunctionComponent<Props> = ({ onButtonClick }) => {
  const [url, setUrl] = useState('');
  const [code, setCode] = useState('');
  const [date, setDate] = useState('');

  return (
    <div css={styles.container}>
      <form css={styles.form}>
        <Field
          value={url}
          id="url"
          name="url"
          type="url"
          label="URL address"
          onChange={(e) => setUrl(e.target.value)}
        />
        <Field
          value={code}
          id="code"
          name="code"
          label="Promo code"
          onChange={(e) => setCode(e.target.value)}
        />
        <Field
          value={date}
          id="date"
          name="date"
          type="date"
          label="Valid until"
          onChange={(e) => setDate(e.target.value)}
        />
        <footer>
          <div css={styles.buttonsWrapper}>
            <button css={[styles.button, styles.buttonDelete]} onClick={onButtonClick}>
              Delete
            </button>
            <button css={styles.button} onClick={onButtonClick}>
              Confirm
            </button>
          </div>
        </footer>
      </form>
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
  }),
  form: css({ display: 'grid', gridGap: '12px' }),
  buttonsWrapper: css({
    display: 'grid',
    gridGap: '12px',
    gridAutoFlow: 'column',
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
  buttonDelete: css({
    backgroundColor: '#d70022',
    color: '#fffff',
  }),
};
