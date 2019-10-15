module.exports = {
    //error handler
    error:(err, req, res, next) => {
        res.status(err.status || 500);
        res.end(JSON.stringify({ message: err.message }));
    }
}

