import React from 'react';
import App from './App';
import { shallow, mount } from 'enzyme';

describe(<App />, function() {
    it('Renders without crashing', () => {
        shallow(<App />);
    });
})