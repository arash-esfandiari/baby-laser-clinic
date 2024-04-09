import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import leg1Img from '../assets/images/leg1.jpeg'
import leg2Img from '../assets/images/leg2.jpeg'
import leg3Img from '../assets/images/leg3.png'
// import leg4Img from '../assets/images/leg4.png'
import leg5Img from '../assets/images/leg5.png'

const ImageGallery = () => {
    const images = [
        { id: 1, src: leg3Img },
        { id: 2, src: leg2Img },
        { id: 3, src: leg5Img },
        // Add more images as needed
    ];

    return (
        <div className="container-fluid my-5">
            <div className="row g-3"> {/* Adjust 'g-3' for the gap size between images */}
                {images.map((image) => (
                    <div key={image.id} className="col-4">
                        <div className="h-100">
                            <img src={image.src} alt={`${image.id}`} className="img-fluid" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageGallery;
