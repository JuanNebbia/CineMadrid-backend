import express from "express";
import { readFileSync, writeFileSync } from "fs";

const PORT = 3000;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json("Bienvenidos a nuestra API de películas");
})

// 5 MÉTODOS MÁS USUALES
// CRUD = CREATE, READ, UPDATE, DELETE

// Get todas las peliculas
app.get("/movies", (req, res) => {
    const moviesString = readFileSync("./src/data/movies.json", "utf-8");
    const moviesArray = JSON.parse(moviesString);
    res.status(200).json(moviesArray);
})

// Get pelicula por id
app.get("/movies/:id", (req, res) => {
    const { id } = req.params;
    const moviesString = readFileSync("./src/data/movies.json", "utf-8");
    const moviesArray = JSON.parse(moviesString);
    const movie = moviesArray.find((movie) => movie.id === +id);
    if(!movie){
        return res.status(404).json(
            {
                error: "Pelicula no encontrada",
                code: 404,
                success: false
            }
        );
    }
    res.status(200).json(movie);
})

// Crear nueva pelicula
app.post("/movies", (req, res) => {
    const movieData = req.body;
    const moviesString = readFileSync("./src/data/movies.json", "utf-8");
    const moviesArray = JSON.parse(moviesString);
    moviesArray.push(movieData);
    const moviesStringNew = JSON.stringify(moviesArray);
    writeFileSync("./src/data/movies.json", moviesStringNew, "utf-8");
    res.status(201).json(movieData);
})

// Actualizar datos de una pelicula
app.put("/movies/:id", (req, res) => {
    const { id } = req.params;
    const movieData = req.body;
    const moviesString = readFileSync("./src/data/movies.json", "utf-8");
    const moviesArray = JSON.parse(moviesString);
    const index = moviesArray.findIndex((movie) => movie.id === +id);
    if(index === -1){
        return res.status(404).json(
            {
                error: "Pelicula no encontrada",
                code: 404,
                success: false
            }
        );
    }
    moviesArray[index] = movieData;
    const moviesStringNew = JSON.stringify(moviesArray);
    writeFileSync("./src/data/movies.json", moviesStringNew, "utf-8");
    res.status(200).json(movieData);
})

// Eliminar una pelicula
app.delete("/movies/:id", (req, res) => {
    const { id } = req.params;
    const moviesString = readFileSync("./src/data/movies.json", "utf-8");
    const moviesArray = JSON.parse(moviesString);
    const index = moviesArray.findIndex((movie) => movie.id === +id);
    if(index === -1){
        return res.status(404).json(
            {
                error: "Pelicula no encontrada",
                code: 404,
                success: false
            }
        );
    }
    moviesArray.splice(index, 1);
    const moviesStringNew = JSON.stringify(moviesArray);
    writeFileSync("./src/data/movies.json", moviesStringNew, "utf-8");
    res.status(200).send({
        success: true,
        message: "Pelicula eliminada correctamente"
    });
})

app.listen(PORT, () => {
    console.log("Servidor escuchando en el puerto", PORT);
});