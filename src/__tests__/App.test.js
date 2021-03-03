import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import Grid from '../components/Grid'
import Search from '../components/Search'
import Categories from '../components/Categories'

describe('App Component', () => {
  it('should render Nav and Grid Components', () => {
    const app = shallow(<App />);

    expect(app.containsAllMatchingElements([<Search/>, <Categories />])).toEqual(true);
  });
  
});
