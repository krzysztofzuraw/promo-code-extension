/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { FunctionComponent, useEffect, useState } from 'react';
import { Field } from '../components/field';
import { PromoCodeEntry } from '../models';

type Props = {
  closeView: () => void;
  itemId: string | undefined;
};

export const Edit: FunctionComponent<Props> = ({ closeView, itemId }) => {
  const [url, setUrl] = useState('');
  const [code, setCode] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    chrome.storage.local.get(['codes'], (items: { [codes: string]: PromoCodeEntry[] }) => {
      if (items.codes) {
        const possibleCode = items.codes.find((code) => code.id === itemId);
        if (possibleCode) {
          setUrl(possibleCode.url);
          setCode(possibleCode.code);
          setDate(possibleCode.date);
        }
      }
    });
  }, []);

  const editPromoCode = () => {
    chrome.storage.local.get(['codes'], (items: { [codes: string]: PromoCodeEntry[] }) => {
      if (items.codes) {
        const updatedCodes = items.codes.map((c) =>
          c.id === itemId ? { id: itemId, code, url, date } : c
        );
        chrome.storage.local.set({ codes: updatedCodes }, () => {
          closeView();
        });
      }
    });
  };

  const deletePromoCode = () => {
    chrome.storage.local.get(['codes'], (items: { [codes: string]: PromoCodeEntry[] }) => {
      if (items.codes) {
        chrome.storage.local.set(
          { codes: items.codes.filter((item) => item.id !== itemId) },
          () => {
            closeView();
          }
        );
      }
    });
  };

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
            <button css={[styles.button, styles.buttonDelete]} onClick={deletePromoCode}>
              Delete
            </button>
            <button css={styles.button} onClick={editPromoCode}>
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
    height: 'calc(100vh - 32px)',
    padding: '16px',
    footer: {
      display: 'grid',
      placeItems: 'center right',
      gridAutoFlow: 'column',
    },
    maxHeight: '350px',
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
