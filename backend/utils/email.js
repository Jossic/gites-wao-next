import nodeMailer from 'nodemailer';

const sendEmailWithNodemailer = (req, res, emailData) => {
	const transporter = nodeMailer.createTransport({
		host: 'smtp.gmail.com',
		port: 587,
		secure: false,
		requireTLS: true,
		auth: {
			user: process.env.NODE_MAILER_USER,
			pass: process.env.NODE_MAILER_PASS,
		},
		tls: {
			ciphers: 'SSLv3',
		},
	});

	return transporter
		.sendMail(emailData)
		.then((info) => {
			console.log(`Message envoyé: ${info.response}`);
			// return res.json({
			// 	success: true,
			// });
		})
		.catch((err) => console.log(`Problem sending email: ${err}`));
};

export default sendEmailWithNodemailer;
