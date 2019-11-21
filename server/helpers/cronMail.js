const cron = require('node-cron')
const kue = require('kue')
const Question = require('../models/question')
const nodemailer = require('./nodemailer')
const queue = kue.createQueue({
    redis: {
        host: 'localhost',
        port: 6379
    }
});

module.exports = () => {
    // '0 1 * * *'
    cron.schedule('0 5 * * *', () => {
        console.log('Hello scheduler');
        Question
            .find()
            .populate('userId')
            .then((questions) => {

                questions.forEach(value => {
                    let text = `Hello, ${value.userId.email}...
                    
            Your question "${value.title}" has been upvoted for ${value.upVotes.length} times and downvoted for ${value.downVotes.length} times.`

                    let email = value.userId.email
                    queue.create('email', {
                        email,
                        text
                    }).save()

                });
            })
            .catch(function (err) {
                console.log(err)
            });

        queue.process('email', 5, function (job, done) {
            nodemailer(job.data.email, job.data.text)
            done()
        })
    })
}