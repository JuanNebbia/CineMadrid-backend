export const errorMiddleware = (err, req, res, next) => {
    res.status(err.code).json(
        { 
            error: err.message, 
            code: err.code, 
            success: false 
        }
    )
}