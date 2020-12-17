import React, { Component } from 'react';

import './projects.css';

class Projects extends Component {
	constructor(props){
		super(props);

		this.state = {
			groups: [],
			data: [],
			others: []
		}

		this.renderProject = this.renderProject.bind(this);
	}

	renderProject(){

	}

	render(){
		<div className="projects-container">
			<div className="projects-groups">
			</div>

			<div className="projects-data">
			</div>

			<div className="projects-other">
			</div>
		</div>
	}
}

export default Projects;
