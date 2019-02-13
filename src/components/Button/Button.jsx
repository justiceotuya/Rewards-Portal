import React from 'react';
import styles from './Button.module.scss';

export default function Button(props) {
	const { value, onClick } = props;
	let className;
	if (value === 'Apply') {
		className = `${styles.button} ${styles.apply__btn}`;
	} else if (value === 'Cancel') {
		className = `${styles.button} ${styles.cancel__btn}`;
	}
	return (
		<React.Fragment>
			<input className={className} type="button" value={value} onClick={onClick} />
		</React.Fragment>
	);
}
