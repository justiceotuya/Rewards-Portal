import React from 'react';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import styles from './Layout.module.scss';

const Layout = props => {
	return (
		<div>
			<Header />
			<main className={styles.main}>
				<Sidebar />
				<div className={styles.section}> {props.children}</div>
			</main>
		</div>
	);
};

export default Layout;
