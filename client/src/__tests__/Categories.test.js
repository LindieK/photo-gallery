import React from 'react'
import {mount} from 'enzyme'
import Categories from '../components/Categories'
import Tab from '../components/Tab'


describe('Categories Component', () => {
    let categories, props;
    beforeEach(() => {
        props = {
            isTabActive: jest.fn(),
            setActiveTab: jest.fn()
        }
        categories = mount(<Categories isTabActive={props.isTabActive} setActiveTab={props.setActiveTab}/>);
    })

    afterEach(() => {
        categories.unmount();
    });

    it('should be called with two props', () => {
        expect(categories.props().isTabActive).toEqual(props.isTabActive);
        expect(categories.props().setActiveTab).toEqual(props.setActiveTab);
    })

    it('props should be functions', () => {
        expect(categories.props().isTabActive).toEqual(expect.any(Function));
        expect(categories.props().setActiveTab).toEqual(expect.any(Function));
    })
    
    it('creates all tabs', () => {
        expect(categories.find(Tab)).toHaveLength(6);
    })

    it('should pass the right parameters to Tab prop methods', () => {
        expect(categories.find(Tab).first().props().content).toEqual("For You");
        expect(categories.find(Tab).first().props().onTabClick).toEqual(expect.any(Function));
        expect(categories.find(Tab).first().props()).toHaveProperty('isActive');
    })
   
})
