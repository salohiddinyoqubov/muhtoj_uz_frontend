import React from 'react';

const BlogSection: React.FC = () => {
    return (
        <section className="blog-section-three bottom-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-7">
                        {/* Section Tittle */}
                        <div className="section-tittle text-center mb-50">
                            <span className="sub-tittle text-capitalize font-600">Blog</span>
                            <h2 className="title font-700">Our Blog & Feeds</h2>
                        </div>
                    </div>
                </div>
                <div className="row gy-24">
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 view-wrapper">
                        <div className="single-blog h-calc wow fadeInUp" data-wow-delay="0.0s">
                            <div className="blog-img">
                                <a href="blog-details.html">
                                    <img src="https://charitfix.vercel.app/theme/assets/images/gallery/blog-7.png" className="img-fluid w-100" alt="img" />
                                </a>
                                <div className="brush-bg">
                                    <img src="https://charitfix.vercel.app/theme/assets/images/gallery/brush.png" alt="image" />
                                </div>
                            </div>
                            <div className="blog-info">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="blog-info-title">
                                        <div className="flex gap-16 mb-15 align-items-center">
                                            <div className="user flex gap-10 align-items-center">
                                                <i className="ri-user-line"></i>
                                                <p className="info">By: admin</p>
                                            </div>
                                            <div className="donate flex gap-10 align-items-center">
                                                <i className="ri-chat-3-line"></i>
                                                <p className="info">Donation</p>
                                            </div>
                                        </div>
                                        <h4 className="title text-capitalize"><a href="blog-details.html">We assure you that your donation will be used wisely.</a></h4>
                                        <p className="subtitle">We understand that there are many people organization The seeking support,</p>
                                    </div>
                                </div>
                            </div>
                            <div className="button-section"><a href="blog-details.html" className="read-btn">Read More</a></div>
                        </div>
                    </div>
                    {/* Repeat similar structure for other blog items */}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
