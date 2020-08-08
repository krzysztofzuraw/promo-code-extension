import React, { FunctionComponent, useReducer } from 'react';
import { render } from 'react-dom';
import { AddNew } from './add-new-view';
import './index.css';
import { ListView } from './list-view';
import { ThemeProvider } from './theme';

type State = { location: 'ADD_NEW_VIEW' | 'LIST_VIEW' };
type Action = 'ADD_NEW_VIEW' | 'LIST_VIEW';

const initalState: State = { location: 'LIST_VIEW' };

const reducer = (state: State, action: Action): State => {
  switch (action) {
    case 'LIST_VIEW':
      return { location: 'LIST_VIEW' };
    case 'ADD_NEW_VIEW':
      return { location: 'ADD_NEW_VIEW' };
    default:
      return state;
  }
};

const Root: FunctionComponent = () => {
  const [state, dispatch] = useReducer(reducer, initalState);
  // const [url, setUrl] = React.useState('');
  // browser.tabs.query({ currentWindow: true, active: true }).then((tabs) => {
  //   setUrl(tabs[0].url ?? '');
  // });

  return (
    <ThemeProvider>
      {
        {
          ADD_NEW_VIEW: <AddNew />,
          LIST_VIEW: <ListView onButtonClick={() => dispatch('ADD_NEW_VIEW')} />,
        }[state.location]
      }
    </ThemeProvider>
  );
};

render(<Root />, document.getElementById('root'));
