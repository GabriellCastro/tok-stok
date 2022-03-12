import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext({});

export function Provider({ children }) {
  const [dataProviders, setDataProviders] = useState([]);
  const [searchProviders, setSearchProviders] = useState('');
  const [idProvirder, setIdProvider] = useState('');
  const [isOpenNew, setIsOpenNew] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);

  function toggleModalNew() {
    setIsOpenNew(!isOpenNew);
  }

  function toggleModalEdit() {
    setIsOpenEdit(!isOpenEdit);
  }

  return (
    <Context.Provider value={{
      dataProviders,
      setDataProviders,
      toggleModalNew,
      toggleModalEdit,
      isOpenNew,
      isOpenEdit,
      searchProviders,
      setSearchProviders,
      idProvirder,
      setIdProvider,
    }}
    >
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
