import React from 'react'
import {mount} from 'enzyme'
import Tab from '../components/Tab'

/* Behaviours to test for in tab
1. li element has a class of active if isActive is true
2. If li is clicked, it calls click method.
3. the li dispalys the content prop 
*/

describe('Tab component', () => {
    let component, props; 
    beforeEach(() => {
        props= {
            content: "For You",
            isActive: true,
            onTabClick: jest.fn()
        }
        component = mount(<Tab content={props.content} isActive={props.isActive} onClick={props.onTabClick}/>);
     });

     afterEach(() => {
         component.unmount();
     });

     it('should have a li element', () => {
        expect(component.find('li')).toHaveLength(1);
     })
     it('should have a class of active', () => {
        expect(component.find('li').hasClass('active')).toEqual(true);
     })
     it('should display content prop in between', () => {
      expect(component.find('li').props().children).toEqual(props.content);
     })
     it('should have an onClick prop', () => {
         expect(component.props()).toHaveProperty('onClick');  
     })
})
