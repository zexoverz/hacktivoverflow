const Question = require("../models/question");

class QuestionController {
    static getAll(req, res, next) {
        Question.find()
            .populate("userId")
            .then(questions => {
                res.status(200).json(questions);
            }).catch(next)
    }

    static findOne(req, res, next) {
        Question.findById(req.params.id)
            .populate("answers")
            .populate("userId")
            .then(question => {
                res.status(200).json(question)
            }).catch(next)
    }

    static create(req, res, next) {
        Question.create({
            title: req.body.title,
            description: req.body.description,
            upVotes: [],
            downVotes: [],
            userId: req.user.id,
            answers: []
        }).then(result => {
            res.status(201).json(result);
        }).catch(next)
    }

    static upVote(req, res, next) {
        Question.findById(req.params.id)
            .then(question => {
                if (question.upVotes.includes(req.user.id)) {
                    question.upVotes.pull(req.user.id)
                    question = question.save();
                } else {
                    if (question.downVotes.includes(req.user.id)) {
                        question.downVotes.pull(req.user.id)
                    }
                    question.upVotes.push(req.user.id)
                    question = question.save();
                }
            })
            .then(result => {
                res.status(200).json(result);
            })
            .catch(next)
    }

    static downVote(req, res, next) {
        Question.findById(req.params.id)
            .then(question => {
                if (question.downVotes.includes(req.user.id)) {
                    question.downVotes.pull(req.user.id)
                    question = question.save();
                } else {
                    if (question.upVotes.includes(req.user.id)) {
                        question.upVotes.pull(req.user.id)
                    }
                    question.downVotes.push(req.user.id)
                    question = question.save();
                }
            })
            .then(result => {
                res.status(200).json(result);
            })
            .catch(next)
    }

    static delete(req, res, next) {
        Question.deleteOne({
            _id: req.params.id
        }).then(result => {
            res.status(200).json(result)
        }).catch(next)
    }

    static updateQuestion(req, res, next) {
        Question.update({
            _id: req.params.id
        }, {
            title: req.body.title,
            description: req.body.description
        }).then(result => {
            res.status(200).json(result)
        }).catch(next)
    }


}

module.exports = QuestionController;