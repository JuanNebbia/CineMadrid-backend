import express from "express";
import moviesRoutes from "./src/routes/movies.routes.js";
import usersRoutes from "./src/routes/users.routes.js";
import { errorMiddleware } from "./src/middlewares/error.middleware.js";

const PORT = 3000;

const app = express();

app.use(express.json());

app.use('/movies', moviesRoutes)
app.use('/users', usersRoutes)

const globalMiddleware = (req, res, next) => {
    console.log('Estamos en el middleware global');
    next();
}

app.get("/", 
    globalMiddleware,
    (req, res) => {
        res.json("Bienvenidos a nuestra API de películas");
    }
)

app.use(errorMiddleware)

app.listen(PORT, () => {
    console.log("Servidor escuchando en el puerto", PORT);
});