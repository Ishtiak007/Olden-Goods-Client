import { Helmet } from "react-helmet-async";
import AfterBanner from "../AfterBanner/AfterBanner";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import CategoryOverview from "../CategoryOverview/CategoryOverview";
import RegisterLink from "../RegisterLink/RegisterLink";
import Testimonial from "../Tesitmonial/Testimonial";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";


const Home = () => {
    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <div className="overflow-hidden">
            <Helmet>
                <title>
                    Olden Goods | Home
                </title>
            </Helmet>

            <div data-aos="fade-up" data-aos-duration="1500">
                <Banner></Banner>
            </div>

            <div data-aos="fade-up" data-aos-duration="1500">
                <AfterBanner></AfterBanner>
            </div>

            <div data-aos="fade-up" data-aos-duration="1500">
                <Category></Category>
            </div>

            <div data-aos="fade-up" data-aos-duration="1500">
                <CategoryOverview></CategoryOverview>
            </div>

            <div data-aos="fade-up" data-aos-duration="1500">
                <RegisterLink></RegisterLink>
            </div>

            <div data-aos="fade-up" data-aos-duration="1500">
                <Testimonial></Testimonial>
            </div>
        </div>
    );
};

export default Home;