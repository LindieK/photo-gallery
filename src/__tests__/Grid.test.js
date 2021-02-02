import React from 'react'
import {shallow} from 'enzyme'
import Grid from '../components/Grid'


describe('Grid Component', () => {

    jest.mock('axios', () => {
        const returnedImages = [{
            alt_description: "green leaves in close up photography",
            urls: {
                raw: "https://images.unsplash.com/photo1",
                full: "https://images.unsplash.com/photo2",
                regular: "https://images.unsplash.com/photo3",
                small: "https://images.unsplash.com/photo4",
                thumb: "https://images.unsplash.com/photo5"
            }
        }];

        return {
            get: jest.fn(() =>{
                Promise.resolve(returnedImages);
            })
        };
    });

    const axios = require('axios');

    it('returns images from server on componentDidMount', () => {
        const grid = shallow(<Grid />);
        grid.instance().componentDidMount();
        expect(axios.get).toHaveBeenCalled();
    })
})