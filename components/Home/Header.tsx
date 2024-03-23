// components/Header.tsx
import DonationButton from "./DonationButton";
import Link from "next/link";

const Header = () => {
    return (
        <header>
            <div className="header-area-three">
                <div className="main-header">
                    {/* Top */}
                    <div className="header-top">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 d-none d-lg-block">
                                    <div className="top-menu">
                                        <div className="contact-info">
                                            <a href="javascript:void(0)" className="pera"> Ishonch telefoni (71)
                                                200-90-01<span className="pl-20 pr-20">/</span>info@muhtoj.uz </a>
                                        </div>
                                        <div className="header-social-link">
                                            <ul className="listing">
                                                <li className="single-list">
                                                    <a href="javascript:void(0)" className="single"><i
                                                        className="ri-facebook-fill"></i></a>
                                                </li>
                                                <li className="single-list">
                                                    <a href="javascript:void(0)" className="single"><i
                                                        className="ri-youtube-fill"></i></a>
                                                </li>
                                                <li className="single-list">
                                                    <a href="javascript:void(0)" className="single"><i
                                                        className="ri-instagram-line"></i></a>
                                                </li>
                                                <li className="single-list">
                                                    <a href="javascript:void(0)" className="single"><i
                                                        className="ri-linkedin-fill"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <hr/>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Bottom */}
                    <div className="header-bottom header-sticky">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="menu-wrapper d-flex align-items-center justify-content-between">
                                        <div className="header-left d-flex align-items-center justify-content-between">
                                            <div className="logo logo-large light-logo">
                                                <Link href="/"><img
                                                    src="/assets/images/logo/logo-website.png"
                                                    alt="logo"/></Link>
                                            </div>
                                            {/* Logo Mobile*/}
                                            <div className="logo logo-mobile light-logo">
                                                <a href="index.html"><img
                                                    src="../../static/site/assets/images/icon/favicon.png"
                                                    alt="img"/></a>
                                            </div>
                                        </div>
                                        <div className="search-container">
                                            <input type="text" id="searchField" className="search-field"
                                                   placeholder="Search..."/>
                                            <button id="closeSearch" className="close-search-btn"><i
                                                className="ri-close-line"></i></button>
                                        </div>
                                        {/* Main-menu for desktop */}
                                        <div className="main-menu d-none d-lg-block">
                                            <nav>
                                                <ul className="listing" id="navigation">
                                                    <li className="single-list"><Link href="/about" className="single">Biz
                                                        haqimizda</Link></li>
                                                    <li className="single-list"><a href="donation.html"
                                                                                   className="single">Ehson qilish</a>
                                                    </li>
                                                    <li className="single-list"><a href="blog.html"
                                                                                   className="single">Blog</a></li>
                                                    <li className="single-list"><a href="contact-us.html"
                                                                                   className="single">Aloqa</a></li>
                                                </ul>
                                            </nav>
                                        </div>
                                        <div className="header-right d-flex align-items-center">
                                            {/* Right button */}
                                            <DonationButton/>
                                        </div>
                                    </div>
                                    {/* Mobile Menu */}
                                    <div className="div">
                                        <div className="mobile_menu d-block d-lg-none"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
