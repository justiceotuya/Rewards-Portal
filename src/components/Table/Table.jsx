import React from 'react';
import styles from './Table.module.scss';
// import data from '../../assets/Data/data.json';
import { DataContext } from '../../App';

export const TableHeader = props => {
	return <th>{props.item}</th>;
};

export const TableRow = props => {
	return <tr className={styles.tableRow}>{props.children}</tr>;
};
export const TableData = props => {
	return <td className={styles.tableData}>{props.item}</td>;
};

export default function Table(props) {
	const {
		tableContainer,
		table,
		thead,
		tableFooter,
		tableFooter__usercount,
		pagination,
		pagination__left,
		pagination__number,
		pagination__right,
		tableFooter__download,
		disabled
	} = styles;
	const { TableHeaderList, TableBodyList, TotalData, TotalPages, buttonDisabled, data } = props;
	return (
		<DataContext.Consumer>
			{/* <React.Fragment> */}
			{context => (
				<React.Fragment>
					{console.log('test')}
					<div className={tableContainer}>
						<table className={table}>
							<thead className={thead}>
								<tr>{TableHeaderList}</tr>
							</thead>
							<tbody>{TableBodyList}</tbody>
						</table>
					</div>
					<div className={tableFooter}>
						<div className={tableFooter__usercount}>
							Displaying Users 1-{TotalPages} of {TotalData} in total
						</div>

						<div className={pagination}>
							<button className={pagination__left} onClick={context.handleLeftPagination} disabled={buttonDisabled}>
								{' '}
								&#x25C2;{' '}
							</button>
							<div className={pagination__number}> Page 2 of 3 </div>
							<button
								className={disabled ? { pagination__right } : { disabled }}
								onClick={context.handleRightPagination}
								disabled={buttonDisabled}
							>
								{' '}
								&#x25B8;
							</button>
						</div>

						<div className={tableFooter__download}>
							Download: <a href="#">CSV XML JSON</a>
						</div>
					</div>
				</React.Fragment>
			)}
			{/* </React.Fragment> */}
		</DataContext.Consumer>
	);
}
