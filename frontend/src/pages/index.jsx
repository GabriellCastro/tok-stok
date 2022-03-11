import { useContext } from 'react';
import Header from '../components/Header';
import ProviderList from '../components/ProviderList';
import ModalProviderNew from '../components/ModalProviderNew';
import { Context } from '../context/Provider';

export default function Home() {
  const { toggleModal } = useContext(Context);
  return (
    <div>
      <Header />
      <div className="mt-8 ml-16">
        <button
          onClick={() => toggleModal()}
          type="button"
          className="text-white bg-blue-900 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300
          font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2
          mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Novo Fornecedor
        </button>
      </div>
      <div className="flex flex-wrap items-center justify-center w-full">
        <ModalProviderNew />
        <ProviderList />
      </div>
    </div>
  );
}
