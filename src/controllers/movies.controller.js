import { getAll, getById, create, update, deleteById } from "../services/movies.service.js";
import { CustomError } from "../utils/customError.js";

export const getMovies = async (req, res, next) => {
    try {
        const movies = await getAll()
        res.status(200).json(movies);
    } catch (error) {
        next(new CustomError(error.message, 500));
    }
}

export const getMovieById = async (req, res) => {
    const { id } = req.params;
    const movie = await getById(id);
    if(!movie){
        throw new CustomError('Película no encontrada', 404);
    }
    res.status(200).json(movie);
}

export const createMovie = async(req, res) => {
    const movieData = req.body;
    const newMovie = await create(movieData);
    if(!newMovie){
        throw new CustomError('Error al crear película', 500);
    }
    res.status(201).json(newMovie);
}

export const updateMovie = (req, res) => {
    const { id } = req.params;
    const movieData = req.body;
    const movieUpdated = update(id, movieData);
    if(!movieUpdated){
        throw new CustomError('Error al actualizar película', 500);
    }
    res.status(200).json(movieData);
}


export const deleteMovie = (req, res) => {
    const { id } = req.params;
    const deletedMovie = deleteById(id);
    if(!deletedMovie){
        throw new CustomError('Error al eliminar película', 500);
    }
    res.status(200).send({
        success: true,
        message: "Película eliminada correctamente"
    });
}