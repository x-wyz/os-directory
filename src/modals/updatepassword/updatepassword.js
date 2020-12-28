import React, { Component } from 'react';

import InputField from '../../components/inputfield/inputfield';
import Button from '../../components/button/button';
import ModalBase from '../../components/modalbase/modalbase';
import ServerMessage from '../../components/servermessage/servermessage';

import './updatepassword.css';

class UpdatePassword extends Component {
	constructor(props){
		super(props);
		this.state = {
			oldpassword: '',
			newpassword: '',
			confirmnewpassword: '',
			servermessage: null,
			servererror: false
		}
	}

	update = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	submitNewPassword = (event) => {
		event.preventDefault();
	}

	render(){
		const { oldpassword, newpassword, confirmnewpassword, servermessage } = this.state;

		return (
			<ModalBase exitFunction={this.props.exit}>
				<div className="updatepassword-modal-container">
					<h4 className="updatepassword-modal-title">Update Password</h4>
					{
						servermessage
						?
						<ServerMessage message={servermessage} error={this.state.servererror} />
						:
						null
					}
					<InputField 
						label="Current password" 
						onChange={this.update} 
						inputClass="updatepassword-modal-input" 
						labelClass="update-password-label"
						type="password" 
						value={oldpassword}
						name="oldpassword"
					/>
					<InputField 
						label="New password" 
						onChange={this.update} 
						inputClass="updatepassword-modal-input" 
						labelClass="update-password-label"
						type="password" 
						value={newpassword}
						name="newpassword"
					/>
					<InputField 
						label="Confirm new password" 
						onChange={this.update} 
						inputClass="updatepassword-modal-input" 
						labelClass="update-password-label"
						type="password" 
						value={confirmnewpassword}
						name="confirmnewpassword"
					/>

					<Button type='button' text="Update Password" onClick={this.submitNewPassword} className="updatepassword-modal-submit" />
				</div>
			</ModalBase>
		)
	}
}

export default UpdatePassword;
