import React, { Component } from 'react';

import Button from '../../components/button/button';

import Confirmation from '../../modals/confirmation/confirmation';

import './previewpage.css';

class PreviewPage extends Component {
	constructor(props){
		super(props);

		this.state = {
			preview: {
				// TEMP will pull from server eventually
				title: 'Firebox',
				type: 'Project',
				description: 'Nunc non lacus consectetur, gravida magna tempor, laoreet arcu. Ut libero justo, molestie in augue finibus, commodo rutrum quam. In cursus odio velit. Nulla viverra viverra eros quis aliquam. Curabitur commodo arcu ut metus porttitor maximus. Vestibulum bibendum euismod velit quis congue. Aliquam nibh nunc, mollis nec tincidunt nec, ornare vitae nulla. Cras in lacus nec metus semper vehicula.',
				members: 33,
				requirements: [
					'Nunc non lacus consectetur, gravida magna tempor, laoreet arcu.',
					'Ut libero justo, molestie in augue finibus.',
					'Aliquam mattis, ex a imperdiet pulvinar.'
				],
				links: [
					['Discord', 'google.com'],
					['YT Channel', 'youtube.com']
				],
				details: [
					['About Us', 'Nunc non lacus consectetur, gravida magna tempor, laoreet arcu. Ut libero justo, molestie in augue finibus, commodo rutrum quam. In cursus odio velit. Nulla viverra viverra eros quis aliquam. Curabitur commodo arcu ut metus porttitor maximus. Vestibulum bibendum euismod velit quis congue. Aliquam nibh nunc, mollis nec tincidunt nec, ornare vitae nulla. Cras in lacus nec metus semper vehicula.'],
					['Our history', 'Nunc non lacus consectetur, gravida magna tempor, laoreet arcu. Ut libero justo, molestie in augue finibus, commodo rutrum quam. In cursus odio velit. Nulla viverra viverra eros quis aliquam. Curabitur commodo arcu ut metus porttitor maximus. Vestibulum bibendum euismod velit quis congue. Aliquam nibh nunc, mollis nec tincidunt nec, ornare vitae nulla. Cras in lacus nec metus semper vehicula.'],
					['Our goal', 'Nunc non lacus consectetur, gravida magna tempor, laoreet arcu. Ut libero justo, molestie in augue finibus, commodo rutrum quam. In cursus odio velit. Nulla viverra viverra eros quis aliquam. Curabitur commodo arcu ut metus porttitor maximus. Vestibulum bibendum euismod velit quis congue. Aliquam nibh nunc, mollis nec tincidunt nec, ornare vitae nulla. Cras in lacus nec metus semper vehicula.']
				],
				owner: 'The amazing moa',
				status: 'restricted',
				otherinfo: 'Donec ante nulla, auctor eu mauris nec, tincidunt varius risus. Aenean nec vehicula ipsum. Curabitur bibendum eros odio, tempor malesuada augue fringilla at.',
				created: '12-20-2020',
				id: '123d1d-321'
			},
			showModal: false
		}

		this.submit = this.submit.bind(this);
		this.showModal = this.showModal.bind(this);
	}

	showModal(state){
		this.setState({
			showModal: state
		})
	}

	submit(){
		// function will send join req to server, soon tm
	}

	render(){
		const { title, description, owner, status, otherinfo, created, links, requirements, members, type, details } = this.state.preview;
		const { showModal } = this.state;
		return (
			<React.Fragment>
				{
					showModal
					?
					<Confirmation title={title} message={`Are you sure you want to ${status.toLowerCase() === 'public' ? 'join' : 'apply to'} ${title}?`} confirm={this.submit} exit={() => this.showModal(false)} />
					:
					null
				}
				<div className="previewpage-container">
					<div className="previewpage-left">
						<div className="previewpage-section">
							<h2 className="previewpage-title">{title}</h2>
						</div>
						<div className="previewpage-section">
							<p className="previewpage-description">{description}</p>
						</div>
						{
							details
							?
							<React.Fragment>
								{
									details.map((detail, idx) => (
										<div className="previewpage-section">
											<span className="previewpage-detail-title">{detail[0]}</span>
											<p className="previewpage-detail-description">{detail[1]}</p>
										</div>
									))
								}
							</React.Fragment>
							:
							null
						}
						{
							requirements
							?
							<div className="previewpage-section">
								<h3 className="previewpage-reqtitle">Requirements</h3>
								{
									requirements.map((req, idx) => (
										<div className="previewpage-req-container">
										- {requirements[idx]}
										</div>
									))
								}
							</div>
							:
							null
						}
						{
							otherinfo
							? 
							<div className="previewpage-section">
								<p className="previewpage-others">{otherinfo}</p>
							</div>
							:
							null
						}
					</div>
					<div className="previewpage-right">
						<div className="previewpage-mini-section">
							<p className="previewpage-type">Type: <span className="previewpage-info-bold">{type ? type : 'Project'}</span> </p>
							<p className="previewpage-state">Opened: <span className={`previewpage-info-bold ${status.toLowerCase() === 'public' ? 'preview-open' : 'preview-closed'}`}>{status}</span></p>
							<p className="previewpage-createdon">cc: <span className="previewpage-info-bold">{created}</span></p>
						</div>
						<div className="previewpage-mini-section">
							<p className="previewpage-members">Members: <span className="previewpage-info-bold previewpage-members-number">{members}</span> </p>
							<p className="previewpage-members">Owner: {owner}</p>
						</div>
						{
							links
							?
							<div className="previewpage-mini-section">
								{
									links.map((link, idx) => (
										<div className="previewpage-link-container">
											<a className="previewpage-link" href={`https://${link[1]}`}>{link[0]}</a>
										</div>
									))
								}
							</div>
							:
							null
						}

						<Button type="submit" text={status.toLowerCase() === 'public' ? 'Join' : 'Apply'} onClick={() => this.showModal(true)} className="previewpage-join-btn" />
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default PreviewPage;
