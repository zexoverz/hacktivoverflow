const routes = require('express').Router();
const userRouter = require('./user');
const questionRouter = require("./question");
const answerRouter = require("./answer");


routes.use('/user', userRouter)
routes.use('/question', questionRouter);
routes.use('/answer', answerRouter);


module.exports = routes