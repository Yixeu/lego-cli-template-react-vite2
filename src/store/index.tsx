import React, { createContext, useReducer } from 'react';

const Store = createContext({
  state: null,
  dispatch: null,
});

type stateType = {
  userInfo: object;
};

const initialState: stateType = {
  userInfo: {},
};

const reducer = (
  state: any,
  action: {
    type: string;
    value: any;
  },
) => ({
  ...state,
  ...action.value,
});

const LegoStore: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Store.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </Store.Provider>
  );
};

export { Store, LegoStore };
