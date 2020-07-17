import React, { FunctionComponent } from 'react';
import { render } from 'react-dom';
import { AddNew } from './add-new';
import './index.css';

const Root: FunctionComponent = () => {
  // const [url, setUrl] = React.useState('');
  // browser.tabs.query({ currentWindow: true, active: true }).then((tabs) => {
  //   setUrl(tabs[0].url ?? '');
  // });
  return (
    <div className="app">
      {/* <EmptyView /> */}
      <AddNew />
    </div>
  );
};

render(<Root />, document.getElementById('root'));
