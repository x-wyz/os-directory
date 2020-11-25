import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
	constructor(props){
		super(props);

		this.state = {
			user: null
		}

		this.login = this.login.bind(this);
		this.logoff = this.logoff.bind(this);
	}

	login(user){
		this.setState({user})
	}

	logoff(){
		this.setState({user: null})
	}

	render(){
		return (
			<div className="App">
		      <Switch>

		      </Switch>
		    </div>
		)
	}
}

export default App;
