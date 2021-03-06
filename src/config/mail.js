const nodemailer = require('nodemailer');

module.exports = (pr_to,pr_subject,pr_text) => {

//Transport data
const tp_service = process.env.MAIL_SERVICE; //Example "gmail"                      
const tp_user = process.env.MAIL_USR; //Example "example@mail.com"
const tp_password = process.env.MAIL_PASS; //Password

//ml_options
const ml_from = tp_user;
const ml_to = pr_to;
const ml_subject = pr_subject;
const ml_text = pr_text;

const transport = nodemailer.createTransport({
    "service": tp_service,
    "auth": {
        "user": tp_user,
        "pass": tp_password
    }   
});

const ml_options = {
    "from": ml_from,
    "to": ml_to,
    "subject": ml_subject,
    "text": ml_text
};
transport.sendMail(ml_options, (err,info) => {

    if(err) console.log("SEND_MAIL: " + err);
        else console.log('SEND_MAIL:', "OPERATION_SUCCESSFULLY");
});
}
