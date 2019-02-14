import React from 'react';
import ReactDOM from 'react-dom';
import DateRangePicker from './DateRangePicker';

it('e render and e no crash', () => {
	const div = document.createElement('div');
	ReactDOM.render(<DateRangePicker />, div);
	ReactDOM.unmountComponentAtNode(div);
});
