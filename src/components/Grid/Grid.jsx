import React from 'react';
import './Grid.scss';

const SmallGrid = props => {
	const { number, Boxstyle, description } = props;

	let test = `Box smallBox${Boxstyle}`;
	return (
		<React.Fragment>
			<div className={test}>
				<div className="number">{number}</div>
				<div className="description">{description}</div>
			</div>
			{/* <div className={`${style.Box} ${style.smallBox1}`}>1</div>
			<div className={`${style.Box} ${style.smallBox2}`}>2</div>
			<div className={`${style.Box} ${style.smallBox3}`}>3</div>
			<div className={`${style.Box} ${style.smallBox4}`}>4</div> */}
		</React.Fragment>
	);
};

const BigGrid = props => {
	return (
		<div className=" bigBox">
			<div className="bigBox__header">
				<div className="bigBox__title">Summary</div>
				<div className="bigBox__time">
					<div className="bigBox__month">Month</div>
					<div className="bigBox__alltime">All Time</div>
				</div>
			</div>

			<div className="bigBox__content">
				<BigGridContent />
				<BigGridContent />
				<BigGridContent />
				<BigGridContent />
			</div>
		</div>
	);
};

const BigGridContent = () => {
	return (
		<div className="content">
			<div className="content__text">Lorem ipsum</div>
			<div className="content__number">123456789</div>
		</div>
	);
};

export { SmallGrid, BigGrid };
