import React, { useState } from 'react';
import Layout from '../../Layout/Layout';
import PageHeader from '../../components/PageHeader/PageHeader';
import DateRangePicker from '../../components/DateRangePicker/DateRangePicker';
import Modal from '../../components/Modal/Modal';
import { DataContext } from '../../App';
import style from './Dashboard.module.scss';
import { SmallGrid, BigGrid } from '../../components/Grid/Grid';

export default function Dashboard(props) {

	return (
		<DataContext.Consumer>
			{/* <React.Fragment> */}
			{context => (
				<React.Fragment>
					<PageHeader
						date={context.date}
						page="Dashboard"
						toggleDate={context.toggleDate}
						toggleDatePicker={context.toggleDatePicker}
						activeIndex={context.activeIndex}
						handleClick={context.handleClick}
						Day={context.Day}
					/>

					<div className={style.main}>
						<SmallGrid Boxstyle="1" number="1234556" description="gsghsgsgsg" />
						<SmallGrid Boxstyle="2" number="1234556" description="gsghsgsgsg" />
						<SmallGrid Boxstyle="3" number="1234556" description="gsghsgsgsg" />
						<SmallGrid Boxstyle="4" number="1234556" description="gsghsgsgsg" />

						<BigGrid />
					</div>

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
