const Answer = require("../models/answer");

function authorization(req, res, next) {
    Answer.findById(req.params.id)
        .then((found) => {
            if (found) {
                if (found.userId == req.user.id) {
                    next();
                } else {
                    let err = {
                        status: 401,
                        messages: "you are not authorized"
                    }
                    next(err);
                }
            } else {
                let err = {
                    status: 404,
                    messages: "Answer not found"
                }
                next(err);
            }
        }).catch((err) => {
            next(err);
        })
}

module.exports = authorization;