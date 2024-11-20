import express from "express";
import moviesRoutes from "./src/routes/movies.routes.js";
import usersRoutes from "./src/routes/users.routes.js";

const PORT = 3000;

const app = express();

app.use(express.json());
app.use('/movies', moviesRoutes)
app.use('/users', usersRoutes)

app.get("/", (req, res) => {
    res.json("Bienvenidos a nuestra API de películas");
})

app.listen(PORT, () => {
    console.log("Servidor escuchando en el puerto", PORT);
});