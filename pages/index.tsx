// pages/index.tsx
import React, {useState} from 'react';
import NextHead from '../components/Head';
import Header from '../components/Home/Header';
import HeroSection from '../components/Home/HeroSection';
import Footer from '../components/Footer';
import HelpfulSection from "../components/Home/HelpfulSection";
import AboutSection from "../components/Home/AboutSection";
import ApplicationSection from "../components/Home/ApplicationSection";
import EventSection from "../components/Home/EventSection";
import TestimonialSection from "../components/Home/TestimonialSection";
import BlogSection from "../components/Home/Blog";
import Gallery from "../components/Home/Gallery";
import Preloader from "../components/Preloader";
import Script from "next/script";


const Home: React.FC = () => {
    const [data, setData] = useState<any>(null);

    const fetchData = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/homepage/`);
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <>
            <NextHead/>
            <Header/>
            <main>
                <HeroSection/>
                <HelpfulSection/>
                <AboutSection/>
                <ApplicationSection/>
                <EventSection/>
                <TestimonialSection/>
                <BlogSection/>
                <Gallery/>
            </main>
            <Footer/>
            {/* Load jQuery from CDN */}
            <Script
                src="https://code.jquery.com/jquery-3.7.1.min.js"
                integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
                crossOrigin="anonymous"></Script>
            <Script type="text/javascript"
                    src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></Script>
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.8/js/select2.min.js" defer></Script>

            <Script src="/assets/js/popper.min.js"></Script>
            <Script src="/assets/js/bootstrap-5.3.0.min.js"></Script>
            {/* Plugin */}
            <Script src="/assets/js/plugin.js"></Script>

            {/* Main js */}
            <Script src="/assets/js/main.js"></Script>
            {/* Other content of your page */}

        </>
    );
};

export default Home;
