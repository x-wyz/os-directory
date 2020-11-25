import React, { Component } from 'react';
import './navbar.css';

import NavigationLink from '../navigationlink/navigationlink';

import { faUser, faSearch, faHome, faComments, faProjectDiagram, faSignOutAlt as signOut, faSignInAlt as signIn } from '@fortawesome/free-solid-svg-icons';

class Navbar extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className="navbar">
				<NavigationLink icon={faHome} link="/" iconClass="home-ico" text="Home" />
				<NavigationLink icon={faSearch} link="/search" iconClass="search-ico" text="Search" />
				{
					this.props.user 
					? 
					<React.Fragment>
						<NavigationLink icon={faComments} link="/messages" iconClass="message-ico" text="Messages" />
						<NavigationLink icon={faProjectDiagram} link="/project" iconClass="project-ico" text="Userprojects" />
						<NavigationLink icon={faUser} link="/profile" iconClass="profile-ico" text="Profile" />
						<NavigationLink icon={signOut} text="Sign out" link="/" iconClass="signout-ico" addText={true} />
					</React.Fragment>
					:
					<NavigationLink icon={signIn} text="Login" link="/" iconClass="signin-ico" addText={true} />
				}
			</div>
		)
	}
}

export default Navbar;
