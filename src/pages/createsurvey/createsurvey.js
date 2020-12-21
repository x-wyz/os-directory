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
		this.createSelectMulti = this.createSelectMulti.bind(this);
		this.createSelectOne = this.createSelectOne.bind(this);
		this.createFormField = this.createFormField.bind(this);

		this.selectMulti = this.selectMulti.bind(this);
		this.selectOne = this.selectOne.bind(this);
		this.formfield = this.formfield.bind(this);

		this.update = this.update.bind(this);

		this.submit = this.submit.bind(this);
	}

	createSelectMulti(){
		const { surveyfields, num } = this.state;

		surveyfields.push({
			fieldtype: 'checkbox',
			id: num,
			title: 'Section header',
			description: '',
			options: []
		})

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

	createSelectOne(){
		const { surveyfields, num } = this.state;

		surveyfields.push({
			fieldtype: 'radio',
			id: num,
			title: 'Section header',
			description: '',
			options: []
		})

		this.setState({
			surveyfields: surveyfields,
			num: num + 1
		})
	}

	selectOne(){
		return (
			<div>
				selectone
			</div>
		)
	}

	createFormField(){
		const { surveyfields, num } = this.state;

		surveyfields.push({
			fieldtype: 'formfield',
			id: num,
			type: 'text',
			max: '',
			min: '',
			title: 'Section header',
			description: ''
		})

		this.setState({
			surveyfields: surveyfields,
			num: num + 1
		})

		console.log('created form field');
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
						<FormControl iconClass="survey-text-icon" title="Form field" description="Text and number fields" icon={faFont} handler={this.createFormField} />
						<FormControl title="Checkbox" description="Select multiple" icon={faCheckSquare} handler={this.createSelectMulti} />
						<FormControl title="Radio" description="Select one" icon={faCheckCircle} handler={this.createSelectOne} />
					</div>
				</div>
			</div>
		)
	}
}

export default CreateSurvey;
