/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { FunctionComponent, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Field } from '../components/field';
import { PromoCodeEntry } from '../models';

type Props = {
  closeView: () => void;
};

export const Add: FunctionComponent<Props> = ({ closeView }) => {
  const [url, setUrl] = useState('');
  const [code, setCode] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const url = new URL(tabs[0].url ?? '');
      setUrl(url.origin);
    });
  }, []);

  const savePromoCodeToStorage = () => {
    chrome.storage.local.get(['codes'], (items) => {
      const promoCode: PromoCodeEntry = { id: uuidv4(), url, code, date };
      if (items.codes) {
        chrome.storage.local.set({ codes: [...items.codes, promoCode] });
      } else {
        chrome.storage.local.set({ codes: [promoCode] });
      }
    });
  };

  return (
    <div css={styles.container}>
      <form
        css={styles.form}
        onSubmit={() => {
          savePromoCodeToStorage();
          closeView();
        }}
      >
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
            <button css={[styles.button, styles.buttonDefault]} onClick={closeView}>
              Cancel
            </button>
            <button css={styles.button} type="submit">
              Add
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
  buttonDefault: css({
    color: '#0c0c0d',
    background: 'rgba(12, 12, 13, 0.1)',
  }),
};
