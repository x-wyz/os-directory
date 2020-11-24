const express = require('express');
const router = express.Router();

const Project = require('../schema/projectos');
const PublicForm = require('../schema/publicform');

router.post('/search', async (req, res) => {
	// Currently useless as I am just going to return everything and have the front end deal with it
	// Will implement filters in the future to avoid sender over a huge hunk of data.
	const { filters } = req.body;

	try{

	}
	catch (err) {
		res.json({
			error: true,
			message: "Unable to get projects. Please try again later."
		})
	}
})

module.exports = router;
