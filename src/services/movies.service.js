import { readFileSync, writeFileSync } from "fs";
import { connectToMongo, disconnectFromMongo } from "../config/mongodb.config.js";
import { ObjectId } from "mongodb";
import { CustomError } from "../utils/customError.js";


export const getAll = async() => {
    const client = await connectToMongo();
    try {
        const movies = await client.db("cinemadrid").collection("movies").find({}).toArray();
        return movies
        
    } catch (error) {
        return null
    }finally {
        await disconnectFromMongo(client);
    }


    // const moviesString = readFileSync("./src/data/movies.json", "utf-8");
    // const moviesArray = JSON.parse(moviesString);
    // return moviesArray
}

export const getById = async(id) => {
    const client = await connectToMongo();
    const movie = await client.db("cinemadrid").collection("movies").findOne({ id: +id });
    await disconnectFromMongo(client);
    return movie


    // const moviesString = readFileSync("./src/data/movies.json", "utf-8");
    // const moviesArray = JSON.parse(moviesString);
    // const movie = moviesArray.find((movie) => movie.id === +id);
    // return movie
}

export const create = async (movieData) => {
    const client = await connectToMongo();
    const newMovie = await client.db("cinemadrid").collection("movies").insertOne(movieData);
    await disconnectFromMongo(client);
    return newMovie


    // const moviesString = readFileSync("./src/data/movies.json", "utf-8");
    // const moviesArray = JSON.parse(moviesString);
    // moviesArray.push(movieData);
    // const moviesStringNew = JSON.stringify(moviesArray);
    // writeFileSync("./src/data/movies.json", moviesStringNew, "utf-8");
    // return movieData
}

export const update = (id, movieData) => {
    const client = connectToMongo();
    const objectId = new ObjectId(id);
    const movieUpdated = client.db("cinemadrid").collection("movies").updateOne({ _id: objectId }, { $set: movieData });
    disconnectFromMongo(client);
    return movieUpdated


    // const moviesString = readFileSync("./src/data/movies.json", "utf-8");
    // const moviesArray = JSON.parse(moviesString);
    // const index = moviesArray.findIndex((movie) => movie.id === +id);
    // if(index === -1){
    //     return null;
    // }
    // moviesArray[index] = movieData;
    // const moviesStringNew = JSON.stringify(moviesArray);
    // writeFileSync("./src/data/movies.json", moviesStringNew, "utf-8");
}

export const deleteById = (id) => {
    const client = connectToMongo();
    const objectId = new ObjectId(id);
    const movieDeleted = client.db("cinemadrid").collection("movies").deleteOne({ _id: objectId });
    disconnectFromMongo(client);
    return movieDeleted

    // const moviesString = readFileSync("./src/data/movies.json", "utf-8");
    // const moviesArray = JSON.parse(moviesString);
    // const index = moviesArray.findIndex((movie) => movie.id === +id);
    // if(index === -1){
    //     return null
    // }
    // moviesArray.splice(index, 1);
    // const moviesStringNew = JSON.stringify(moviesArray);
    // writeFileSync("./src/data/movies.json", moviesStringNew, "utf-8");
}