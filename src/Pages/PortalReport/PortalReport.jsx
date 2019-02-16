import React, { useState } from 'react';
import Layout from '../../Layout/Layout';
import PageHeader from '../../components/PageHeader/PageHeader';
import DateRangePicker from '../../components/DateRangePicker/DateRangePicker';
import Modal from '../../components/Modal/Modal';
import { DataContext } from '../../App';
import style from './PortalReport.module.scss';
import Table from '../../components/Table/Table';
import { TableHeaderList, TableHeader, TableRow, TableData } from '../../components/Table/TableComponents';

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
					{context.customersData.displayedData !== null ? (
						context.customersData.displayedData.map(item => {
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
						TotalPages={context.customersData.TotalPages}
						buttonDisabledIncrement={context.customersData.disabledIncrement}
						buttonDisabledDecrement={context.customersData.disabledDecrement}
						SmallestItemNumber={context.customersData.displayedData[0].id}
						LargestItemNumber={context.customersData.displayedData[context.customersData.displayedData.length - 1].id}
						TotalDataLength={context.customersData.TotalData.length}
						CurrentPage={context.customersData.currentPage}
						handleLeftPagination={() => context.handleLeftPagination('customersData')}
						handleRightPagination={() => context.handleRightPagination('customersData')}
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
