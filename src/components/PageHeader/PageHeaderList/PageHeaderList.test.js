import React from 'react';
import ReactDOM from 'react-dom';
import PageHeaderList from './PageHeaderList';

it('e render and e no crash', () => {
	const div = document.createElement('div');
	ReactDOM.render(<PageHeaderList />, div);
	ReactDOM.unmountComponentAtNode(div);
});
