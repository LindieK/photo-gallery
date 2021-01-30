import React, {lazy, Suspense} from 'react'
import {ImageWrapper, Placeholder} from '../styles/ImagesStyles'
import {library}from '../ImageLibrary'


const Image = lazy(() => import('./Image'));


const LazyImage = () => {
    return (
        <>
            {library.map(image => (
                <ImageWrapper key={image.id}>
                    <Suspense key={image.id} fallback={<Placeholder />}>
                        <Image key={image.id} image={`https://picsum.photos/1000/1000?random=${image.id}`}/>
                    </Suspense>
                </ImageWrapper>
            ))}
        </>    
        
    )
}

export default LazyImage