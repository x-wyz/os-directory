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
			],
			num: 0
		}

		this.update = this.update.bind(this);

		this.submit = this.submit.bind(this);

		this.createfield = this.createfield.bind(this);
	}

	createfield(type){
		const { surveyfields, num } = this.state;
		let newField = {
			id: num,
			title: "Section header",
			description: "..."
		}

		if (type === 'formfield') {
			newField = {
				...newField,
				type: 'text',
				max: 0,
				min: 0,
				fieldtype: type
			}
		} else {
			newField = {
				...newField,
				fieldtype: type,
				options: []
			}
		}

		surveyfields.push(newField);

		this.setState({
			surveyfields: surveyfields,
			num: num + 1
		})
	}

	selectMulti(){
		return (
			<div>
				selectmulti
			</div>
		)
	}

	selectOne(){
		return (
			<div>
				selectone
			</div>
		)
	}

	formfield(){
		return (
			<div>
				formfield
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

		console.log(this.state);

		return (
			<div className="createsurvey-page">
				<div className="create-survey-contents">
					<h2 className="create-survey-title">Survey builder</h2>
					<div className="create-survey-controls">
						<FormControl iconClass="survey-text-icon" title="Form field" description="Text and number fields" icon={faFont} handler={() => this.createfield('formfield')} />
						<FormControl title="Checkbox" description="Select multiple" icon={faCheckSquare} handler={() => this.createfield('checkbox')} />
						<FormControl title="Radio" description="Select one" icon={faCheckCircle} handler={() => this.createfield('radio')} />
					</div>
				</div>
			</div>
		)
	}
}

export default CreateSurvey;
