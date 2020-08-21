import React, { FunctionComponent, useReducer } from 'react';
import { render } from 'react-dom';

import { GlobalStyles } from './styles';
import { Add, Edit, List } from './views';

type Action = { to: 'ADD_NEW_VIEW' } | { to: 'LIST_VIEW' } | { to: 'EDIT_VIEW'; itemId: string };

type State = { location: Action['to']; itemId?: string };

const initalState: State = { location: 'LIST_VIEW', itemId: undefined };

const reducer = (state: State, action: Action): State => {
  switch (action.to) {
    case 'LIST_VIEW':
      return { location: 'LIST_VIEW' };
    case 'ADD_NEW_VIEW':
      return { location: 'ADD_NEW_VIEW' };
    case 'EDIT_VIEW':
      return { location: 'EDIT_VIEW', itemId: action.itemId };
    default:
      return state;
  }
};

const Root: FunctionComponent = () => {
  const [state, move] = useReducer(reducer, initalState);

  return (
    <GlobalStyles>
      {
        {
          ADD_NEW_VIEW: <Add closeView={() => move({ to: 'LIST_VIEW' })} />,
          LIST_VIEW: (
            <List
              key={state.location}
              onAddButtonClick={() => move({ to: 'ADD_NEW_VIEW' })}
              onEditButtonClick={(itemId) => move({ to: 'EDIT_VIEW', itemId })}
            />
          ),
          EDIT_VIEW: (
            <Edit
              closeView={() => move({ to: 'LIST_VIEW' })}
              key={state.location}
              itemId={state.itemId}
            />
          ),
        }[state.location]
      }
    </GlobalStyles>
  );
};

render(<Root />, document.getElementById('root'));
