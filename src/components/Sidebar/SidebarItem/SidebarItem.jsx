import React, { useState } from 'react';
import styles from './SidebarItem.module.scss';
import { NavLink } from 'react-router-dom';

const baseUrl = process.env.PUBLIC_URL;

const NavList = props => {
	const { children } = props;
	return <ul className={styles.nav__list}>{children}</ul>;
};

const NavItem = props => {
	const { icon, link, item, children, activeClassName } = props;
	return (
		<li className={styles.nav__item}>
			<NavLink className={styles.nav__link} to={`${baseUrl}${link}`} activeClassName={activeClassName}>
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
			<NavLink className={styles.nav__link} to={`${baseUrl}${link}`} activeClassName={activeClassName}>
				{secondaryItems}
			</NavLink>
		</li>
	);
};

const NavItemWithChildren = props => {
	const { icon, link, item, children, activeClassName } = props;
	const [toggleSubLinks, setToggleSubLinks] = useState(false);

	// toggle link
	const handleSubLinkToggle = () => {
		setToggleSubLinks(!toggleSubLinks);
	};
	return (
		<li className={styles.nav__item}>
			<NavLink className={styles.nav__link} to="#" activeClassName={activeClassName} onClick={handleSubLinkToggle}>
				<i className={`${styles.nav__icon} ${icon}`} />
				{item}

				<span className={styles.nav__link__more}> {!toggleSubLinks ? `>` : `v`} </span>
			</NavLink>
			<ul className={!toggleSubLinks ? `${styles.nav__link__children}` : null}>{children}</ul>
		</li>
	);
};

export { NavList, NavItem, NavSecondaryItems, NavItemWithChildren };
//#endregion
