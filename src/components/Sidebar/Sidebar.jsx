import React from 'react';
import styles from './Sidebar.module.scss';
import copyrightImage from '../../assets/logo-red.png';
import { NavList, NavItem, NavSecondaryItems, NavItemWithChildren } from './SidebarItem/SidebarItem';
import { DataContext } from '../../App';

export default function Sidebar() {
	return (
		<DataContext.Consumer>
			{/* <React.Fragment> */}
			{context => (
				<React.Fragment>
					{/* //toggle sidebar  */}
					<nav className={context.toggleSideBar ? `${styles.nav} ${styles.hide}` : styles.nav}>
						<NavList>
							<NavItem icon="icon-dashboard" activeClassName={styles.active} link="/dashboard" item="Dashboard" />

							<NavItemWithChildren
								icon="icon-cms"
								activeClassName={styles.active}
								link="/content-management"
								item="Content Management"
							>
								<NavSecondaryItems
									secondaryItems="Merchant Partners"
									activeClassName={styles.active}
									link="/content-management/merchant-partners"
								/>
							</NavItemWithChildren>

							<NavItemWithChildren
								icon="icon-user"
								activeClassName={styles.active}
								link="/user-management"
								item="User Management"
							>
								<NavSecondaryItems
									secondaryItems="Users"
									activeClassName={styles.active}
									link="/user-management/user"
								/>
								<NavSecondaryItems
									secondaryItems="Admin Users"
									activeClassName={styles.active}
									link="/user-management/admin-users"
								/>
							</NavItemWithChildren>

							<NavItemWithChildren
								icon="icon-reporting"
								activeClassName={styles.active}
								link="/reporting"
								item="Reporting"
							>
								<NavSecondaryItems
									secondaryItems="Portal Report"
									activeClassName={styles.active}
									link="/reporting/portal-report"
								/>
								<NavSecondaryItems
									secondaryItems="Redemption Report"
									activeClassName={styles.active}
									link="/reporting/redemption-report"
								/>
								<NavSecondaryItems secondaryItems="Bi" activeClassName={styles.active} link="/reporting/bi" />
							</NavItemWithChildren>

							<NavItem
								icon="icon-settings"
								activeClassName={styles.active}
								link="/system-settings"
								item="System Settings"
							/>
						</NavList>

						<div className={styles.copyright}>
							<img src={copyrightImage} alt="uba copyright" className={styles.copyright__img} />
							<div className={styles.copyright__text}>Copyright © 2018 UBA Group PLC. Powered by Interswitch</div>
						</div>
					</nav>
				</React.Fragment>
			)}
			{/* </React.Fragment> */}
		</DataContext.Consumer>
	);
}
