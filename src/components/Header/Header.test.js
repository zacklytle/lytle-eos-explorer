import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header', () => {
    it('renders without crashing', () => {
        shallow(<Header/>);
    });

    it('renders an image', () => {
        expect(shallow(<Header/>).find('img').prop('src')).toEqual('logo.gif');
    });

    it('renders text', () => {
        expect(shallow(<Header/>).find('.header h1').text()).toEqual('A Lytle EOS Explorer');
    });
});