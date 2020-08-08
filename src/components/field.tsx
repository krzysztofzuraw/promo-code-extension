/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { FunctionComponent } from 'react';

type Props = {
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
  type: 'text';
  title: string;
  icon: 'copy';
};

export const Field: FunctionComponent<Props> = ({
  value,
  onChange,
  readOnly,
  icon,
  type,
  title,
}) => (
  <div css={styles.field}>
    {{ copy: <CopyIcon onClick={() => navigator.clipboard.writeText(value)} /> }[icon]}
    <input
      value={value}
      type={type}
      title={title}
      readOnly={readOnly}
      onChange={onChange}
      css={styles.input}
    />
  </div>
);

const CopyIcon: FunctionComponent<{ onClick?: () => void }> = ({ onClick }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    css={[styles.icon, styles.copyIcon]}
    onClick={onClick}
  >
    <path
      fill="context-fill"
      d="M14.707 8.293l-3-3A1 1 0 0 0 11 5h-1V4a1 1 0 0 0-.293-.707l-3-3A1 1 0 0 0 6 0H3a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h3v3a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2V9a1 1 0 0 0-.293-.707zM12.586 9H11V7.414zm-5-5H6V2.414zM6 7v2H3V2h2v2.5a.5.5 0 0 0 .5.5H8a2 2 0 0 0-2 2zm2 7V7h2v2.5a.5.5 0 0 0 .5.5H13v4z"
    ></path>
  </svg>
);

const styles = {
  field: css({
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  }),
  input: css({
    padding: '8px',
    height: '32px',
    borderRadius: '2px',
    border: '1px solid rgba(12, 12, 13, 0.2)',
    ':only-child': {
      backgroundColor: 'red',
    },
    '::placeholder': {
      color: '#737373',
      fontSize: '0.833rem/1.4',
    },
    ':hover': {
      borderColor: 'rgba(12, 12, 13, 0.3)',
    },
    ':focus': {
      borderColor: '#0a84ff',
    },
    ':error': {
      borderColor: '#d70022',
    },
  }),
  icon: {
    position: 'absolute',
    bottom: '8px',
    right: '8px',
    cursor: 'pointer',
    '+ input': {
      padding: '8px 32px 8px 8px;',
    },
  },
  copyIcon: {
    ':hover': {
      fill: '#0060df'
    }
    }
  }
};
