const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const FormElement = mongoose.Schema({
	type: {
		type: String,
		enum: ['text', 'number', 'selectone', 'selectmulti'],
		required: true
	},
	options: {
		type: [String],
		default: []
	},
	isRequired: {
		type: Boolean,
		default: false
	}
})

const Form = mongoose.Schema({
	form: {
		type: [FormElement],
		default: []
	}
})

const PublicFormSchema = mongoose.Schema({
	id: {
		type: String,
		default: uuidv4
	},
	owner: {
		type: String,
		minlength: 3,
		maxlength: 30,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	},
	endDate: {
		type: Date
	},
	name: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	form: {
		type: Form
	},
	results: {
		type: [Form],
		default: []
	}
})

module.exports = mongoose.model('Publicform', PublicFormSchema);
