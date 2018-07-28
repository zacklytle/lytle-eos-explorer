import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Header from "../Header/Header";

describe('App', () => {

    it('renders without crashing', () => {
        shallow(<App/>);
    });

    it('renders the header', () => {
        expect(shallow(<App/>)).toContainReact(React.createElement(Header));
    });
})