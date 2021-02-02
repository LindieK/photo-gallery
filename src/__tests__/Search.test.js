import React from 'react'
import {mount} from 'enzyme'
import Search from '../components/Search'

describe('Search Component', () => {

    it('should update state on change', () => {
        const query = "dogs";
        const wrapper = mount(<Search />);
        const input = wrapper.find('input');
        input.simulate('change', {target: {value: "dogs"}});

        expect(wrapper.state('query')).toEqual(query);
        wrapper.unmount();

    })
})