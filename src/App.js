import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/navbar/navbar';

// Pages
import SearchPage from './pages/searchpage/searchpage';
// import Messages from './pages/messages/messages';
import Profile from './pages/profile/profile';

class App extends Component {
	constructor(props){
		super(props);

		this.state = {
			user: {
				name:''
			}
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
		const { user } = this.state;
		return (
			<div className="App">
				<Navbar user={user} logoff={this.logoff} />
				<div className="content">
				    <Switch>
				    	<Route path="/search" component={SearchPage} />
				    	{ /* <Route path="/messages" component={Messages} /> */ }

				    	<Route path="/profile">
				    		<Profile user={user} />
				    	</Route>

				    </Switch>
				</div>
		    </div>
		)
	}
}

export default App;
