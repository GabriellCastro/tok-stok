import { useContext } from 'react';
import { Context } from '../../context/Provider';

function ProviderList() {
  const { dataProviders } = useContext(Context);
  return (
    <h1>olá</h1>
  );
}

export default ProviderList;
