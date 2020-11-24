const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const UserMessage = mongoose.Schema({
	sender: {
		type: String,
		required: true
	},
	sendername: {
		type: String,
		required: true
	},
	receiver: {
		type: String,
		required: true
	},
	body: {
		type: String,
		required: true
	},
	time: {
		type: Date,
		default: Date.now
	},
	basis: {
		type: String,
		default: "none"
	},
	id: {
		type: String,
		default: uuidv4
	}
})

const UserSettings = mongoose.Schema({
	style: {
		type: String,
		default: 'default'
	}
})

const UserProjects = mongoose.Schema({
	id: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	owner: {
		type: String,
		minlength: 3,
		maxlength: 30,
		required: true
	},
	description: {
		type: String,
		required: true
	}
})

const UserData = mongoose.Schema({
	id: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	owner: {
		type: String,
		minlength: 3,
		maxlength: 30,
		required: true
	}
})

const UserSchema = mongoose.Schema({
	userid: {
		type: String,
		default: uuidv4
	},
	username: {
		type: String,
		minlength: 3,
		maxlength: 30,
		default: 'user'
	},
	messages: {
		type: [UserMessage],
		default: []
	},
	projects: {
		type: [UserProjects],
		default: []
	},
	datacollection: {
		type: [UserData],
		default: []
	},
	description: {
		type: String
	},
	accountcreation: {
		type: Date,
		default: Date.now
	},
	settings: {
		type: UserSettings
	},
	lastactive: {
		type: Date,
		required: true,
		default: Date.now
	},
	blocked: {
		type: [String],
		default: []
	},
	email: {
		type: String,
		required: true
	}
})

module.exports = mongoose.model('User', UserSchema);
