import { createContext } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext({});

export function Provider({ children }) {
  const contextValue = {};

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
