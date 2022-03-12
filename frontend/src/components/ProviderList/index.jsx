/* eslint-disable no-underscore-dangle */
import { useContext, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Context } from '../../context/Provider';

import api from '../../services/api';

function ProviderList() {
  const {
    dataProviders, setDataProviders, searchProviders, setIdProvider, toggleModalEdit,
  } = useContext(Context);

  useEffect(() => {
    api.get('providers')
      .then((res) => setDataProviders(res.data));
  }, []);

  const deleteProvider = (id) => {
    api.delete(`providers/${id}`)
      .then(({ data: { message } }) => toast.success(message));
    const newProviders = dataProviders.filter((element) => element._id !== id);
    setDataProviders(newProviders);
  };

  // filter search
  const data = dataProviders.filter((element) => {
    if (!searchProviders) {
      return element;
    } if (element.nome.toLowerCase().trim().includes(searchProviders.toLowerCase().trim())) {
      return element;
    }
    return null;
  });

  const modalEdit = (id) => {
    setIdProvider(id);
    toggleModalEdit();
  };

  if (dataProviders.length === 0) return <p className="text-slate-300 animate-pulse">Adicione um fornecedor!</p>;
  return (
    <>
      {
        data.map((element) => (
          <div className="py-8" key={element._id}>
            <div className="flex items-center justify-center w-full">
              <div className="w-4/1 ml-2 mr-2 bg-gray-900 p-8 shadow rounded">
                <div className="flex items-center border-b border-gray-200 pb-6">
                  <div className="flex items-start justify-between w-full">
                    <div className="pl-3 w-full flex justify-between">
                      <div>
                        <strong className="text-xl font-medium leading-5 text-lime-200 mb-3 mr-5">Nome do Fornecedor:</strong>
                        <p className="text-xl font-medium leading-5 text-lime-500">{element.nome}</p>
                        <p className="text-xl font-medium leading-5 text-lime-500">{element.email}</p>
                      </div>
                      <div>
                        <strong className="text-xl font-medium leading-5 text-lime-200">Razão social:</strong>
                        <p className="text-sm leading-normal pt-2 text-gray-500">{element.razaosocial}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between mt-4">
                  <div className="pl-3">
                    <strong className="text-xl font-medium leading-5 text-lime-200">CNPJ:</strong>
                    <p className="text-sm leading-normal pt-1 text-gray-500">{element.cnpj}</p>
                  </div>
                  <div>
                    <strong className="text-xl font-medium leading-5 text-lime-200">Segmento:</strong>
                    <p className="text-sm leading-normal pt-1 text-gray-500">{element.segmento}</p>
                  </div>
                </div>
                <div>
                  <div />
                </div>
                <div className="px-2 mt-6">
                  <div className="flex items-start justify-between w-full">
                    <div className="pl-3 w-full flex justify-between">
                      <div>
                        <strong className="text-xl m font-medium leading-5 text-lime-200 mb-3">Endereço:</strong>
                        <p className="text-sm leading-normal pt-1 text-gray-500">{element.endereco}</p>
                      </div>
                      <div>
                        <strong className="text-xl font-medium leading-5 text-lime-200">Telefone:</strong>
                        <p className="text-sm leading-normal pt-2 text-gray-500">{element.telefone}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-around mt-2">

                    <button
                      type="button"
                      className="mt-2 whitespace-nowrap inline-flex items-center justify-center px-5
                     py-2 border border-transparent rounded-md shadow-sm text-base font-medium
                     text-white bg-gray-800 hover:bg-indigo-900"
                      onClick={() => modalEdit(element._id)}
                    >
                      Editar
                    </button>

                    <button
                      type="button"
                      onClick={() => deleteProvider(element._id)}
                      className="mt-2 whitespace-nowrap inline-flex items-center justify-center px-5
                     py-2 border border-transparent rounded-md shadow-sm text-base font-medium
                     text-white bg-gray-800 hover:bg-indigo-900"
                    >
                      Excluir
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </>
  );
}

export default ProviderList;
