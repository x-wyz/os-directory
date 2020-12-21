import React, { Component } from 'react';
import Button from '../../components/button/button';
import FormControl from '../../components/formcontrol/formcontrol';

import SelectInput from '../../components/selectinput/selectinput';

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
		this.delete = this.delete.bind(this);

		// For consistency not needed.
		this.selectMulti = this.selectMulti.bind(this);
		this.selectOne = this.selectOne.bind(this);
		this.formfield = this.formfield.bind(this);
		// ==========

		this.header = this.header.bind(this);
		this.footer = this.footer.bind(this);
	}

	createfield(type){
		const { surveyfields, num } = this.state;
		let newField = {
			id: num,
			title: "",
			description: ""
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

	header(formfield){
		return (
			<div className="survey-text-inputfield">
				<input type="text" onChange={(event) => {
					event.target.id = formfield.id;
					this.update(event);
				}} value={formfield.title} className="survey-field-title" name="title" placeholder="Header (recommended)" />

				<textarea value={formfield.description} placeholder="Optional description..." onChange={(event) => {
					event.target.id = formfield.id;
					this.update(event);
				}} name="description" className="survey-field-description" />

			</div>
		)
	}

	footer(formfield){
		return (
			<div className="create-survey-formfield-footer">
				<Button text="Remove" type="button" className="survey-remove-formfield-btn" onClick={() => this.delete(formfield.id)} />
			</div>
		)
	}

	delete(id){
		const { surveyfields } = this.state;
		const filteredSurveyFields = surveyfields.filter(fields => fields.id != id);

		this.setState({
			surveyfields: filteredSurveyFields
		})
	}

	selectMulti(formfield){
		return (
			<div className="survey-field-container">
			{
				this.header(formfield)
			}
			{
				this.footer(formfield)
			}
			</div>
		)
	}

	selectOne(formfield){
		return (
			<div className="survey-field-container">
			{
				this.header(formfield)
			}
			{
				this.footer(formfield)
			}
			</div>
		)
	}

	formfield(formfield){
		return (
			<div className="survey-field-container">
			{
				this.header(formfield)
			}
			{
				this.footer(formfield)
			}
			</div>
		)
	}

	update(event){
		const { surveyfields } = this.state;

		const updatedSurveyFields = surveyfields.map(field => {
			if (field.id == event.target.id){
				field[event.target.name] = event.target.value;
				return field;
			}
			else {
				return field;
			}
		})

		this.setState({
			surveyfields: updatedSurveyFields
		})

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
					{
						surveyfields.map(field => {
							if (field.fieldtype === 'formfield'){
								return this.formfield(field);
							}
							else if (field.fieldtype === 'radio') {
								return this.selectMulti(field);
							}
							else if (field.fieldtype === 'checkbox') {
								return this.selectOne(field);
							}
						})
					}
					<div className="create-survey-controls">
						<FormControl iconClass="survey-text-icon" title="Form field" description="Text and number fields" icon={faFont} handler={() => this.createfield('formfield')} />
						<FormControl title="Checkbox" description="Select multiple" icon={faCheckSquare} handler={() => this.createfield('checkbox')} />
						<FormControl title="Radio" description="Select one" icon={faCheckCircle} handler={() => this.createfield('radio')} />
					</div>
					<div className="create-survey-buttons-container">
						<Button type="button" text="Preview" className="preview-survey-button" />
						<Button type="button" text="Submit" onClick={this.submit} className="submit-survey-button" />
					</div>
				</div>
			</div>
		)
	}
}

export default CreateSurvey;
