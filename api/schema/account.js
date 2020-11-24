const mongoose = require('mongoose');

const AccountSchema = mongoose.Schema({
	email: {
		type: String,
		minlength: 5,
		maxlength: 254,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	}
})

module.exports = mongoose.model('Account', AccountSchema);
