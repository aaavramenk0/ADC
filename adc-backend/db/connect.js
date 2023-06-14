import dotenv from "dotenv"; 
import { MongoClient } from "mongodb";

dotenv.config();

let _db;

/* Function the initialize new database using connection string to Mongo database from .env file  */ 
const initDb = callback => {
    if (_db) {
        console.log("DB is already initialized!");
        return callback(null, _db);
    }
    MongoClient.connect(process.env.MONGODB_URI)
        .then( async (client) => {
            _db = client;
            callback(null, _db);
        })
        .catch((err) => {
            callback(err);
        })
}

const getDb = () => {
    if (!_db) {
        throw Error("Db is not initialized");
    }
    return _db;
}

export { initDb, getDb };