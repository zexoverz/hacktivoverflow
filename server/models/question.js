const mongoose = require("mongoose");
const Schema = mongoose.Schema

const questionSchema = new Schema({
    title: String,
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
    answers: [{
        type: Schema.Types.ObjectId,
        ref: "Answer"
    }]

})

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;