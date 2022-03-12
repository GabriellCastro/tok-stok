import { useContext } from 'react';
import { Context } from '../context/Provider';

import Header from '../components/Header';
import Search from '../components/Search';
import ProviderList from '../components/ProviderList';
import ModalProviderEdit from '../components/ModalProviderEdit';
import ModalProviderNew from '../components/ModalProviderNew';

export default function Home() {
  const { toggleModalNew } = useContext(Context);
  return (
    <div>
      <Header />
      <div className="mt-8 ml-16">
        <button
          onClick={() => toggleModalNew()}
          type="button"
          className="text-white bg-blue-900 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300
          font-medium rounded-lg text-sm px-5 py-2.5 text-center
          dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          📋 Novo Fornecedor
        </button>
      </div>
      <Search />
      <div className="flex flex-wrap items-center justify-center w-full">
        <ModalProviderNew />
        <ModalProviderEdit />
        <ProviderList />
      </div>
    </div>
  );
}
