import { Router } from 'express'
import { createMovie, deleteMovie, getMovieById, getMovies, updateMovie } from '../controllers/movies.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';
import { roleMiddleware } from '../middlewares/role.middleware.js';

const router = Router()

router.get("/", getMovies)

router.get("/:id", getMovieById)

router.post("/", authMiddleware, createMovie)

router.put("/:id", updateMovie)

router.delete("/:id", roleMiddleware, deleteMovie)

export default router