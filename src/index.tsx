import React, { FunctionComponent } from 'react';
import { render } from 'react-dom';

const Root: FunctionComponent = () => {
  const [url, setUrl] = React.useState('');
  browser.tabs.query({ currentWindow: true, active: true }).then((tabs) => {
    setUrl(tabs[0].url ?? '');
  });
  return <div>Super cool working! {url}</div>;
};

render(<Root />, document.getElementById('root'));
