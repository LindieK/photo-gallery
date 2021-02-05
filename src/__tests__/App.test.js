import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import Grid from './components/Grid'
import Nav from './components/Nav'

describe('App Component', () => {
  it('should render Nav and Grid Components', () => {
    const app = shallow(<App />);

    expect(app.containsAllMatchingElements([<Nav />,<Grid />])).toEqual(true);
  });
  
});
