import React, { useState } from 'react';
import Layout from '../../Layout/Layout';
import PageHeader from '../../components/PageHeader/PageHeader';
import DateRangePicker from '../../components/DateRangePicker/DateRangePicker';
import Modal from '../../components/Modal/Modal';
import { DataContext } from '../../App';
import style from './PortalReport.module.scss';
import Table from '../../components/Table/Table';
import { TableHeaderList, TableHeader, TableRow, TableData } from '../../components/Table/Table';

const PortalReportTableHeaderList = () => {
	return (
		<React.Fragment>
			<TableHeader item="ID" />
			<TableHeader item="First Name" />
			<TableHeader item="Last Name" />
			<TableHeader item="Email" />
			<TableHeader item="Phone" />
			<TableHeader item="Last Login Date" />
		</React.Fragment>
	);
};

const PortalReportTableBodyList = () => {
	return (
		<DataContext.Consumer>
			{/* <React.Fragment> */}
			{context => (
				<React.Fragment>
					{context.customersData.customersData !== null ? (
						context.customersData.customersData.map(item => {
							const { id, first_name, last_name, email, phone, last_login_date } = item;
							return (
								<TableRow key={id}>
									<TableData item={id} />
									<TableData item={first_name} />
									<TableData item={last_name} />
									<TableData item={email} />
									<TableData item={phone} />
									<TableData item={last_login_date} />
								</TableRow>
							);
						})
					) : (
						<div>No customersData currently, please add an admin</div>
					)}
				</React.Fragment>
			)}
			{/* </React.Fragment> */}
		</DataContext.Consumer>
	);
};

export default function PortalReport(props) {
	return (
		<DataContext.Consumer>
			{/* <React.Fragment> */}
			{context => (
				<React.Fragment>
					<PageHeader
						date={context.date}
						page="Registered customers"
						toggleDate={context.toggleDate}
						toggleDatePicker={context.toggleDatePicker}
						activeIndex={context.activeIndex}
						handleClick={context.handleClick}
						Day={context.Day}
					/>

					{/* import table */}
					<Table
						TableBodyList={<PortalReportTableBodyList />}
						TableHeaderList={<PortalReportTableHeaderList />}
						TotalData={context.customersData.customersData.length}
						TotalPages={context.customersData.TotalPages}
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
