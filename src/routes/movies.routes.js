import { Router } from 'express'
import { createMovie, deleteMovie, getMovieById, getMovies, updateMovie } from '../controllers/movies.controller.js';

const router = Router()

router.get("/", getMovies)

router.get("/:id", getMovieById)

router.post("/", createMovie)

router.put("/:id", updateMovie)

router.delete("/:id", deleteMovie)

export default router