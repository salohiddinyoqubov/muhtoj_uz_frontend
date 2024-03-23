import React, { useEffect } from 'react';

const Footer: React.FC = () => {
    useEffect(() => {
        // Add your script initialization code here for any functionality
    }, []);

    return (
        <footer>
            <div className="footer-wrapper footer-bg-one">
                <div className="container">
                    <div className="footer-menu">
                        <div className="col-lg-12">
                            <div className="menu-wrapper d-flex align-items-center justify-content-between">
                                <div className="header-left d-flex align-items-center justify-content-between">
                                    {/* Logo */}
                                    <div className="logo">
                                        <a href="index.html"><img src="https://charitfix.vercel.app/theme/assets/images/logo/dark.png" alt="logo" /></a>
                                    </div>
                                </div>
                                {/* Footer-menu */}
                                <div className="main-menu d-none d-lg-block">
                                    <nav>
                                        <ul className="listing" id="navigation2">
                                            <li className="single-list"><a href="index.html" className="single active">Home</a></li>
                                            <li className="single-list"><a href="donation.html" className="single">Donation</a></li>
                                            <li className="single-list"><a href="about.html" className="single">About</a></li>
                                            <li className="single-list"><a href="blog.html" className="single">Blog</a></li>
                                            <li className="single-list"><a href="contact-us.html" className="single">Contact</a></li>
                                        </ul>
                                    </nav>
                                </div>
                                {/* Right button */}
                                <ul className="cart">
                                    <li className="cart-list"><a href="donate-payment.html" className="donate-btn">Donate</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="footer-line" />

                    <hr className="footer-line" />
                </div>
                {/* footer-bottom area */}
                <div className="footer-bottom-area">
                    <div className="container">
                        <div className="footer-border">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="footer-copy-right text-center">
                                        <p className="pera">Copyright © 2023 initTheme. All rights reserved.</p>
                                        <div className="footer-social-link">
                                            <ul className="listing">
                                                <li className="single-list">
                                                    <a className="single" href=""><i className="ri-facebook-fill"></i></a>
                                                </li>
                                                <li className="single-list">
                                                    <a className="single" href=""><i className="ri-youtube-fill"></i></a>
                                                </li>
                                                <li className="single-list">
                                                    <a className="single" href=""><i className="ri-instagram-line"></i></a>
                                                </li>
                                                <li className="single-list">
                                                    <a className="single" href=""><i className="ri-linkedin-fill"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Scroll To Top */}
            <div className="progressParent" id="back-top">
                <svg className="backCircle svg-inner" width="100%" height="100%" viewBox="-1 -1 102 102">
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"/>
                </svg>
            </div>
            {/* Add an overlay element */}
            <div className="overlay"></div>


        </footer>
    );
};

export default Footer;
