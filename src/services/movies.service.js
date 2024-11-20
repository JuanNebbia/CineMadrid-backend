import { readFileSync, writeFileSync } from "fs";

export const getAll = async() => {
    const moviesString = readFileSync("./src/data/movies.json", "utf-8");
    const moviesArray = JSON.parse(moviesString);
    return moviesArray
}

export const getById = (id) => {
    const moviesString = readFileSync("./src/data/movies.json", "utf-8");
    const moviesArray = JSON.parse(moviesString);
    const movie = moviesArray.find((movie) => movie.id === +id);
    return movie
}

export const create = async (movieData) => {
    const moviesString = readFileSync("./src/data/movies.json", "utf-8");
    const moviesArray = JSON.parse(moviesString);
    moviesArray.push(movieData);
    const moviesStringNew = JSON.stringify(moviesArray);
    writeFileSync("./src/data/movies.json", moviesStringNew, "utf-8");
    return movieData
}

export const update = (id, movieData) => {
    const moviesString = readFileSync("./src/data/movies.json", "utf-8");
    const moviesArray = JSON.parse(moviesString);
    const index = moviesArray.findIndex((movie) => movie.id === +id);
    if(index === -1){
        return null;
    }
    moviesArray[index] = movieData;
    const moviesStringNew = JSON.stringify(moviesArray);
    writeFileSync("./src/data/movies.json", moviesStringNew, "utf-8");
}

export const deleteById = (id) => {
    const moviesString = readFileSync("./src/data/movies.json", "utf-8");
    const moviesArray = JSON.parse(moviesString);
    const index = moviesArray.findIndex((movie) => movie.id === +id);
    if(index === -1){
        return null
    }
    moviesArray.splice(index, 1);
    const moviesStringNew = JSON.stringify(moviesArray);
    writeFileSync("./src/data/movies.json", moviesStringNew, "utf-8");
}