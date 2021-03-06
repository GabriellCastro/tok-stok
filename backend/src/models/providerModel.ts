/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { ObjectId } from 'mongodb';
import connection from './connection';

const getAll = async () => {
  const db = await connection();
  return db.collection('providers').find().toArray();
};

const getById = async (id: any) => {
  if (!ObjectId.isValid(id)) return null;
  const db = await connection();
  return db.collection('providers').findOne(new ObjectId(id));
};

const add = async ({
  nome, razaosocial, cnpj, segmento, endereco, telefone, email,
}: any) => {
  const db = await connection();
  return db.collection('providers')
    .insertOne({
      nome, razaosocial, cnpj, segmento, endereco, telefone, email,
    });
};

const update = async ({
  id, nome, razaosocial, cnpj, segmento, endereco, telefone, email,
}: any) => {
  if (!ObjectId.isValid(id)) return null;
  const db = await connection();
  return db.collection('providers')
    .updateOne({ _id: new ObjectId(id) }, {
      $set: {
        nome, razaosocial, cnpj, segmento, endereco, telefone, email,
      },
    });
};

const exclude = (id: any) => {
  if (!ObjectId.isValid(id)) return null;
  connection().then((db) => db.collection('providers').deleteOne({ _id: new ObjectId(id) }));
};

export {
  getById, getAll, add, update, exclude,
};
