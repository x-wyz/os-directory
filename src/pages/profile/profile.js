import React, { Component } from 'react';

import Button from '../../components/button/button';
import ProfileUpdater from '../../components/profileupdater/profileupdater';

import UpdatePassword from '../../modals/updatepassword/updatepassword'; 

import './profile.css';

class Profile extends Component {
	constructor(props){
		super(props);
		this.state = {
			username: this.props.user.username || "",
			description: this.props.user.description || "",
			passwordmodal: false
		}
	}

	update = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	submitChanges = (event) => {
		event.preventDefault();

		// sends change req to server and updates app
	}

	showModal = () => {
		const { passwordmodal } = this.state;

		this.setState({
			passwordmodal: !passwordmodal
		})
	}

	render(){
		const { username, description, user, passwordmodal } = this.state;

		return (
			<React.Fragment>
				{
					passwordmodal
					?
					<UpdatePassword exit={this.showModal} />
					:
					null
				}
				<div className="profilepage">
					<h3 className="profile-title">Profile</h3>
					<div className="profilepage-basic-information">
						<h3 className="profilepage-basic-header">Basic Information</h3>
						<ProfileUpdater label="Username" type="text" handler={this.update} name="username" value={username} />
						<ProfileUpdater label="Description" type="textarea" handler={this.update} name="description" value={description} />
						<Button type="button" text="Save" onClick={this.submitChanges} className="profile-update-button" />
					</div>
					<div className="profilepage-change-passsword">
						<Button type="button" text="Change Password" onClick={this.showModal} className="changepassword-button" />
					</div>
				</div>
			</React.Fragment>
		)
	}

}

export default Profile;
