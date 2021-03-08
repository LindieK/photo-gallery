import React from 'react';
import { shallow } from 'enzyme';
import Search from '../components/Search'
import axios from 'axios'

describe('Search Component', () => {
   
    const testState = {
        query: ''
    }

    const photodata = {
        data: [
            {
                photo: 'pic1',
            },
            {
                photo: 'pic2'
            },
            {
                photo: 'pic2'
            }
        ]
    }

    jest.mock('axios');

    const mockAsync = jest.fn(() => {
       return axios.get.mockResolved(photodata)
    });
    
    const wrapper = shallow(<Search handleSearchTermChange={(e) => testState[e.target.name] = e.target.value} handleFormSubmit={mockAsync}/>);
     

    describe('the user populates the search field', () => {
        const searchField = wrapper.find('input');
        searchField.simulate('change', {target: {name:'query', value: 'Dogs'}});

        const Form = wrapper.find('form');
    
        it('should update state property query', () => {
          expect(testState.query).toEqual('Dogs');
        });

        it('should call function on submit', () => {   
            Form.simulate('submit');         
            expect(mockAsync).toHaveBeenCalled();
        });

        it('should return json object on submit', () => {
            Form.simulate('submit'); 
            expect(mockAsync).toHaveReturned();
        });
    });
})