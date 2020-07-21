import React, { FunctionComponent, useState } from 'react';

export const AddNew: FunctionComponent = () => {
  const [url, setUrl] = useState('');
  const [code, setCode] = useState('');
  const [date, setDate] = useState('');

  return (
    <div>
      <form>
        <div className="field">
          <label htmlFor="url">URL address</label>
          {url && <ClearIcon onClick={() => setUrl('')} />}
          <input
            name="url"
            id="url"
            value={url}
            type="url"
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="code">Promo code</label>
          {code && <ClearIcon onClick={() => setCode('')} />}
          <input
            name="code"
            id="code"
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="date">Valid until</label>
          <input
            name="date"
            id="date"
            value={date}
            type="date"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

const ClearIcon: FunctionComponent<{ onClick?: () => void }> = ({ onClick }) => (
  <svg
    onClick={onClick}
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    className="clear"
  >
    <path
      fill="context-fill"
      d="M6.586 8l-2.293 2.293a1 1 0 0 0 1.414 1.414L8 9.414l2.293 2.293a1 1 0 0 0 1.414-1.414L9.414 8l2.293-2.293a1 1 0 1 0-1.414-1.414L8 6.586 5.707 4.293a1 1 0 0 0-1.414 1.414L6.586 8zM8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0z"
    ></path>
  </svg>
);
