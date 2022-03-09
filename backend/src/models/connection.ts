const mongoClient = require('mongodb').MongoClient;

const DB_URL = 'mongodb://localhost:27017/';
const DB_NAME = 'tok_stok';

const connection = async () => mongoClient
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  // eslint-disable-next-line no-unused-vars
  .then((con: { db: (arg0: string) => any; }) => con.db(DB_NAME))
  .catch((err: any) => {
    console.error(err);
    process.exit(1);
  });

export default connection;
