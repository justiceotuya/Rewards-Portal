import React, { Component, useState, useEffect } from 'react';
import Dashboard from './Pages/Dashboard/Dashboard';
import moment from 'moment';
import DayPicker, { DateUtils } from 'react-day-picker';
import { Route, Switch } from 'react-router-dom';
import Layout from './Layout/Layout';
import PortalReport from './Pages/PortalReport/PortalReport';
import AdminUsers from './Pages/AdminUsers/AdminUsers';
import TotalAdminUserData from './assets/Data/adminData.json';
import TotalCustomersData from './assets/Data/customersData.json';
import Login from './Pages/Login/Login';

//create baseurl
const baseUrl = process.env.PUBLIC_URL;

//create context to share data
export const DataContext = React.createContext();

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

	//function to reset date
	const handleResetClick = () => {
		getInitialDateState(getInitialState());
	};

	//function to handle custom date
	const handleCustomDate = () => {
		toggleModal();
		console.log('date state', dateState);
		setDay(
			`${moment(dateState.from.toLocaleDateString()).format('Do MMM-YYYY')} - ${moment(
				dateState.to.toLocaleDateString()
			).format('Do MMM-YYYY')}`
		);
	};

	//function to get the initial data to be displayed on the table
	const getInitialPaginationData = data => {
		let newData = [];
		let count = 0;
		let itemsPerPage = count + 10;
		for (var i = count; i < itemsPerPage; i++) {
			newData.push(data[i]);
			count = i;
		}
		console.log(newData);
		return newData;
	};

	// get Total Pages
	const getTotalPages = (dataSize, itemsPerPage) => {
		return Math.ceil(dataSize / itemsPerPage);
	};

	//mergestate hook
	function useMergeState(initialState) {
		const [state, setState] = useState(initialState);
		const setMergedState = newState => setState(prevState => Object.assign({}, prevState, newState));
		return [state, setMergedState];
	}

	//create hook to get and set admin user data;
	const [adminUserData, setAdminUserData] = useMergeState({
		TotalData: TotalAdminUserData,
		displayedData: getInitialPaginationData(TotalAdminUserData),
		count: 10,
		itemsPerPage: 10,
		TotalPages: getTotalPages(TotalAdminUserData.length, 10),
		disabledIncrement: false,
		disabledDecrement: true,
		currentPage: 1
	});

	//create hook to get and set customers user data;
	const [customersData, setCustomersData] = useMergeState({
		TotalData: TotalCustomersData,
		displayedData: getInitialPaginationData(TotalCustomersData),
		count: 10,
		itemsPerPage: 10,
		TotalPages: getTotalPages(TotalCustomersData.length, 10),
		disabledIncrement: false,
		disabledDecrement: true,
		currentPage: 1
	});

	const getIncrementPaginationData = data => {
		let newData = [];
		let count = data.count;
		let temp = data.itemsPerPage;
		let TotalData = data.TotalData;
		let displayedData = data.displayedData;
		temp = count + 10;
		for (var i = count; i < temp; i++) {
			newData.push(TotalData[i]);
			count = i + 1;
		}

		let newObject = {
			count: count,
			disabledDecrement: count === displayedData.itemsPerPage ? true : false,
			disabledIncrement: count === TotalData.length ? true : false,
			currentPage: count / data.TotalPages
		};

		Object.assign(data, newObject);
		console.log('data', data);
		return newData;
	};

	// function returns the new page items
	const getDecrementPaginationData = data => {
		//get the begining of the current array beign displayed
		let beginningOfNewArray = data.displayedData[0].id;

		//filter array to get 10 items based on the id of the first item in the currently displayed items
		let newArray = data.TotalData.filter(
			item => item.id >= beginningOfNewArray - data.itemsPerPage && item.id < beginningOfNewArray
		);
		let count = data.count - 10;
		let itemsPerPage = data.itemsPerPage;
		itemsPerPage = data.count - 10;

		// mutate the object by creating a new object
		let myObj = {
			count: count,
			disabledDecrement: count === data.itemsPerPage ? true : false,
			disabledIncrement: count === data.TotalData.length ? true : false,
			currentPage: data.currentPage - 1
		};

		Object.assign(data, myObj);
		return { newArray };
	};

	//handle pagination for increment
	const handleRightPagination = dataSet => {
		// run this function based on call back by  the individual functions
		if (dataSet === 'adminUserData') {
			setAdminUserData({
				displayedData: getIncrementPaginationData(adminUserData)
			});
		} else if (dataSet === 'customersData') {
			setCustomersData({
				displayedData: getIncrementPaginationData(customersData)
			});
		}
	};

	//handle pagination for decrement
	const handleLeftPagination = dataSet => {
		if (dataSet === 'adminUserData') {
			setAdminUserData({
				displayedData: getDecrementPaginationData(adminUserData).newArray
			});
		} else if (dataSet === 'customersData') {
			setCustomersData({
				displayedData: getDecrementPaginationData(customersData).newArray
			});
		}
	};

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
	const [toggleSideBar, setToggleSideBar] = useState(
		deviceGroup === 'mobile' || deviceGroup === 'tablet' ? true : deviceGroup === 'desktop' ? false : null
	);
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
				<Switch>
					<Route path={baseUrl + '/'} exact component={Dashboard} />
					<Route path={baseUrl + '/dashboard'} component={Dashboard} />
					<Route exact path={baseUrl + '/reporting/portal-report'} component={PortalReport} />
					<Route exact path={baseUrl + '/user-management/admin-users'} component={AdminUsers} />
				</Switch>
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
