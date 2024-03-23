const AboutSection = () => {
    return (
        <section className="about-area">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-6 my-auto">
                        {/* Section Tittle */}
                        <div className="section-tittle mb-35">
                            <span className="sub-tittle text-capitalize font-600">About us</span>
                            <h2 className="title font-700 pb-15">We Are Best Treatment For Our Hospita</h2>
                            <p className="pera-subtitle mb-15">When deciding which charity to donate to, it's important to do your e search and find one that aligns with your values and interests. Look for charities that are transparent preventable diseases,</p>
                            <p className="pera-subtitle">When deciding which charity to donate to, it's important to do your e search and find one that aligns with your values and interests. Look for charities that are transparent preventable diseases,</p>
                        </div>
                        <div className="about-info">
                            <div className="row">
                                <div className="col-lg-10 mb-20">
                                    <div className="d-flex gap-20">
                                        <div className="info-icon">
                                            <i className="ri-hand-heart-line"></i>
                                        </div>
                                        <div className="info-content">
                                            <h4 className="title">Donation</h4>
                                            <p className="pera">Fund programs that help children escape poverty providing vocational training.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-10 mb-20">
                                    <div className="d-flex gap-20">
                                        <div className="info-icon">
                                            <i className="ri-user-line"></i>
                                        </div>
                                        <div className="info-content">
                                            <h4 className="title">Volunteer</h4>
                                            <p className="pera">Fund programs that help children escape poverty providing vocational training.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-10 mt-10">
                                    <a href="about.html" className="btn btn-primary-fill">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="position-relative h-100">
                            <div className="play-button">
                                <a id="play-video-two" className="video-play-button-two d-none d-lg-block d-none d-lg-block" href="javascript:void(0)">
                                    <span></span>
                                </a>
                                <div id="video-overlay" className="video-overlay">
                                    <a className="video-overlay-close">&times;</a>
                                </div>
                            </div>
                            <div >
                                <img className="w-100 d-none d-lg-block" src="https://charitfix.vercel.app/theme/assets/images/gallery/about-3.png" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
