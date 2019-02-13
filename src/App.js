import React, { Component, useState } from 'react';
import Dashboard from './Pages/Dashboard/Dashboard';
import moment from 'moment';
import DayPicker, { DateUtils } from 'react-day-picker';
import { Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import PortalReport from './Pages/PortalReport/PortalReport';
import AdminUsers from './Pages/AdminUsers/AdminUsers';

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
		handleCustomDate: handleCustomDate
	};

	return (
		<DataContext.Provider value={contextValue}>
			<Layout>
				<Route path="/" exact component={Dashboard} />
				<Route path="/dashboard" component={Dashboard} />
				<Route exact path="/reporting/portal-report" component={PortalReport} />
				<Route exact path="/user-management/admin-users" component={AdminUsers} />
			</Layout>
		</DataContext.Provider>
	);
};

export default App;
