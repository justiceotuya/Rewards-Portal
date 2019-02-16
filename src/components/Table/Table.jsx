import React from 'react';
import styles from './Table.module.scss';
// import data from '../../assets/Data/data.json';
import { DataContext } from '../../App';

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
	const {
		TableHeaderList,
		TableBodyList,
		TotalData,
		TotalPages,
		buttonDisabledIncrement,
		buttonDisabledDecrement,
		data,
		SmallestItemNumber,
		LargestItemNumber,
		TotalDataLength,
		CurrentPage,
		handleLeftPagination,
		handleRightPagination
	} = props;
	let className;
	return (
		<DataContext.Consumer>
			{/* <React.Fragment> */}
			{context => (
				<React.Fragment>
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
							Displaying Users {SmallestItemNumber}-{LargestItemNumber} of {TotalDataLength} in total
						</div>

						<div className={pagination}>
							<button
								className={buttonDisabledDecrement ? `${pagination__left} ${disabled}` : pagination__left}
								onClick={handleLeftPagination}
								// disabled={buttonDisabled}
							>
								{' '}
								&#x25C2;{' '}
							</button>
							<div className={pagination__number}>
								{' '}
								Page {CurrentPage} of {TotalPages}{' '}
							</div>
							<button
								className={buttonDisabledIncrement ? `${pagination__right} ${disabled}` : pagination__right}
								onClick={handleRightPagination} //pass the admin user data to the handle right pagination function
								// disabled={buttonDisabled}
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
