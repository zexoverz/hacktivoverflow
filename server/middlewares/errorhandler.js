module.exports = (err, req, res, next) => {
    if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'testing') console.log(err)
    let status
    let message
    switch (err.name) {
        case 'ValidationError':
            status = 400
            let arr = []
            for (const key in err.errors) {
                arr.push(err.errors[key].message)
            }
            message = arr
            break;
        case 'JsonWebTokenError':
            status = 401
            message = err.message
            break;
        default:
            status = err.status || 500
            message = err.message || err.msg || 'Internal Server Error'
            break;
    }
    res.status(status).json({
        code: status,
        message
    })
}