import React, { useState } from 'react';
import Layout from '../../Layout/Layout';
import PageHeader from '../../components/PageHeader/PageHeader';
import DateRangePicker from '../../components/DateRangePicker/DateRangePicker';
import Modal from '../../components/Modal/Modal';
import { DataContext } from '../../App';
import style from './AdminUsers.module.scss';

export default function AdminUsers(props) {
	return (
		<DataContext.Consumer>
			{/* <React.Fragment> */}
			{context => (
				<React.Fragment>
					<PageHeader
						date={context.date}
						page="Admin Users"
						toggleDate={context.toggleDate}
						toggleDatePicker={context.toggleDatePicker}
						activeIndex={context.activeIndex}
						handleClick={context.handleClick}
						Day={context.Day}
					/>

					{/* create modal to display date picker */}
					<Modal onClose={context.toggleModal} isOpen={context.isOpen}>
						<DateRangePicker />
					</Modal>
				</React.Fragment>
			)}
			{/* </React.Fragment> */}
		</DataContext.Consumer>
	);
}
