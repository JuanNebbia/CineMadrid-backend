export const authMiddleware = (req, res, next) => {
    const { user, pass } = req.body;
    if(user !== "admin" || pass !== "admin"){
        res.status(401).json({
            error: "No autorizado",
            code: 401,
            success: false
        });
    }
    next()
}