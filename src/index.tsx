import React, { FunctionComponent, useReducer } from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from './theme';
import { Add, Edit, List } from './views';

type Action = 'ADD_NEW_VIEW' | 'LIST_VIEW' | 'EDIT_VIEW';

type State = { location: Action };

const initalState: State = { location: 'LIST_VIEW' };

const reducer = (state: State, action: Action): State => {
  switch (action) {
    case 'LIST_VIEW':
      return { location: 'LIST_VIEW' };
    case 'ADD_NEW_VIEW':
      return { location: 'ADD_NEW_VIEW' };
    case 'EDIT_VIEW':
      return { location: 'EDIT_VIEW' };
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
          ADD_NEW_VIEW: <Add onButtonClick={() => dispatch('LIST_VIEW')} />,
          LIST_VIEW: (
            <List
              onAddButtonClick={() => dispatch('ADD_NEW_VIEW')}
              onEditButtonClick={() => dispatch('EDIT_VIEW')}
            />
          ),
          EDIT_VIEW: <Edit onButtonClick={() => dispatch('LIST_VIEW')} />,
        }[state.location]
      }
    </ThemeProvider>
  );
};

render(<Root />, document.getElementById('root'));
