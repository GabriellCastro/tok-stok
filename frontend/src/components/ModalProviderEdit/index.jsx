/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-props-no-spreading */
import { useEffect, useContext } from 'react';
import { useForm } from 'react-hook-form';

import { ErrorMessage } from '@hookform/error-message';
import Modal from 'react-modal';

import { toast } from 'react-toastify';
import { CgCloseO } from 'react-icons/cg';

import { yupResolver } from '@hookform/resolvers/yup';
import { Context } from '../../context/Provider';

import api from '../../services/api';
import schema from '../../utils/schema';

Modal.setAppElement('#__next');

function ModalProviderEdit() {
  const {
    register, handleSubmit, reset, setValue, formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const {
    isOpenEdit, toggleModalEdit, setDataProviders, dataProviders, idProvirder,
  } = useContext(Context);

  useEffect(() => {
    const getProviderId = () => {
      const data = dataProviders.find((element) => element._id === idProvirder);
      setValue('nome', data?.nome);
      setValue('razaosocial', data?.razaosocial);
      setValue('cnpj', data?.cnpj);
      setValue('segmento', data?.segmento);
      setValue('endereco', data?.endereco);
      setValue('telefone', data?.telefone);
      setValue('email', data?.email);
    };
    getProviderId();
  }, [idProvirder]);

  const onSubmit = (data) => {
    api.put(`providers/${idProvirder}`, data)
      .then(({ data: { message } }) => toast.success(message));
    const dataFiltered = dataProviders.filter((element) => element._id !== idProvirder);
    setDataProviders([data, ...dataFiltered]);
    reset();
    toggleModalEdit();
  };

  return (
    <Modal
      isOpen={isOpenEdit}
      onRequestClose={toggleModalEdit}
      contentLabel="My dialog"
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <ErrorMessage
        errors={errors}
        name="singleErrorInput"
        render={({ message }) => <p>{message}</p>}
      />
      <div className="flex-col items-center justify-center">
        <div className="flex justify-between items-center">
          <h1 className="font-semibold mb-6 text-xl
          text-center text-white
            tracking-tight"
          >
            Adicione um novo fornecedor 📦
          </h1>
          <button
            type="button"
            className="mb-4"
            onClick={toggleModalEdit}
          >
            <CgCloseO color="white" size="22px" />
          </button>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex mb-6">
            <input
              placeholder="Digite seu nome... 💫"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
            focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
            dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register('nome')}
            />
            <input
              placeholder="Digite seu email... 💬"
              className="ml-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
            focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
            dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register('email')}
            />
          </div>

          <div className="flex mb-6">
            <input
              placeholder="Digite seu CNPJ... ‍💼"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
            focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
            dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register('cnpj')}
            />

            <input
              placeholder="Digite seu segmento... 🚀"
              className="ml-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
            focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
            dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register('segmento')}
            />
          </div>

          <div className="flex mb-6">
            <input
              placeholder="Razão social... 📋"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
            focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
            dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register('razaosocial')}
            />

            <input
              placeholder="Digite seu telefone... 📞 "
              className="ml-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
            focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
            dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register('telefone')}
            />
          </div>

          <input
            placeholder="Digite seu endereço... ‍📍"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
            focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
            dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register('endereco')}
          />

          <input
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300
          font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mt-6
          mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="submit"
          />
        </form>
      </div>
    </Modal>
  );
}

export default ModalProviderEdit;
