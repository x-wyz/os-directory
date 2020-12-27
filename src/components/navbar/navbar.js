import React, { Component } from 'react';
import { faUser, faSearch, faHome, faComments, faProjectDiagram, faSignOutAlt as signOut, faSignInAlt as signIn } from '@fortawesome/free-solid-svg-icons';

import NavigationLink from '../navigationlink/navigationlink';

import LoginRegister from '../../modals/loginregister/loginregister';

import './navbar.css';

class Navbar extends Component {
	constructor(props){
		super(props);

		this.state = {
			showLogin: false
		}
	}

	toggleLogin = () => {
		this.setState({
			showLogin: !this.state.showLogin
		})
	}

	render(){
		const { showLogin } = this.state;
		return (
			<div>
				{
					showLogin ? <LoginRegister close={this.toggleLogin} /> : null
				}
				<div className="navbar">
					<NavigationLink icon={faHome} link="/home" iconClass="home-ico" text="Home" />
					<NavigationLink icon={faSearch} link="/search" iconClass="search-ico" text="Search" />
					{
						this.props.user 
						? 
						<React.Fragment>
							<NavigationLink icon={faComments} link="/messages" iconClass="message-ico" text="Messages" />
							<NavigationLink icon={faProjectDiagram} link="/projects" iconClass="project-ico" text="Projects" />
							<NavigationLink icon={faUser} link="/profile" iconClass="profile-ico" text="Profile" />
							<NavigationLink onClick={this.props.logoff} icon={signOut} text="Sign out" link="#" iconClass="signout-ico" addText={true} />
						</React.Fragment>
						:
						<NavigationLink icon={signIn} text="Login" link="#" iconClass="signin-ico" addText={true} onClick={this.toggleLogin} />
					}
				</div>
			</div>
		)
	}
}

export default Navbar;
