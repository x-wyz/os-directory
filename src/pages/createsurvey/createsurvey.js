import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { faCheckSquare, faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { faFont } from  "@fortawesome/free-solid-svg-icons";

import Button from '../../components/button/button';
import FormControl from '../../components/formcontrol/formcontrol';
import SelectInput from '../../components/selectinput/selectinput';

import './createsurvey.css';

class CreateSurvey extends Component {
	constructor(props){
		super(props);
		this.state = {
			surveyfields: [
			],
			surveytitle: '',
			surveyintroduction: '',
			num: 0
		}
	}

	createfield = (type) => {
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
				ref: '',
				options: []
			}
		}

		surveyfields.push(newField);

		this.setState({
			surveyfields: surveyfields,
			num: num + 1
		})
	}

	header = (formfield) => {
		const { fieldtype } = formfield;

		return (
			<div className="survey-create-header">
				<p className={`survey-create-type ff-${fieldtype}`}>
					{
						fieldtype === 'radio'
						?
						'R'
						:
						fieldtype === 'checkbox'
						?
						'C'
						:
						'T'
					}
				</p>
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
			</div>
		)
	}

	footer = (formfield) => {
		return (
			<div className="create-survey-formfield-footer">
				<Button text="Remove" type="button" className="survey-remove-formfield-btn" onClick={() => this.delete(formfield.id)} />
			</div>
		)
	}

	delete = (id) => {
		const { surveyfields } = this.state;
		const filteredSurveyFields = surveyfields.filter(fields => fields.id != id);

		this.setState({
			surveyfields: filteredSurveyFields
		})
	}

	selectfields = (formfield) => {
		const { options, ref, id } = formfield;

		return (
			<div className="survey-field-container">
			{
				this.header(formfield)
			}
				<div className="create-survey-selects-container">
					<div className="selects-options-container">
						{
							options.map(option => {
								return (
									<div className="create-survey-option-container">
										<Button text="Del" type="button" className="create-survey-remove-option" onClick={() => this.removeOption(id, option.id)} />
										<p className="create-survey-option">
											{
												option.option
											}
										</p>
									</div>
								)
							})
						}
					</div>
					<div className="create-survey-options-input-container">
						<input type="text" className="create-survey-create-option" onChange={(event) => this.updateNewOption(event, formfield.id)} value={ref} />
						<Button text='Add' type="button" onClick={() => this.addOption(id)} className="create-survey-add-option-btn" />
					</div>
				</div>
			{
				this.footer(formfield)
			}
			</div>
		)
	}

	formfield = (formfield) => {
		const { id, max, min } = formfield;

		return (
			<div className="survey-field-container">
			{
				this.header(formfield)
			}
			<div className="selects-options-container selects-options-formfield">
				<div className="create-survey-formfield-options">
					<SelectInput options={['text', 'number']} handler={(type) => {
						this.updateType(id, type);
					}} />
				</div>
				{
					formfield.type === 'number'
					?
					<div className="create-survey-numberfield">
						<label for={`create-survey-min-${id}`} className="create-survey-number-label">Min: </label>
						<input onChange={(event) => this.updateNum(event, id)} id={`create-survey-min-${id}`} type="number" max={max} value={min} className="create-survey-number-input" name="min" />

						<label for={`create-survey-max-${id}`} className="create-survey-number-label">Max: </label>
						<input onChange={(event) => this.updateNum(event, id)} id={`create-survey-max-${id}`} type="number" min={min} value={max} className="create-survey-number-input" name="max" />
					</div>
					:
					null
				}
			</div>
			{
				this.footer(formfield)
			}
			</div>
		)
	}

	update = (event) => {
		let { surveyfields } = this.state;

		surveyfields = surveyfields.map(field => {
			if (field.id == event.target.id){
				field[event.target.name] = event.target.value;
				return field;
			}
			else {
				return field;
			}
		})

		this.setState({surveyfields});

	}

	updateIntroduction = (event) => {
		this.setState({
			[event.target.name]:event.target.value
		})
	}

	addOption = (id) => {
		let { surveyfields } = this.state;

		surveyfields = surveyfields.map(field => {
			if (field.id == id) {
				field.options.push({
					option: field.ref,
					id: uuidv4()
				})
				field.ref = '';
				return field;
			}
			else {
				return field;
			}
		})

		this.setState({surveyfields});
	}

	updateNewOption = (event, id) => {
		let { surveyfields } = this.state;

		surveyfields = surveyfields.map(field => {
			if (field.id == id) {
				field.ref = event.target.value;
				return field;
			}
			else {
				return field;
			}
		})

		this.setState({surveyfields});
	}

	removeOption = (id, optId) => {
		let { surveyfields } = this.state;

		surveyfields = surveyfields.map(field => {
			if (field.id == id){
				field.options = field.options.filter(option => option.id != optId);
				return field;
			}
			else {
				return field;
			}
		})

		this.setState({surveyfields});

	}

	updateType = (id, type) => {
		let { surveyfields } = this.state;

		surveyfields = surveyfields.map(field => {
			if (field.id == id){
				field.type = type;
				return field;
			}
			else {
				return field;
			}
		})

		this.setState({surveyfields})
	}

	updateNum = (event, id) => {
		let { surveyfields } = this.state;

		surveyfields = surveyfields.map(field => {
			if (field.id == id) {
				field[event.target.name] = event.target.value;
				return field;
			}
			else {
				return field;
			}
		})
		this.setState({surveyfields});
	}

	submit = (event) => {
		event.preventDefault();
	}

	render(){
		const { surveyfields, surveytitle, surveyintroduction } = this.state;

		return (
			<div className="createsurvey-page">
				<div className="create-survey-contents">
					<h2 className="create-survey-title">Survey builder</h2>
					<div className="create-survey-introduction">
						<input type="text" className="create-survey-introduction-title" value={surveytitle} onChange={this.updateIntroduction} name="surveytitle" />
						<textarea className="create-survey-description" value={surveyintroduction} onChange={this.updateIntroduction} name="surveyintroduction" />
					</div>
					{
						surveyfields.map(field => {
							if (field.fieldtype === 'formfield'){
								return this.formfield(field);
							}
							else if (field.fieldtype === 'radio') {
								return this.selectfields(field);
							}
							else if (field.fieldtype === 'checkbox') {
								return this.selectfields(field);
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
