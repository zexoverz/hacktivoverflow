const Answer = require("../models/answer");
const Question = require("../models/question");
class AnswerController {
    static create(req, res, next) {
        Answer.create({
            description: req.body.description,
            upVotes: [],
            downVotes: [],
            userId: req.user.id,
            questionId: req.body.questionId
        }).then(answer => {
            return Question.findByIdAndUpdate(req.body.questionId, {
                $push: {
                    answers: answer.id
                }
            })
        }).then(result => {
            res.status(200).json(result)
        }).catch(next)
    }

    static update(req, res, next) {
        Answer.update({
            _id: req.params.id
        }, {
            description: req.body.description
        }).then(result => {
            res.status(200).json(result);
        }).catch(next)
    }

    static upVote(req, res, next) {
        Answer.findById(req.params.id)
            .then(answer => {
                if (answer.upVotes.includes(req.user.id)) {
                    answer.upVotes.pull(req.user.id)
                    answer = answer.save();
                } else {
                    if (answer.downVotes.includes(req.user.id)) {
                        answer.downVotes.pull(req.user.id)
                    }
                    answer.upVotes.push(req.user.id)
                    answer = answer.save();
                }
            }).then(result => {
                res.status(200).json(result)
            }).catch(next)
    }

    static downVote(req, res, next) {
        Answer.findById(req.params.id)
            .then(answer => {
                if (answer.downVotes.includes(req.user.id)) {
                    answer.downVotes.pull(req.user.id)
                    answer = answer.save()
                } else {
                    if (answer.upVotes.includes(req.user.id)) {
                        answer.upVotes.pull(req.user.id)
                    }
                    answer.downVotes.push(req.user.id)
                    answer = answer.save();
                }
            }).then(result => {
                res.status(200).json(result);
            }).catch(next)
    }


}

module.exports = AnswerController;