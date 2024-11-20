export const roleMiddleware = (req, res, next) => {
    const { role } = req.body;
    if(role !== "admin"){
        res.status(403).json({
            error: "No autorizado",
            code: 403,
            success: false
        });
    }
    next()
}