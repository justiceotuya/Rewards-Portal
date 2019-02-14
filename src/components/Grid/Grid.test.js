import React from 'react';
import ReactDOM from 'react-dom';
import DateRangePicker from './DateRangePicker';
import { BigGrid, SmallGrid } from './Grid';

it('e render and e no crash', () => {
	const div = document.createElement('div');
	ReactDOM.render(<BigGrid />, div);
	ReactDOM.unmountComponentAtNode(div);
});

it('e render and e no crash', () => {
	const div = document.createElement('div');
	ReactDOM.render(<SmallGrid />, div);
	ReactDOM.unmountComponentAtNode(div);
});
