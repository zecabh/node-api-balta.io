'use strict';
var config = require('../config');
var sendgrid = require('sendgrid')(config.sendgridKey);

// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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')

exports.send = async (to, subject, body) => {
    
    const msg = {
        to: to,
        from: 'zeca@dwindustria.com.br', // Use the email address or domain you verified above
        subject: subject,
        text: body,
        html: body,
    };

    sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent')
        }, error => {
            console.error(error);

            if (error.response) {
            console.error(error.response.body)
            }
        });

}

