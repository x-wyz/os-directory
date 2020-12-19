import React, { Component } from 'react';

import ProjectPreview from '../../components/projectpreview/projectpreview';

import './projects.css';

class Projects extends Component {
	constructor(props){
		super(props);

		this.state = {
			groups: [
				{
					name: "ABC Lorem box",
					id: '12312-12312',
					owner: 'newhere'
				},
				{
					name: "ABC Lorem box",
					id: '12312-12312',
					owner: 'newhere'
				},
				{
					name: "ABC Lorem box",
					id: '12312-12312',
					owner: 'newhere'
				},
				{
					name: "ABC Lorem box",
					id: '12312-12312',
					owner: 'newhere'
				},
				{
					name: "ABC Lorem box",
					id: '12312-12312',
					owner: 'newhere'
				},
				{
					name: "ABC Lorem box",
					id: '12312-12312',
					owner: 'newhere'
				},
				{
					name: "ABC Lorem box",
					id: '12312-12312',
					owner: 'newhere'
				},
			],
			data: [
				{
					name: "ABC Lorem box",
					id: '12312-12312',
					owner: 'newhere'
				},
				{
					name: "ABC Lorem box",
					id: '12312-12312',
					owner: 'newhere'
				},
				{
					name: "ABC Lorem box",
					id: '12312-12312',
					owner: 'newhere'
				},
			],
			others: [
				{
					name: "ABC Lorem box",
					id: '12312-12312',
					owner: 'newhere'
				},
				{
					name: "ABC Lorem box",
					id: '12312-12312',
					owner: 'newhere'
				},
			]
		}

		this.renderProject = this.renderProject.bind(this);
	}

	renderProject(){

	}

	render(){
		const { groups, data, others } = this.state;
		
		return (
			<div className="projects-container">
				<div className="projects-groups">
					<h3 className="projects-page-title">Projects</h3>
					{
						groups.map((group, idx) => <ProjectPreview key={`group-${group.id}-${idx}`} owner={group.owner} type="project" id={group.id} name={group.name} />)
					}
				</div>
	
				<div className="projects-data">
					<h3 className="projects-page-title">Surveys</h3>
					{
						data.map((survey, idx) => <ProjectPreview secondarystyle={true} key={`survey-${survey.id}-${idx}`} owner={survey.owner} type="survey" id={survey.id} name={survey.name} />)
					}
				</div>
	
				<div className="projects-other">
					<h3 className="projects-page-title">Others</h3>
					{
						others.map((other, idx) => <ProjectPreview key={`other-${other.id}-${idx}`} owner={other.owner} type="others" id={other.id} name={other.name} />)
					}
				</div>
			</div>
		)
	}
}

export default Projects;
