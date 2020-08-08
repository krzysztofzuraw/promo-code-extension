import React, { FunctionComponent } from 'react';

export const ListView: FunctionComponent<{ onButtonClick: () => void }> = ({ onButtonClick }) => {
  return (
    <>
      <ul>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </ul>
      {/* <div className="empty-container">
        <p>There are no promo codes - click button below to add first</p>
      </div> */}
      <footer>
        <button className="button button-primary" onClick={onButtonClick}>
          Add new
        </button>
      </footer>
    </>
  );
};

const ListItem: FunctionComponent = () => (
  <li className="list-item">
    <div className="field">
      <CopyIcon
        onClick={() => {
          navigator.clipboard.writeText('lorem code');
        }}
      />
      <input
        name="code"
        id="code"
        type="text"
        value="lorem code"
        title="click icon to copy"
        readOnly
      />
    </div>
    <div className="date align-right">Valid until 12/03/2020</div>
    <div className="url">https://www.onet.pl</div>
    <button className="button button-delete">Delete</button>
  </li>
);

const CopyIcon: FunctionComponent<{ onClick?: () => void }> = ({ onClick }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    className="icon icon-copy"
    onClick={onClick}
  >
    <path
      fill="context-fill"
      d="M14.707 8.293l-3-3A1 1 0 0 0 11 5h-1V4a1 1 0 0 0-.293-.707l-3-3A1 1 0 0 0 6 0H3a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h3v3a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2V9a1 1 0 0 0-.293-.707zM12.586 9H11V7.414zm-5-5H6V2.414zM6 7v2H3V2h2v2.5a.5.5 0 0 0 .5.5H8a2 2 0 0 0-2 2zm2 7V7h2v2.5a.5.5 0 0 0 .5.5H13v4z"
    ></path>
  </svg>
);
