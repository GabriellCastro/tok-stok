"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoClient = require('mongodb').MongoClient;
const DB_URL = 'mongodb://localhost:27017/';
const DB_NAME = 'tok_stok';
const connection = async () => mongoClient
    .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    // eslint-disable-next-line no-unused-vars
    .then((con) => con.db(DB_NAME))
    .catch((err) => {
    console.error(err);
    process.exit(1);
});
exports.default = connection;
