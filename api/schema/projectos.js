const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const ProjectLinks = mongoose.Schema({
	hypertext: {
		type: String,
		default: '-'
	},
	link: {
		type: String,
		required: true
	}
})

const ProjectUsers = mongoose.Schema({
	name: {
		type: String,
		minlength: 3,
		maxlength: 30,
		required: true
	},
	email: {
		type: String,
		unique: true,
		required: true
	},
	role: {
		type: String,
		enum: ['user', 'mod', 'owner']
	}
})

const ProjectMessage = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	},
	message: {
		type: String,
		required: true
	}
})

const ProjectTask = mongoose.Schema({
	taskid: {
		type: String,
		default: uuidv4
	},
	task: {
		type: String,
		required: true
	},
	users: {
		type: [ProjectUsers],
		default: []
	},
	messages: {
		type: [ProjectMessage],
		default: []
	},
	status: {
		type: String,
		enum: ['active', 'archive'],
		default: 'active'
	}
})

const OtherDescription = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	}
})

const ProjectSchema = mongoose.Schema({
	id: {
		type: String,
		default: uuidv4
	},
	name: {
		type: String,
		maxlength: 150
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
	},
	requirements: {
		type: [String],
		default: []
	},
	creationdate: {
		type: Date,
		required: true,
		default: Date.now
	},
	others: {
		type: [OtherDescription],
		default: []
	},
	type: {
		type: String,
		enum: ['public-open', 'public-appl', 'hidden'],
		required: true,
		default: 'public-open'
	},
	publiclinks: {
		type: [ProjectLinks],
		default: []
	},
	blockedusers: {
		// Blocked user's email, user will not be able to rejoin group
		type: [String],
		default: []
	},
	status: {
		type: String,
		enum: ['archive', 'new', 'ongoing'],
		required: true
	},

	// WITHIN PROJECT

	users: {
		type: [ProjectUsers],
		default: []
	},
	pendingusers: {
		type: [ProjectUsers],
		default: []
	},
	messages: {
		type: [ProjectMessage],
		default: []
	},
	tasks: {
		type: [ProjectTask],
		default: []
	},
	internallinks: {
		type: [ProjectLinks],
		default: []
	}
})

module.exports = mongoose.model('Project', ProjectSchema);
