import React from 'react';
import './PageHeaderList.scss';

export default function PageHeaderList(props) {
	const { dateRange, activeIndex, handleClick } = props;
	const dateRanges = ['Today', 'Yesterday', 'Last 7 Days', 'Last 30 Days', 'This Month', 'Last Month', 'Custom Range'];
	return (
		<React.Fragment>
			{dateRanges.map((dateRange, index) => {
				// set active class to the lists on click
				const className = activeIndex === index ? 'active' : null;
				return (
					<li className={className} key={index} onClick={() => handleClick(index)}>
						{dateRange}
					</li>
				);
			})}
		</React.Fragment>
	);
}
