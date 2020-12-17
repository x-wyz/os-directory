import React, { Component } from 'react';

import Button from '../../components/button/button';
import ProfileUpdater from '../../components/profileupdater/profileupdater';

// import PasswordModal from '../../modals/changepassword/changepassword'; 

import './profile.css';

class Profile extends Component {
	constructor(props){
		super(props);
		this.state = {
			username: this.props.user.username || "",
			description: this.props.user.description || "",
			passwordmodal: false
		}
		this.update = this.update.bind(this);
		this.submitChanges = this.submitChanges.bind(this);

		this.showModal = this.showModal.bind(this);
	}

	update(event){
		this.setState({
			[event.target.name]: event.target.value
		})
		console.log(123)
	}

	submitChanges(event){
		event.preventDefault();

		// sends change req to server and updates app
	}

	showModal(){
		const { passwordmodal } = this.state;

		this.setState({
			passwordmodal: !passwordmodal
		})
	}

	render(){
		const { username, description, user } = this.state;

		return (
			<div className="profilepage">
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
		)
	}

}

export default Profile;
