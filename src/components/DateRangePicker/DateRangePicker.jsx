import React from 'react';
// import Helmet from 'react-helmet';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import './DateRangePicker.css';
import Button from '../Button/Button';
import { DataContext } from '../../App';
import moment from 'moment';


export default function DateRangePicker(props) {
	const { handleCustomDate } = props;

	return (
		<DataContext.Consumer>
			{context => (
				<React.Fragment>
					<div>
						<p>
							{/* guide for navigating the date picker */}
							{!context.dateState.from && !context.dateState.to && 'Please select the first day.'}
							{context.dateState.from && !context.dateState.to && 'Please select the last day.'}
							{context.dateState.from &&
								context.dateState.to &&
								` ${moment(context.dateState.from.toLocaleDateString()).format('D MMM-YYYY')} to
					${moment(context.dateState.to.toLocaleDateString()).format('D MMM-YYYY')}`}{' '}
							{context.dateState.from &&
								context.dateState.to && (
									<button className="link" onClick={context.handleResetClick}>
										Reset
									</button>
								)}
						</p>

						<DayPicker
							// classNames={styles}
							numberOfMonths={2}
							selectedDays={[context.dateState.from, { from: context.dateState.from, to: context.dateState.to }]}
							modifiers={{ start: context.dateState.from, end: context.dateState.to }}
							onDayClick={context.handleDayClick}
						/>
						<div>
							{' '}
							<Button value="Apply" onClick={context.handleCustomDate} />
							<Button value="Cancel" onClick={context.toggleModal} />
						</div>
					</div>
				</React.Fragment>
			)}
		</DataContext.Consumer>
	);
}
// }
