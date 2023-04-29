const errorMiddleware = (err, req, res, next) => {
    res.status(req.statusCode);
    res.json({
        message: err.message,
        data: null
    });
}

module.exports = {errorMiddleware};