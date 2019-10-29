import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.css'

const ImageCarousel = ({pictures}) => {
    const carImages = pictures.map((picture, index) => {
        return (
            <div key={index}>
                <img src={picture.url} alt={picture.name}/>
                {/*<p className="legend">{picture.name}</p>*/}
            </div>
        )
    });


    return (
        <Carousel
            showArrows={true}
            infiniteLoop={true}
            showIndicators={false}
            autoPlay={false}
            showThumbs={false}
            emulateTouch={true}
        >

            {carImages}
            {/*<div>*/}
            {/*    <img src="assets/1.jpeg"/>*/}
            {/*    <p className="legend">Legend 1</p>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <img src="assets/2.jpeg"/>*/}
            {/*    <p className="legend">Legend 2</p>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <img src="assets/3.jpeg"/>*/}
            {/*    <p className="legend">Legend 3</p>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <img src="assets/4.jpeg"/>*/}
            {/*    <p className="legend">Legend 4</p>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <img src="assets/5.jpeg"/>*/}
            {/*    <p className="legend">Legend 5</p>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <img src="assets/6.jpeg"/>*/}
            {/*    <p className="legend">Legend 6</p>*/}
            {/*</div>*/}
        </Carousel>
    );
};


export default ImageCarousel;