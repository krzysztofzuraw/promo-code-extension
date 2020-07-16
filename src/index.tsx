import React, { FunctionComponent } from 'react';
import { render } from 'react-dom';
import './index.css';

const Root: FunctionComponent = () => {
  // const [url, setUrl] = React.useState('');
  // browser.tabs.query({ currentWindow: true, active: true }).then((tabs) => {
  //   setUrl(tabs[0].url ?? '');
  // });
  return (
    <div className="content">
      <div>here will be content!</div>
      <div>
        <button>Add new</button>
      </div>
    </div>
  );
};

render(<Root />, document.getElementById('root'));
