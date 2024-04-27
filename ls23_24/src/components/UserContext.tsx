import React, { createContext, useReducer, Dispatch } from 'react';

interface User {
  name: string;
  email: string;
}

type UserAction = {
  type: 'UPDATE_USER';
  payload: User;
};

const initialState: User = {
  name: '',
  email: '',
};

const UserContext = createContext<{ state: User; dispatch: Dispatch<UserAction> }>({ state: initialState, dispatch: () => null });

const userReducer = (state: User, action: UserAction) => {
  switch (action.type) {
    case 'UPDATE_USER':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

const UserProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return <UserContext.Provider value={{ state, dispatch }}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };