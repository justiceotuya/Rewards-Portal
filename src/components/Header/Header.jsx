import React from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/rewards-logo.png';
import userPic from '../../assets/user-3.jpg';
import Hamburger from '../Hamburger/Hamburger';
import { DataContext } from '../../App';

export default function Header(props) {
	return (
		<DataContext.Consumer>
			{/* <React.Fragment> */}
			{context => (
				<React.Fragment>
					<Hamburger handleHamburgerClick={context.handleHamburgerClick} />
					<header className={styles.header}>
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
				</React.Fragment>
			)}
			{/* </React.Fragment> */}
		</DataContext.Consumer>
	);
}
