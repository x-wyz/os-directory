import React, { Component } from 'react';
import './searchpage.css';

import InputField from '../../components/inputfield/inputfield';
import Button from '../../components/button/button';

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
			results: []
		}

		this.update = this.update.bind(this);
		this.updatefilter = this.updatefilter.bind(this);
		this.submit = this.submit.bind(this);
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

	submit(event){
		event.preventDefault();
	}
	
	render(){
		const { searchterm } = this.state;
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
				</div>
			</div>
		)
	}
}

export default SearchPage;
