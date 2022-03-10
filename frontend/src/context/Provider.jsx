import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext({});

export function Provider({ children }) {
  // lista de fornecedores
  const [dataProviders, setDataProviders] = useState([]);

  return (
    <Context.Provider value={{
      dataProviders,
      setDataProviders,
    }}
    >
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
