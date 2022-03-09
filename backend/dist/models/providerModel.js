"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.exclude = exports.update = exports.add = exports.getAll = exports.getById = void 0;
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
const mongodb_1 = require("mongodb");
const connection_1 = __importDefault(require("./connection"));
const getAll = async () => {
    const db = await (0, connection_1.default)();
    return db.collection('providers').find().toArray();
};
exports.getAll = getAll;
const getById = async (id) => {
    if (!mongodb_1.ObjectId.isValid(id))
        return null;
    const db = await (0, connection_1.default)();
    return db.collection('providers').findOne(new mongodb_1.ObjectId(id));
};
exports.getById = getById;
const add = async ({ nome, razaosocial, cnpj, segmento, endereco, telefone, email, }) => {
    const db = await (0, connection_1.default)();
    return db.collection('providers')
        .insertOne({
        nome, razaosocial, cnpj, segmento, endereco, telefone, email,
    });
};
exports.add = add;
const update = async ({ id, nome, razaosocial, cnpj, segmento, endereco, telefone, email, }) => {
    if (!mongodb_1.ObjectId.isValid(id))
        return null;
    const db = await (0, connection_1.default)();
    return db.collection('providers')
        .updateOne({ _id: new mongodb_1.ObjectId(id) }, {
        $set: {
            nome, razaosocial, cnpj, segmento, endereco, telefone, email,
        },
    });
};
exports.update = update;
const exclude = (id) => {
    if (!mongodb_1.ObjectId.isValid(id))
        return null;
    (0, connection_1.default)().then((db) => db.collection('providers').deleteOne({ _id: new mongodb_1.ObjectId(id) }));
};
exports.exclude = exclude;
