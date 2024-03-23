import React from 'react';

const HeroSection = () => {
    return (
        <section className="hero-area-three">
            <div className="single-slider hero-padding-three">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 my-auto">
                            <div className="hero-caption mb-20">
                                <p className="key-title font-700 mb-20">Go For Help</p>
                                <h1 className="title font-700" data-animation="fadeInUp" data-delay=".0s">
                                    Birgalikda muhtojlarga quvonch ulashaylik
                                </h1>
                                <p className="pera mx-width-780" data-animation="fadeInUp" data-delay=".2s">
                                    <a href="/static" className="font-700">
                                        Muhtoj.uz
                                    </a>{' '}
                                    loyihasining bosh maqsadi, ehtiyojmand insonlarning ehtijoylarini qondiruvchi
                                    insonlarni topish, ularning ehtiyojlarini yetkazish.
                                </p>
                                <div className="d-flex gap-20 flex-wrap align-items-center">
                                    <a href="donation.html" className="btn-primary-fill pill-btn"
                                       data-animation="fadeInLeft" data-delay=".4s">
                                        Ehson qilish
                                    </a>
                                    {/* Multi-image display */}
                                    <div className="d-flex">
                                        <div className="multi-image-one">
                                            <img
                                                src="https://charitfix.vercel.app/theme/assets/images/gallery/testimonial-4.png"
                                                alt="image"/>
                                        </div>
                                        <div className="multi-image-two">
                                            <img
                                                src="https://charitfix.vercel.app/theme/assets/images/gallery/testimonial-5.png"
                                                alt="image"/>
                                        </div>
                                        <div className="multi-image-three">
                                            <img
                                                src="https://charitfix.vercel.app/theme/assets/images/gallery/testimonial-6.png"
                                                alt="image"/>
                                        </div>
                                        <div className="multi-image-one">
                                            <img
                                                src="https://charitfix.vercel.app/theme/assets/images/gallery/testimonial-4.png"
                                                alt="image"/>
                                        </div>
                                        {/* Add more multi-image components as needed */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
