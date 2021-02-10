import React from 'react'
import {shallow} from 'enzyme'
import Grid from '../components/Grid'
import axios from 'axios'


describe('Grid Component', () => {
    let spyDidMount = jest.spyOn(Grid.prototype,"componentDidMount");

    afterEach(() => {
        spyDidMount.mockClear();
    })

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

        axios.get.mockResolvedValue(returnedImages);
    });


    it('returns images from server on componentDidMount', () => {
        expect(spyDidMount).toHaveBeenCalledTimes(0);

        shallow(<Grid />);
        expect(spyDidMount).toHaveBeenCalledTimes(1);
    })
})