import React, { Component } from 'react';
import Inputfield from '../../components/inputfield/inputfield';
import Button from '../../components/button/button';
import FormControl from '../../components/formcontrol/formcontrol';

import { faCheckSquare, faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { faFont } from  "@fortawesome/free-solid-svg-icons";

import './createsurvey.css';

class CreateSurvey extends Component {
	constructor(props){
		super(props);
		this.state = {
			surveyfields: [
			]
		}
		this.createSelectMulti = this.createSelectMulti.bind(this);
		this.createSelectOne = this.createSelectOne.bind(this);
		this.createFormField = this.createFormField.bind(this);

		this.update = this.update.bind(this);

		this.submit = this.submit.bind(this);
	}

	createSelectMulti(){
		return (
			<div>
			</div>
		)
	}

	createSelectOne(){
		return (
			<div>
			</div>
		)
	}

	createFormField(){
		return (
			<div>
			</div>
		)
	}

	update(event){

	}

	submit(event){
		event.preventDefault();
	}

	render(){
		const { surveyfields } = this.state;

		return (
			<div className="createsurvey-page">
				<div className="create-survey-contents">
					<h2 className="create-survey-title">Survey builder</h2>
					<div className="create-survey-controls">
						<FormControl iconClass="survey-text-icon" title="Form field" description="Text and number fields" icon={faFont} />
						<FormControl title="Checkbox" description="Select multiple" icon={faCheckSquare} />
						<FormControl title="Radio" description="Select one" icon={faCheckCircle} />
					</div>
				</div>
			</div>
		)
	}
}

export default CreateSurvey;
