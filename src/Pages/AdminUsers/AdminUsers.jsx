import React, { useState } from 'react';
import Layout from '../../Layout/Layout';
import PageHeader from '../../components/PageHeader/PageHeader';
import DateRangePicker from '../../components/DateRangePicker/DateRangePicker';
import Modal from '../../components/Modal/Modal';
import { DataContext } from '../../App';
import style from './AdminUsers.module.scss';
import Table from '../../components/Table/Table';
import { TableHeaderList, TableHeader, TableRow, TableData } from '../../components/Table/Table';

const AdminUsersTableHeaderList = () => {
	return (
		<React.Fragment>
			<TableHeader item="Email" />
			<TableHeader item="Role" />
			<TableHeader item="Currently Sign In At" />
			<TableHeader item="Last Sign In At" />
			<TableHeader item="Status" />
			<TableHeader item="" />
		</React.Fragment>
	);
};

const AdminUsersTableBodyList = () => {
	// function
	// let test = [];
	// let count=0;
	// let pageSize= 10;
	// for (var i = 0; i < pageSize; i++) {
	// 	test.push(data[i]);
	// 	count=i
	// }

	//next button push  new set of data from 'count' to count + pagesize

	// prev button, decrement from count to count-page size (use shift or delete) if page size is not less than count
	return (
		<DataContext.Consumer>
			{/* <React.Fragment> */}
			{context => (
				<React.Fragment>
					{context.adminUserData.adminUserData !== null ? (
						context.adminUserData.adminUserData.map(item => {
							const { id, role, current_sign_in, last_sign_in, status, email } = item;
							return (
								<TableRow key={id}>
									<TableData item={email} />
									<TableData item={role} />
									<TableData item={current_sign_in} />
									<TableData item={last_sign_in} />
									<TableData item={status} />
									<TableData item="" />
								</TableRow>
							);
						})
					) : (
						<div>NoAdmin currently, please add an admin</div>
					)}
				</React.Fragment>
			)}
			{/* </React.Fragment> */}
		</DataContext.Consumer>
	);
};

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

					{/* import table */}
					<Table
						TableBodyList={<AdminUsersTableBodyList />}
						TableHeaderList={<AdminUsersTableHeaderList />}
						// TotalData={context.adminUserData.adminUserData.length}
						TotalPages={context.adminUserData.TotalPages}
						buttonDisabledIncrement={context.adminUserData.disabledIncrement}
						buttonDisabledDecrement={context.adminUserData.disabledDecrement}
						SmallestItemNumber={context.adminUserData.adminUserData[0].id}
						LargestItemNumber={context.adminUserData.adminUserData[context.adminUserData.adminUserData.length - 1].id}
						TotalDataLength={context.adminUserData.TotalAdminUserData.length}
						CurrentPage={context.adminUserData.currentPage}
						// totalPages={context.adminUserData.totalPage}
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
