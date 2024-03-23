// pages/index.tsx
import React, {useState} from 'react';
import NextHead from '../components/Head';
import Header from '../components/Home/Header';
import HeroSection from '../components/Home/HeroSection';
import Footer from '../components/Footer';
import HelpfulSection from "../components/Home/HelpfulSection";
import AboutSection from "../components/Home/AboutSection";
import DonateSection from "../components/Home/ApplicationSection";
import ApplicationSection from "../components/Home/ApplicationSection";
import EventSection from "../components/Home/EventSection";
import TestimonialSection from "../components/Home/TestimonialSection";
import BlogSection from "../components/Home/Blog";
import Gallery from "../components/Home/Gallery";
import Preloader from "../components/Preloader";
import ScriptComponent from "../components/Home/Script";
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
               <HelpfulSection />
            </main>
            <Footer/>
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
