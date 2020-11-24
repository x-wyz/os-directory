const express = require('express');
const router = express.Router();

const User = require('../schema/user');

router.post('/updateuser', async (req, res) => {
	const { username, description, settings, email } = req.body;
	const errors = [];

	if(!username) {
		errors.push('Username can not be blank.');
	}

	if (errors.length === 0) {
		try {
			const updateuser = await User.updateOne({email}, {$set: {
				username, description, settings
			}})

			res.json({
				error: false,
				message: "Updated profile."
			})
		}
		catch (err){
			res.json({
				error:true,
				message: "There was an error when trying to update your profile. Please try again later."
			})
		}
	}
	else {
		res.json({
			error: true,
			message: errors
		})
	}
})

router.post('/messageuser', async (req, res) => {
	const { sender, receiver, sendername, basis, message:body } = req.body;
	const errors = [];

	if (!sender) {
		errors.push('Sender cannot be empty.');
	}

	if (!receiver) {
		errors.push('Receiver cannot be empty.');
	}

	if (!body) {
		errors.push('You cannot send an empty message.');
	}

	console.log(receiver)

	if (errors.length === 0){
		try {
			const user = await User.findOne({email: receiver});
			const messages = user.messages;
			const newmessage = {
				sender, receiver, basis, body, sendername
			}
			messages.push(newmessage);
			const updatedmessages = await User.updateOne({email: receiver}, {$set: {messages}});

			res.json({
				error: false,
				message: "Message has been sent."
			})
		}
		catch (err){
			res.json({
				error: true,
				message: "There was an error when trying to send your message.",
				err: err
			})
		}

	}
	else {
		res.json({
			error: true,
			message: errors
		})
	}
})

module.exports = router;
