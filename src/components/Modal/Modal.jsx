import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.scss';

const Modal = ({ children, isOpen, onClose }) =>
	isOpen
		? ReactDOM.createPortal(
				<div className="modal">
					<div className="modal_body">
						<span className="modal__close" onClick={onClose}>
							&times;
						</span>
						{children}
					</div>
				</div>,
				document.querySelector('#modal')
			)
		: null;

export default Modal;
