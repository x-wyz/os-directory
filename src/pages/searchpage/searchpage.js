import React, { Component } from 'react';
import './searchpage.css';

import InputField from '../../components/inputfield/inputfield';
import Button from '../../components/button/button';

import PreviewResult from '../../components/previewresult/previewresult';

import PreviewPage from '../previewpage/previewpage';

class SearchPage extends Component {
	constructor(props){
		super(props);
		this.state = {
			searchterm: "",
			filter: {
				type: "all",
				date: undefined,
				expbb: 'early'
			},
			preview: {
				type: 'Survey',
				id: '12312-123-1-23-123'
			},
			results: [
				{
					title: 'Firebox',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra rutrum mi, non hendrerit massa dignissim sed. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
					date: '2012-04-45',
					owner: 'the glorious me',
					type: 'project',
					id: '1231231214134'
				},
				{
					title: 'Firebox',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra rutrum mi, non hendrerit massa dignissim sed. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
					date: '2012-04-45',
					owner: 'the glorious me',
					type: 'survey',
					id: '1231231214134'
				},
				{
					title: 'Firebox',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra rutrum mi, non hendrerit massa dignissim sed. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
					date: '2012-04-45',
					owner: 'the glorious me',
					type: 'survey',
					id: '1231231214134'
				},
				{
					title: 'Firebox',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra rutrum mi, non hendrerit massa dignissim sed. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
					date: '2012-04-45',
					owner: 'the glorious me',
					type: 'data gathering',
					id: '1231231214134'
				},
				{
					title: 'Firebox',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra rutrum mi, non hendrerit massa dignissim sed. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
					date: '2012-04-45',
					owner: 'the glorious me',
					type: 'survey',
					id: '1231231214134'
				},
			]
		}

		this.update = this.update.bind(this);
		this.updatefilter = this.updatefilter.bind(this);
		this.submit = this.submit.bind(this);

		this.updatePreview = this.updatePreview.bind(this);

		this.reset = this.reset.bind(this);
	}

	reset(){
		this.setState({
			preview: ""
		})
	}

	update(event){
		this.setState({
			searchterm: event.target.value
		})
	}

	updatefilter(event){
		const { filter } = this.state;
		filter[event.target.name] = event.target.value

		this.setState({filter});
	}

	updatePreview(type, id){
		this.setState({
			preview: {
				type, id
			}
		})
	}

	submit(event){
		event.preventDefault();
	}
	
	render(){
		const { searchterm, results, preview } = this.state;
		return (
			<div className="searchpage-container">
				<div className="searchpage-header">
					<form className="searchpage-header-form">
						<InputField 
							onChange={this.update} className="searchpage-header-input" 
							type="text" value={searchterm} 
							name="searchterm" inputClass="searchpage-header-searchinput"
						/>
						<Button type="submit" text="Search" className="searchpage-header-button" />
					</form>
				</div>
				<div className="searchpage-results">
					{

					}
					{
						!preview 
						?
						results.map(project => <PreviewResult 
												title={project.title} 
												owner={project.owner} 
												description={project.description} 
												type={project.type} 
												creationDate={project.date}
												handler={() => this.updatePreview(project.type, project.id)}
												/>)
						:
						<PreviewPage preview={preview} />
					}
				</div>
			</div>
		)
	}
}

export default SearchPage;
