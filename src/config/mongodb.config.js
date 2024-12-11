import { MongoClient } from "mongodb";
import dotenv from 'dotenv'
dotenv.config()


const url = process.env.MONGODB_URL;
const dbName = process.env.MONGODB_DB;

const client = new MongoClient(url);

export const connectToMongo = async () => {
    try {
        await client.connect();
        console.log(`Conectado a la base de datos ${dbName} en ${url}`);
        return client;
    } catch (error) {
        console.error(`Error al conectar a la base de datos: ${error}`);
        return null;
    }
}

export const disconnectFromMongo = async (client) => {
    try {
        await client.close();
        console.log(`Desconectado de la base de datos ${dbName} en ${url}`);
    } catch (error) {
        console.error(`Error al desconectar de la base de datos: ${error}`);
    }
}