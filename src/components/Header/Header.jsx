import React from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/rewards-logo.png';
import userPic from '../../assets/user-3.jpg';
import Hamburger from '../Hamburger/Hamburger';

export default function Header(props) {
	return (
		<header className={styles.header}>
			<Hamburger />
			<a href="/dashboard">
				<img src={logo} alt="rewards Logo" className={styles.logo} />
			</a>

			<nav className={styles.nav}>
				<div className={styles.nav__bell}>
					<i className="fas fa-bell" />
				</div>

				<img src={userPic} alt="User Profile" className={styles.nav__user} />
			</nav>
		</header>
	);
}
