const User = require("../models/user");
const jwt = require("../helpers/jwt");


function authenticate(req, res, next) {
    try {
        const decoded = jwt.verifyToken(req.headers.token);
        User.findOne({
            _id: decoded.id
        }).then((user) => {
            if (user) {
                req.user = decoded
                next()
            } else {
                next({
                    status: 404,
                    messages: "error"
                })
            }
        })
    } catch (err) {
        err = {
            status: 403,
            messages: "must login"
        }
        next(err);
    }
}

module.exports = authenticate;