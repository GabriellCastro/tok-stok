import { createContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext({});

export function Provider({ children }) {
  // lista de fornecedores
  const [dataProviders, setDataProviders] = useState([]);

  const contextValue = useMemo(() => ({
    dataProviders,
    setDataProviders,
  }), []);

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
