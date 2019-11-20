const routes = require("express").Router();
const AnswerController = require("../controllers/answer");
const authAnswer = require("../middlewares/authAnswer");

routes.post("/", AnswerController.create);
routes.put("/:id", authAnswer, AnswerController.update);
routes.patch("/upVote/:id", AnswerController.upVote);
routes.patch("/downVote/:id", AnswerController.downVote);

module.exports = routes;