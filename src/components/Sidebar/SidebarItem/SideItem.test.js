import React from 'react';
import ReactDOM from 'react-dom';
import { NavList, NavItem, NavSecondaryItems, NavItemWithChildren } from './SidebarItem';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<NavList />, div);
	ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<NavItem />, div);
	ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<NavSecondaryItems />, div);
	ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<NavItemWithChildren />, div);
	ReactDOM.unmountComponentAtNode(div);
});
