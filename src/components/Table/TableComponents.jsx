import React from 'react';
import styles from './Table.module.scss';

export const TableHeader = props => {
	return <th>{props.item}</th>;
};

export const TableRow = props => {
	return <tr className={styles.tableRow}>{props.children}</tr>;
};
export const TableData = props => {
	return (
		<td className={styles.tableData}>
			{props.children}
			{props.item}
		</td>
	);
};
