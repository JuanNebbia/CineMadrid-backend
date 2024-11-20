import { getAll, getById, create, update, deleteById } from "../services/movies.service.js";

export const getMovies = (req, res) => {
    const movies = getAll()
    res.status(200).json(movies);
}

export const getMovieById = (req, res) => {
    const { id } = req.params;
    const movie = getById(id);
    if(!movie){
        return res.status(404).json(
            {
                error: "Película no encontrada",
                code: 404,
                success: false
            }
        );
    }
    res.status(200).json(movie);
}

export const createMovie = (req, res) => {
    const movieData = req.body;
    const newMovie = create(movieData);
    if(!newMovie){
        return res.status(500).json(
            {
                error: "Error del servidor",
                code: 500,
                success: false
            }
        )
    }
    res.status(201).json(newMovie);
}

export const updateMovie = (req, res) => {
    const { id } = req.params;
    const movieData = req.body;
    const movieUpdated = update(id, movieData);
    if(!movieUpdated){
        return res.status(404).json(
            {
                error: "Película no encontrada",
                code: 404,
                success: false
            }
        );
    }
    res.status(200).json(movieData);
}


export const deleteMovie = (req, res) => {
    const { id } = req.params;
    const deletedMovie = deleteById(id);
    if(!deletedMovie){
        return res.status(404).json(
            {
                error: "Película no encontrada",
                code: 404,
                success: false
            }
        )
    }
    res.status(200).send({
        success: true,
        message: "Película eliminada correctamente"
    });
}