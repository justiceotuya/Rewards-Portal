import React, { useState } from 'react';
import Layout from '../../Layout/Layout';
import PageHeader from '../../components/PageHeader/PageHeader';
import DateRangePicker from '../../components/DateRangePicker/DateRangePicker';
import Modal from '../../components/Modal/Modal';
import { DataContext } from '../../App';
import style from './AdminUsers.module.scss';
import Table from '../../components/Table/Table';

import {AdminUsersTableHeaderList,
AdminUsersTableBodyList} from './AdminUsersComponents/AdminUsersComponents'



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
						value="New Admin User"
						buttonClassName={style.Button}
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
