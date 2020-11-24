const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const Account = require('./routes/account');
const Project = require('./routes/project');
const User = require('./routes/user');
const Support = require('./routes/support');
const Form = require('./routes/form');

app.use(express.json());

app.use(Account);
app.use(Project);
app.use(User);
app.use(Support);
app.use(Form);

app.use(cors());

mongoose.connect('mongodb://localhost/osdirectory_db', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true
})

app.listen(3001, ()=> {
	console.log(`Server running on port ${3001}.`)
});
