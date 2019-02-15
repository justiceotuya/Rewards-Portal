import React from 'react';
import styles from './Hamburger.module.scss';

export default function Hamburger(props) {
	return (
		<div className={styles.hamburger} onClick={props.handleHamburgerClick}>
			<div className={styles.hamburger__item} />
		</div>
	);
}
