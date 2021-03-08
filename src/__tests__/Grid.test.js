import React from 'react';
import {shallow} from 'enzyme';
import Grid from '../components/Grid'
import {GridBox, SearchEmptyState, ResultsIcon, ResultsMsg} from '../styles/GridBoxStyles'


describe('Grid Component', () => {
    let grid, props;
    beforeEach(() => {
        props = {
            handleShowImageInfo: jest.fn(),
            query: '',
            photos: [
                {
                    id: 1, 
                    urls:{
                        raw:'raw',
                        full:'full',
                        medium:'medium',
                        small:'small'
                    },
                    alt_description: 'text here'
                },
                {
                    id: 2, 
                    urls:{
                        raw:'raw',
                        full:'full',
                        medium:'medium',
                        small:'small'
                    },
                    alt_description: 'text here'
                }

            ]
            
        }
        
    });

    it('should not display grid when there are no photos', () => {
        grid = shallow(<Grid photos={[]}/>);
        expect(grid.containsMatchingElement(<GridBox />)).toEqual(false);
    });

    /*it('should display grid when there are photos', () => {
        grid = shallow(<Grid photos={props.photos} />);
        expect(grid.containsMatchingElement(<GridBox />)).toEqual(true);
    });

    it('should display the search empty state when they are no photos', () => {
        grid = shallow(<Grid photos={[]} query={props.query} displayModal={props.handleShowImageInfo}/>);
        expect(grid.containsMatchingElement(<SearchEmptyState />)).toEqual(true);
    })*/
})