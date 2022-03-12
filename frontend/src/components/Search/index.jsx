import { useContext } from 'react';
import { Context } from '../../context/Provider';

function Search() {
  const { setSearchProviders } = useContext(Context);

  return (
    <div className="flex justify-center">
      <div className="mb-3 xl:w-96">
        <input
          type="search"
          className="form-control relative flex-auto min-w-0 block w-full px-3
          py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border
          border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700
          focus:bg-white focus:border-blue-600 focus:outline-none"
          placeholder="Buscar fornecedor 🔎"
          aria-label="Search"
          aria-describedby="button-addon3"
          onChange={({ target }) => setSearchProviders(target.value)}
        />
      </div>
    </div>
  );
}

export default Search;
