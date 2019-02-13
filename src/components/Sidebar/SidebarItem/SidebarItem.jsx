import React from 'react';
import styles from './SidebarItem.module.scss';
import { NavLink } from 'react-router-dom';

const NavList = props => {
	const { children } = props;
	return <ul className={styles.nav__list}>{children}</ul>;
};

const NavItem = props => {
	const { icon, link, item, children, activeClassName } = props;
	return (
		<li className={styles.nav__item}>
			<NavLink className={styles.nav__link} to={link} activeClassName={activeClassName}>
				<i className={`${styles.nav__icon} ${icon}`} />
				{item}
				{children}
			</NavLink>
		</li>
	);
};

const NavSecondaryItems = props => {
	const { secondaryItems, link, activeClassName } = props;
	return (
		<li className={styles.nav__item__secondary}>
			<NavLink className={styles.nav__link} to={link} activeClassName={activeClassName}>
				{secondaryItems}
			</NavLink>
		</li>
	);
};

const NavItemWithChildren = props => {
	const { icon, link, item, children, activeClassName } = props;
	return (
		<li className={styles.nav__item}>
			<NavLink className={styles.nav__link} to={link} activeClassName={activeClassName}>
				<i className={`${styles.nav__icon} ${icon}`} />
				{item}

				<span className={styles.nav__link__more}>&gt;</span>
			</NavLink>
			<ul>{children}</ul>
		</li>
	);
};

export { NavList, NavItem, NavSecondaryItems, NavItemWithChildren };
//#endregion
