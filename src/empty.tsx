import React from 'react';

export const EmptyView: React.FunctionComponent = () => (
  <>
    <div className="empty">
      <p>There are no promo codes - click button below to add first</p>
    </div>
    <footer>
      <button className="button-primary">Add new</button>
    </footer>
  </>
);
