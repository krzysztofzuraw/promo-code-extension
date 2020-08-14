import React, { FunctionComponent, useReducer } from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from './theme';
import { Add, Edit, List } from './views';

type Action = 'ADD_NEW_VIEW' | 'LIST_VIEW' | 'EDIT_VIEW';

type State = { location: Action; itemId: string };

const initalState: State = { location: 'LIST_VIEW', itemId: '' };

const reducer = (state: State, action: Action): State => {
  switch (action) {
    case 'LIST_VIEW':
      return { location: 'LIST_VIEW', itemId: '' };
    case 'ADD_NEW_VIEW':
      return { location: 'ADD_NEW_VIEW', itemId: '' };
    case 'EDIT_VIEW':
      return { location: 'EDIT_VIEW', itemId: '' };
    default:
      return state;
  }
};

const Root: FunctionComponent = () => {
  const [state, dispatch] = useReducer(reducer, initalState);

  return (
    <ThemeProvider>
      {
        {
          ADD_NEW_VIEW: <Add closeView={() => dispatch('LIST_VIEW')} />,
          LIST_VIEW: (
            <List
              key={state.location}
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
