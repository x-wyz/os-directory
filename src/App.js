import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/navbar/navbar';

// Pages
import SearchPage from './pages/searchpage/searchpage';

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
				<Navbar />
			    <Switch>
			    	<Route path="/search" component={SearchPage} />
			    </Switch>
		    </div>
		)
	}
}

export default App;
