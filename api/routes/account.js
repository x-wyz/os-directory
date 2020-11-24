const express = require('express');
const router = express.Router();

const cors = require('cors');

const bcrypt = require('bcrypt-nodejs');

const Account = require('../schema/account');
const User = require('../schema/user');

router.use(cors());

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

router.post('/register', async (req, res) => {
	let { email, password, passwordConfirm, name } = req.body;
	const errors = [];

	// Error checking
	if (!emailRegex.test(email)){
		errors.push('Email address must be valid.');
	}

	if (password !== passwordConfirm) {
		errors.push('Password does not match.')
	}

	if (password.length < 6 || password.length > 25) {
		errors.push('Password must be between 6 and 25 characters.')
	} else {
		// If password meets standards hides password before storing in database
		// Do not use in actual production. This specific version of bcrypt is no longer supported.
		const hashedPwd = bcrypt.hashSync(password);
		password = hashedPwd;
	}

	// If there are not error insert into database otherwise send error back to client and do nothing with the database.
	if (errors.length === 0) {

		// Create a new account and user template
		const account = new Account({
			email: email,
			password: password
		})

		const user = new User({
			email: email,
			username: name
		})

		try {
			// Inserts into database
			const savedAccount = await account.save();
			const savedUser = await user.save();

			// If account has been inserted successfully then return a message saying it was successful.
			res.json({
				error: false,
				message: 'Account has been successfully created.'
			});
		}
		catch(err){
			res.json({
				error: true,
				message: 'Your email is associated with another account.'
			})
		}
	}
	else {
		// Returns the first error in the errors array if any.
		res.json({
			error: true,
			message: errors
		})
	}
})

router.post('/login', async (req, res) => {
	const { email, password } = req.body;
	const errors = [];

	// Error checking
	if (!emailRegex.test(email)){
		errors.push('EMAIL: Must be a valid email address.')
	}

	// If there are no errors insert into database
	if (errors.length === 0){
		try {
			// Returns password of associated account and validates it.
			const account = await Account.find({email: email}, 'password');
			
			// Do not use in actual production. This specific version of bcrypt is no longer supported.
			const validate = bcrypt.compareSync(password, account[0].password);

			if (validate){
				const updateUser = await User.updateOne({email}, {$set: {lastactive: Date.now()}})
				const user = await User.findOne({email: email });

				// Return user object if validated.
				res.json({
					error: false,
					user: user
				});
			}
			else {
				res.json({
					error: true,
					message: 'Email and/or password does not match.'
				})
			}
		}
		catch(err){
			res.json({
				error: true,
				message: 'There was an error when trying to log you in, please try again later.'
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
