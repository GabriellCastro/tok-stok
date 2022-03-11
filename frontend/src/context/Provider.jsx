import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext({});

export function Provider({ children }) {
  const [dataProviders, setDataProviders] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <Context.Provider value={{
      dataProviders,
      setDataProviders,
      toggleModal,
      isOpen,
    }}
    >
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
