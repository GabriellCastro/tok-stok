import Header from '../components/Header';
import ProviderList from '../components/ProviderList';

import ModalProviderNew from '../components/ModalProviderNew';

export default function Home() {
  return (
    <div>
      <Header />
      <div className="mt-8 ml-16">
        <button
          onClick={<ModalProviderNew />}
          type="button"
          className="text-white bg-gradient-to-r from-teal-400 via-teal-500
          to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-teal-300
          dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5
          text-center
          mr-2 mb-2"
        >
          Novo Fornecedor

        </button>
      </div>
      <div className="flex flex-wrap items-center justify-center w-full">
        <ProviderList />
      </div>
    </div>
  );
}
