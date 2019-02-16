import React from 'react';
import styles from './PageHeader.module.scss';
import PageHeaderList from './PageHeaderList/PageHeaderList';
import Button from '../Button/Button';

export default function PageHeader(props) {
	const { page, date, toggleDate, toggleDatePicker, handleClick, activeIndex, Day } = props;
	return (
		<div className={styles.pageHeader}>
			<div className={styles.pageHeader__item}>
				<span className={styles.pageHeader__title}>{page}</span>
				<span className={styles.pageHeader__date}>
					<span className={styles.pageHeader__date__day}>{date}</span>
					<span className={styles.pageHeader__date__daymonth}>{Day}</span>
					<span className={styles.dropdown} onClick={toggleDate}>
						<i className="fas fa-angle-down" />
					</span>
				</span>

				{/* toggle  the date picker on if the toggle datepicker is true*/}
				{toggleDatePicker ? (
					<div className={styles.date}>
						<ul name="date" id="date">
							<PageHeaderList activeIndex={activeIndex} handleClick={handleClick} />

							<Button value="Apply" />
							<Button value="Cancel" />
						</ul>
					</div>
				) : null}
			</div>

			<div className={styles.pageSearch}>
				{/* create button based on value */}
				{props.value !== undefined ? <Button value={props.value} buttonClassName={props.buttonClassName} /> : null}

				<form className={styles.pageSearch__form}>
					<div className={styles.search__box}>
						<input type="search" name="search" className={styles.search} placeholder="Search" />
						<i className={`fas fa-search ${styles.icon}`} />
					</div>
				</form>
			</div>
		</div>
	);
}
