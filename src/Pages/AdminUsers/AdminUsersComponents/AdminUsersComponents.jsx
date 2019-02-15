import React from 'react';
import { TableHeaderList, TableHeader, TableRow, TableData } from '../../../components/Table/TableComponents';
import style from '../AdminUsers.module.scss';
import { DataContext } from '../../../App';
import adminUserData from '../../../assets/Data/adminData.json';

console.log(adminUserData);
export const AdminUsersTableHeaderList = () => {
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

export const AdminUsersTableBodyList = () => {
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
									<TableData item={status}>
										<div className={status === 'Active' ? `${style.active}` : `${style.inactive}`} />
										<span className={style.more}>...</span>
									</TableData>
									{/* <TableData item="..." /> */}
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
