import React from 'react'
import {mount} from 'enzyme'
import LazyImage from '../components/LazyImage'

describe('LazyImage Component', () => {
    let lazyImage, props;

    beforeEach(() => {
        props ={
            image: 'https://unsplash.api/bla-bla-bla',
            alt: 'dummy text here'
        }
        lazyImage = mount(<LazyImage {...props} />);
    });

    it('should carry the image url and alt text as props', () => {
        
        expect(lazyImage.prop('image')).toBe(props.image)
    })

    it('should carry alt text as props', () => {
        
        expect(lazyImage.prop('alt')).toEqual(props.alt)
    })
})