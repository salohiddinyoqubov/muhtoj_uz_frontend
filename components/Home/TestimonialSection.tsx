import React from 'react';

const TestimonialSection: React.FC = () => {
    return (
        <section className="testimonial-section-three section-padding">
            <div className="container">
                <div className="row gy-24 align-items-center">
                    <div className="col-xl-4">
                        <div className="section-tittle">
                            <span className="sub-tittle text-capitalize font-600">Testimonials</span>
                            <h2 className="title font-700">That's very glad to get People Review</h2>
                            <p className="pera">If you're interested in donating your Money, it's important to discuss your wishes. These questions are used to provoke thought and discussion. They can be used to challenge the other person's assumptions.</p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-9">
                        <div className="position-relative">
                            <div className="testimonial-slider-three-active flex">
                                <div className="quote-with-img">
                                    <div className="testimonial-images">
                                        <img className="w-100" src="https://charitfix.vercel.app/theme/assets/images/gallery/testimonial.png" alt="image" />
                                    </div>
                                </div>
                                <div className="testimonial-images">
                                    <img className="w-100" src="https://charitfix.vercel.app/theme/assets/images/gallery/testimonial.png" alt="image" />
                                </div>
                                <div className="testimonial-images">
                                    <img className="w-100" src="https://charitfix.vercel.app/theme/assets/images/gallery/testimonial.png" alt="image" />
                                </div>
                            </div>
                            <div className="position-card d-none d-lg-block">
                                <div className="single-testimonial-three">
                                    <div className="rating">
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                    </div>
                                    <div className="position-relative">
                                        <p className="pera"><i>These questions are used to provoke thought and discussion. They can be used to challenge the other person's assumptions, such as "Do you really think that's true?"</i></p>
                                    </div>
                                    <div className="client-info">
                                        <div className="client-image">
                                            <img src="https://charitfix.vercel.app/theme/assets/images/gallery/testimonial-4.png" alt="image" />
                                        </div>
                                        <div className="client-details">
                                            <h3 className="name">Robart Jonson</h3>
                                            <p className="location">Manager</p>
                                        </div>
                                    </div>
                                    <div className="position-absolute quote">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="62" height="45" viewBox="0 0 62 45" fill="none">
                                            <path d="M20.6667 0.75H10.3333C7.59277 0.75 4.96445 1.83869 3.02657 3.77657C1.08869 5.71445 0 8.34277 0 11.0833L0 21.4167C0 22.787 0.544345 24.1011 1.51328 25.0701C2.48222 26.039 3.79639 26.5834 5.16667 26.5834H20.4342C19.8212 30.1911 17.9528 33.4661 15.1591 35.8297C12.3654 38.1932 8.8261 39.4933 5.16667 39.5001C4.48153 39.5001 3.82445 39.7722 3.33998 40.2567C2.85551 40.7412 2.58334 41.3983 2.58334 42.0834C2.58334 42.7685 2.85551 43.4256 3.33998 43.9101C3.82445 44.3946 4.48153 44.6667 5.16667 44.6667C10.6459 44.6606 15.899 42.4812 19.7734 38.6068C23.6479 34.7324 25.8272 29.4793 25.8334 24V5.91667C25.8334 4.54639 25.289 3.23222 24.3201 2.26328C23.3511 1.29434 22.037 0.75 20.6667 0.75Z" fill="#EDEDEF"/>
                                            <path d="M56.8334 0.75H46.5001C43.7595 0.75 41.1312 1.83869 39.1933 3.77657C37.2554 5.71445 36.1667 8.34277 36.1667 11.0833V21.4167C36.1667 22.787 36.7111 24.1011 37.68 25.0701C38.649 26.039 39.9631 26.5834 41.3334 26.5834H56.6009C55.988 30.1911 54.1196 33.4661 51.3258 35.8297C48.5321 38.1932 44.9929 39.4933 41.3334 39.5001C40.6483 39.5001 39.9912 39.7722 39.5067 40.2567C39.0223 40.7412 38.7501 41.3983 38.7501 42.0834C38.7501 42.7685 39.0223 43.4256 39.5067 43.9101C39.9912 44.3946 40.6483 44.6667 41.3334 44.6667C46.8127 44.6606 52.0658 42.4812 55.9402 38.6068C59.8146 34.7324 61.994 29.4793 62.0001 24V5.91667C62.0001 4.54639 61.4558 3.23222 60.4868 2.26328C59.5179 1.29434 58.2037 0.75                                     33.8334 0.75Z" fill="#EDEDEF"/>
                                        </svg>
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

export default TestimonialSection;

