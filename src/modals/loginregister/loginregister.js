import React, { Component } from 'react';
import './loginregister.css';

import ModalBase from '../../components/modalbase/modalbase';
import InputField from '../../components/inputfield/inputfield';
import Button from '../../components/button/button';
import ServerMessage from '../../components/servermessage/servermessage';

class LoginRegister extends Component {
	constructor(props){
		super(props);
		this.state = {
			login: true,
			loginEmail: '',
			loginPassword: '',

			registerUsername: '',
			registerEmail: '',
			registerPassword: '',
			registerPasswordConfirm: '',

			servermessage: 'null',
			servererror: false
		}
		this.swap = this.swap.bind(this);
		this.submitRegister = this.submitRegister.bind(this);
		this.submitLogin = this.submitLogin.bind(this);

		this.loginContent = this.loginContent.bind(this);
		this.registerContent = this.registerContent.bind(this);

		this.update = this.update.bind(this);
	}

	swap(state){
		this.setState({
			login: state
		})
	}

	update(event){
		this.setState({
			[event.target.name]:event.target.value
		})
	}

	submitRegister(event){
		event.preventDefault();
	}

	submitLogin(event){
		event.preventDefault();
	}

	loginContent(){
		const { loginEmail, loginPassword } = this.state;
		return (
			<form className="loginmodal-login-form" onSubmit={this.submitLogin}>
				<InputField label="Email" onChange={this.update} value={loginEmail} name="loginEmail" type="text" />
				<InputField label="Password" onChange={this.update} value={loginPassword} name="loginPassword" type="password" />
				<Button text="Sign In" className="loginmodal-submit-button" type="submit"/>
			</form>
		)
	}

	registerContent(){
		const { registerEmail, registerPassword, registerPasswordConfirm, registerUsername } = this.state;
		return (
			<form className="loginmodal-register-form" onSubmit={this.submitRegister}>
				<InputField label="Username" onChange={this.update} value={registerUsername} name="registerUsername" type="text" />
				<InputField label="Email" onChange={this.update} value={registerEmail} name="registerEmail" type="email" />
				<InputField label="Password" onChange={this.update} value={registerPassword} name="registerPassword" type="password" />
				<InputField label="Password Confirm" onChange={this.update} value={registerPasswordConfirm} name="registerPasswordConfirm" type="password" />
				<Button text="Sign Up" className="loginmodal-submit-button" type="submit"/>
			</form>
		)
	}

	render(){
		const { login, servermessage } = this.state;
		return (
			<div className="loginregister-hidden-overflow">
				<ModalBase exitFunction={this.props.close}>
					<div className="loginmodal-content-container">
						<div className="loginmodal-header">
							<div onClick={() => this.swap(true)} className={`loginmodal-title loginmodal-login-header ${login ? 'current-loginmodal-title' : 'not-current-loginmodal-title'}`}>Login</div>
							<div onClick={() => this.swap(false)} className={`loginmodal-title ${!login ? 'current-loginmodal-title' : 'not-current-loginmodal-title'}`}>Register</div>
						</div>
						{
							login
							?
							this.loginContent()
							:
							this.registerContent()
						}
					</div>
				</ModalBase>
				{
					servermessage
					?
					<ServerMessage message={servermessage} error={this.state.servererror} />
					:
					null
				}
			</div>
		)
	}
}

export default LoginRegister;
