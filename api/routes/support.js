const express = require('express');
const router = express.Router();

const nodemailer = require('nodemailer');

const Account = require('../schema/account');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAILPASSWORD
  }
});

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

// Does not actually recover email this just tests that it actually sends out an email.
// Updating once I finish the front end.

// Update password to be an auto generated password. Allow user to login using that password.
// Remind them to update their password.
router.post('/recoveraccount', (req, res) => {
	const { email } = req.body;
	const errors = [];

	if (!emailRegex.test(email)) {
		errors.push('Please enter a valid email.')
	}

	if (errors.length === 0) {
		let mailOptions = {
			from: process.env.EMAIL,
			to: email,
			subject: 'Recover account',
			text: `Recovery email test.`
		}

		transporter.sendMail(mailOptions, function(error, info){
			if (error) {
				console.log('Error!');
			} else {
				console.log('Recovery email sent.')
			}
		});

		res.json("Please check your email.");
	}
	else {
		res.json({errors})
	}
})

module.exports = router;
