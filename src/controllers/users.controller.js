import { readFileSync, writeFileSync } from "fs";

export const getUsers = (req, res) => {
    const usersString = readFileSync("./src/data/users.json", "utf-8");
    const usersArray = JSON.parse(usersString);
    res.status(200).json(usersArray);
}

export const getUserById = (req, res) => {
    const { id } = req.params;
    const usersString = readFileSync("./src/data/users.json", "utf-8");
    const usersArray = JSON.parse(usersString);
    const user = usersArray.find((user) => user.id === +id);
    if(!user){
        return res.status(404).json(
            {
                error: "Usuario no encontrado",
                code: 404,
                success: false
            }
        );
    }
    res.status(200).json(user);
}

export const createUser = (req, res) => {
    const userData = req.body;
    const usersString = readFileSync("./src/data/users.json", "utf-8");
    const usersArray = JSON.parse(usersString);
    usersArray.push(userData);
    const usersStringNew = JSON.stringify(usersArray);
    writeFileSync("./src/data/users.json", usersStringNew, "utf-8");
    res.status(201).json(userData);
}

export const updateUser = (req, res) => {
    const { id } = req.params;
    const userData = req.body;
    const usersString = readFileSync("./src/data/users.json", "utf-8");
    const usersArray = JSON.parse(usersString);
    const index = usersArray.findIndex((user) => user.id === +id);
    if(index === -1){
        return res.status(404).json(
            {
                error: "Usuario no encontrado",
                code: 404,
                success: false
            }
        );
    }
    usersArray[index] = userData;
    const usersStringNew = JSON.stringify(usersArray);
    writeFileSync("./src/data/users.json", usersStringNew, "utf-8");
    res.status(200).json(userData);
}


export const deleteUser = (req, res) => {
    const { id } = req.params;
    const usersString = readFileSync("./src/data/users.json", "utf-8");
    const usersArray = JSON.parse(usersString);
    const index = usersArray.findIndex((user) => user.id === +id);
    if(index === -1){
        return res.status(404).json(
            {
                error: "Usuario no encontrado",
                code: 404,
                success: false
            }
        );
    }
    usersArray.splice(index, 1);
    const usersStringNew = JSON.stringify(usersArray);
    writeFileSync("./src/data/users.json", usersStringNew, "utf-8");
    res.status(200).send({
        success: true,
        message: "Usuario eliminada correctamente"
    });
}