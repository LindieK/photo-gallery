import React from 'react';
import { shallow } from 'enzyme';
import Nav from '../components/Nav'

describe('Nav Component', () => {
    it('should render correctly', () => {
        const nav = shallow(<Nav />);

        expect(nav).toMatchSnapshot();
    });
});
