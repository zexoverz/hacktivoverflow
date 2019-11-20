const Question = require("../models/question");

function authorization(req, res, next) {
    Question.findById(req.params.id)
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
                    messages: "Question not found"
                }
                next(err);
            }
        }).catch((err) => {
            next(err);
        })
}

module.exports = authorization;