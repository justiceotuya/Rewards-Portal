import React, { Component, useState, useEffect } from 'react';
import Dashboard from './Pages/Dashboard/Dashboard';
import moment from 'moment';
import DayPicker, { DateUtils } from 'react-day-picker';
import { Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import PortalReport from './Pages/PortalReport/PortalReport';
import AdminUsers from './Pages/AdminUsers/AdminUsers';
import TotalAdminUserData from './assets/Data/adminData.json';
import TotalCustomersData from './assets/Data/customersData.json';
import Login from './Pages/Login/Login';
export const DataContext = React.createContext();
const baseUrl = process.env.PUBLIC_URL;
const App = props => {
	// create a context to pass data to all children
	// const DataContext = React.createContext();
	const [toggleDatePicker, setDatePickerToggle] = useState(false);

	const [date, setDate] = useState('Today');
	const [activeIndex, setActiveIndex] = useState(0);
	const [Day, setDay] = useState(moment().format('D MMM'));
	const [isOpen, setIsOpen] = useState(false);

	//initial calendar date state
	const getInitialState = () => {
		return {
			from: undefined,
			to: undefined
			// fromFormatted: moment(dateState.from.toLocaleDateString()).format('D MMM-YYYY'),
			// toFormatted: moment(dateState.to.toLocaleDateString()).format('D MMM-YYYY')
		};
	};
	//date state hook
	const [dateState, getInitialDateState] = useState(getInitialState());

	const toggleDate = () => {
		setDatePickerToggle(!toggleDatePicker);
		//toggle the date picker
	};
	const handleClick = index => {
		//set the active list
		setActiveIndex(index);
		// close the date picker toggle

		//set day information when user clicks corresponding list
		switch (index) {
			case 0:
				setDate('Today');
				setDay(moment().format('Do MMM'));
				break;
			case 1:
				setDate('Yesterday');
				setDay(
					moment()
						.subtract(1, 'd')
						.format('Do MMM')
				);
				break;
			case 2:
				setDate('Last 7 Days');
				setDay(
					` ${moment()
						.subtract(7, 'd')
						.format('Do MMM')} - Today`
				);
				break;
			case 3:
				setDate('Last 30 Days');
				setDay(
					`${moment()
						.subtract(30, 'd')
						.format('Do MMM')} - Today`
				);
				break;
			case 4:
				setDate('This Month');
				setDay(moment().format('MMMM'));
				break;
			case 5:
				setDate('Last Month');
				setDay(
					moment()
						.subtract(1, 'M')
						.format('MMMM')
				);
				break;
			case 6:
				setDate('Custom Range');
				setIsOpen(true);
				break;

			default:
				setDate('Today');
				break;
		}
		setDatePickerToggle(!toggleDatePicker);
	};

	//toggle datepicker modal
	const toggleModal = () => {
		setIsOpen(!isOpen);
	};

	// calender picker for day
	const handleDayClick = day => {
		const range = DateUtils.addDayToRange(day, dateState);
		getInitialDateState(range);
	};

	const handleResetClick = () => {
		getInitialDateState(getInitialState());
	};

	const handleCustomDate = () => {
		toggleModal();
		console.log('date state', dateState);
		setDay(
			`${moment(dateState.from.toLocaleDateString()).format('Do MMM-YYYY')} - ${moment(
				dateState.to.toLocaleDateString()
			).format('Do MMM-YYYY')}`
		);
	};

	// let test = [];
	// let count = 10;
	// let itemsPerPage = count + 10;
	// for (var i = count; i < itemsPerPage; i++) {
	// 	test.push(data[i]);
	// 	count = i;
	// }
	const getInitialPaginationData = data => {
		let newData = [];
		let count = 0;
		let itemsPerPage = count + 10;
		for (var i = count; i < itemsPerPage; i++) {
			newData.push(data[i]);
			count = i;
		}

		return newData;
	};

	// get Total Pages
	const getTotalPages = (dataSize, itemsPerPage) => {
		return Math.ceil(dataSize / itemsPerPage);
	};
	//create hook to get and set admin user data;
	const [adminUserData, setAdminUserData] = useState({
		TotalAdminUserData: TotalAdminUserData,
		adminUserData: getInitialPaginationData(TotalAdminUserData),
		count: 10,
		itemsPerPage: 10,
		TotalPages: getTotalPages(TotalAdminUserData.length, 10),
		disabledIncrement: false,
		disabledDecrement: true,
		currentPage: 1
	});

	const handleRightPagination = () => {
		let newData = [];
		let count = adminUserData.count;
		let itemsPerPage = adminUserData.itemsPerPage;
		itemsPerPage = count + 10;
		for (var i = count; i < itemsPerPage; i++) {
			newData.push(TotalAdminUserData[i]);
			count = i + 1;
		}
		setAdminUserData({
			count: count,
			adminUserData: newData,
			TotalAdminUserData,
			disabledIncrement: count === TotalAdminUserData.length ? true : false,
			disabledDecrement: false,
			itemsPerPage,
			TotalPages: adminUserData.TotalPages,
			currentPage: count / adminUserData.TotalPages
		});
	};
	// console.log('count', count);
	// console.log('newData', newData);
	console.log('TotalAdminUserData', TotalAdminUserData.length);
	console.log('admindata', adminUserData);

	const handleLeftPagination = () => {
		if (adminUserData.currentPage === 1) {
			setAdminUserData({
				disabledDecrement: true
			});
		} else {
			setAdminUserData({
				disabledDecrement: false
			});
		}
		// let fullData = TotalAdminUserData;
		// let currentData = adminUserData;

		// console.log(adminUserData);
	};

	const getIncrementalPaginationData = data => {
		// let newData = [];
		// let count =
	};

	//create hook to get and set customers user data;
	const [customersData, setCustomersData] = useState({
		totalCustomersData: TotalCustomersData,
		customersData: getInitialPaginationData(TotalCustomersData),
		count: 0,
		itemsPerPage: 10,
		TotalPages: getTotalPages(TotalCustomersData.length, 10),
		disabledIncrement: false,
		disabledDecrement: true
	});

	console.log(getInitialPaginationData(TotalAdminUserData));
	// function itemsPerPage(page, list) {
	// 	return Math.floor(list.length / page);
	// }

	// function next(page, size, list) {
	// 	var start = page * size;
	// 	var end = start + size;
	// 	return sublist(start, end, list);
	// }

	//start is the start index from the original list
	//end is the stop index from the original list
	//list the original list to pull sub list
	// function sublist(start, end, list) {
	// 	var tmp = [];
	// 	if (list === null || list.length === 0) {
	// 		return tmp;
	// 	} else {
	// 		for (var i = 0; i < list.length; i++) {
	// 			if (i >= start && i <= end) {
	// 				tmp.push(list[i]);
	// 			}
	// 		}
	// 		return tmp;
	// 	}
	// }

	// console.log(adminUserData);

	// console.log('tester', next(0, 10, TotalCustomersData));

	// //pages to show
	// console.log('itemsPerPage', itemsPerPage(10, TotalCustomersData));

	//get the device size
	const getDeviceSize = () => {
		if (window.innerWidth <= 767) {
			return 'mobile';
		} else if (window.innerWidth >= 768 && window.innerWidth <= 1023) {
			return 'tablet';
		} else {
			return 'desktop';
		}
	};

	//create a hook for device group
	const [deviceGroup, setDeviceGroup] = useState(getDeviceSize());
	const [toggleSideBar, setToggleSideBar] = useState(deviceGroup === 'desktop' ? false : true);
	const handleHamburgerClick = () => {
		//check the width of the browser
		setDeviceGroup(getDeviceSize());
		//togle the sidebar
		deviceGroup === 'mobile' || deviceGroup === 'tablet'
			? setToggleSideBar(!toggleSideBar)
			: setToggleSideBar(toggleSideBar);
		console.log('toggleSideBar', toggleSideBar);
	};

	const contextValue = {
		date: date,
		toggleDatePicker: toggleDatePicker,
		activeIndex: activeIndex,
		Day: Day,
		isOpen: isOpen,
		toggleDate: toggleDate,
		handleClick: handleClick,
		toggleModal: toggleModal,
		dateState: dateState,
		handleDayClick: handleDayClick,
		handleResetClick: handleResetClick,
		handleCustomDate: handleCustomDate,
		adminUserData: adminUserData,
		customersData: customersData,
		handleRightPagination: handleRightPagination,
		handleLeftPagination: handleLeftPagination,
		disabled: adminUserData.disabled,
		handleHamburgerClick: handleHamburgerClick,
		toggleSideBar: toggleSideBar,
		deviceGroup: deviceGroup
	};

	//check if user is authenticated before alowing user to log in
	// return isAuthenticated ? (
	return window.location.href.includes('login') ? (
		<Login />
	) : (
		<DataContext.Provider value={contextValue}>
			<Layout>
				<Route path={baseUrl + '/'} exact component={Dashboard} />
				<Route path={baseUrl + '/dashboard'} component={Dashboard} />
				<Route exact path={baseUrl + '/reporting/portal-report'} component={PortalReport} />
				<Route exact path={baseUrl + '/user-management/admin-users'} component={AdminUsers} />
			</Layout>
		</DataContext.Provider>
	);
	// ) : (
	// 	<Login
	// 		handleLogin={handleLogin}
	// 		handleUsernameChange={handleUsernameChange}
	// 		handlePasswordChange={handlePasswordChange}
	// 	/>
	// );
};

export default App;