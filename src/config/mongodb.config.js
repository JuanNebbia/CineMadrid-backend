import { MongoClient } from "mongodb";

const url = "mongodb://127.0.0.1:27017";
const dbName = "cinemadrid";

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