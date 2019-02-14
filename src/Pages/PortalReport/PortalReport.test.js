import React from 'react';
import ReactDOM from 'react-dom';
import PortalReport from './PortalReport';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PortalReport />, div);
    ReactDOM.unmountComponentAtNode(div);
});
