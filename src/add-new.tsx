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
