import React from 'react';

const Gallery: React.FC = () => {
    return (
        <div className="gallery-area">
            <div className="gallery-slider d-flex">
                <div className="gallery-img">
                    <img src="https://charitfix.vercel.app/theme/assets/images/gallery/gallery-1.png" alt="img" />
                </div>
                <div className="gallery-img">
                    <img src="https://charitfix.vercel.app/theme/assets/images/gallery/gallery-2.png" alt="img" />
                </div>
                <div className="gallery-img">
                    <img src="https://charitfix.vercel.app/theme/assets/images/gallery/gallery-3.png" alt="img" />
                </div>
                <div className="gallery-img">
                    <img src="https://charitfix.vercel.app/theme/assets/images/gallery/gallery-4.png" alt="img" />
                </div>
                <div className="gallery-img">
                    <img src="https://charitfix.vercel.app/theme/assets/images/gallery/gallery-2.png" alt="img" />
                </div>
                <div className="gallery-img">
                    <img src="https://charitfix.vercel.app/theme/assets/images/gallery/gallery-3.png" alt="img" />
                </div>
                <div className="gallery-img">
                    <img src="https://charitfix.vercel.app/theme/assets/images/gallery/gallery-1.png" alt="img" />
                </div>
            </div>
        </div>
    );
};

export default Gallery;
