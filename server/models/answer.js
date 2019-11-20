const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const answerSchema = new Schema({
    description: String,
    upVotes: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    downVotes: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    questionId: {
        type: Schema.Types.ObjectId,
        ref: "Question"
    },
    author: String
})

const Answer = mongoose.model("Answer", answerSchema)

module.exports = Answer;