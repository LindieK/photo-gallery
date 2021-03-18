import React from 'react';
import { shallow} from 'enzyme';
import App from '../App';
import Grid from '../components/Grid'
import Search from '../components/Search'
import Categories from '../components/Categories'
import ImageModal from '../components/ImageModal';
import InfoModal from '../components/InfoModal';
import Spinner from '../components/Spinner';

describe('App Component', () => {
  let app;

  beforeEach(() => {
    app = shallow(<App />);

  });

  afterEach(() => {
    app.unmount();
  })

  it('should render Nav bar', () => {
    expect(app.containsAllMatchingElements([<Search/>, <Categories />])).toEqual(true);
  });

  it('should not render Grid on page entry', () => {
    expect(app.containsMatchingElement(<Grid />)).toEqual(false);
  });

  it('should render the Spinner on page entry', () => {
    expect(app.containsMatchingElement(<Spinner />)).toEqual(true);
  })

  it('should not render Image Modal', () => {
    expect(app.containsMatchingElement(<ImageModal />)).toEqual(false);
  });

  it('should not render Info Modal', () => {
    expect(app.containsMatchingElement(<InfoModal />)).toEqual(false);
  });
});
