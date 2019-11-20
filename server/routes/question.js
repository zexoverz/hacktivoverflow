const routes = require("express").Router();
const QuestionController = require("../controllers/question");
const authenticate = require("../middlewares/authenticate");
const authQuestion = require("../middlewares/authQuestion");

routes.get("/", QuestionController.getAll);
routes.get("/:id", QuestionController.findOne);
routes.use(authenticate);
routes.post("/", QuestionController.create);
routes.put("/:id", authQuestion, QuestionController.updateQuestion);
routes.delete("/:id", authQuestion, QuestionController.delete);
routes.patch("/upVote/:id", QuestionController.upVote);
routes.patch("/downVote/:id", QuestionController.downVote);


module.exports = routes;