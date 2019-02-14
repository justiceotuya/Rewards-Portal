import React from 'react';
import ReactDOM from 'react-dom';
import AdminUsers from './AdminUsers';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AdminUsers />, div);
    ReactDOM.unmountComponentAtNode(div);
});
