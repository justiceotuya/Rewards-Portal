import React from 'react';
import { TableHeaderList, TableHeader, TableRow, TableData } from '../../../components/Table/TableComponents';
import style from '../AdminUsers.module.scss';
import { DataContext } from '../../../App';
import adminUserData from '../../../assets/Data/adminData.json';

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
	return (
		<DataContext.Consumer>
			{/* <React.Fragment> */}
			{context => (
				<React.Fragment>
					{context.adminUserData.displayedData !== null ? (
						context.adminUserData.displayedData.map(item => {
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
