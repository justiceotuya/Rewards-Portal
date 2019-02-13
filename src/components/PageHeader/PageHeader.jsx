import React, { useState } from 'react';
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
			</div>

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

			<div className={styles.pageSearch}>
				<form className={styles.pageSearch__form}>
					<input type="search" name="search" className={styles.search} placeholder="Search" />
					<i className={`fas fa-search ${styles.icon}`} />
				</form>
			</div>
		</div>
	);
}
