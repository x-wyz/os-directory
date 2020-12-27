import React, { Component } from 'react';

import ModalBase from '../../components/modalbase/modalbase';
import Button from '../../components/button/button';

import './confirmation.css';

const Confirmation = ({title, message, confirm, exit}) => (
	<ModalBase exitFunction={exit}>
		<div className="confirmation-modal-container">
			<h4 className="confirmation-modal-title">{title}</h4>
			<p className="confirmation-modal-message">{message}</p>
			<div className="confirmation-modal-controls">
				<Button className="confirmation-modal-confirm confirmation-modal-btn" type="submit" text="Yes" onClick={confirm} />
				<Button className="confirmation-modal-deny confirmation-modal-btn" text="No" onClick={exit} />
			</div>
		</div>
	</ModalBase>
)

export default Confirmation;
