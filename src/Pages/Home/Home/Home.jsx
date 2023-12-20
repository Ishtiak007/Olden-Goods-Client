import { Helmet } from "react-helmet-async";
import AfterBanner from "../AfterBanner/AfterBanner";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import CategoryOverview from "../CategoryOverview/CategoryOverview";
import RegisterLink from "../RegisterLink/RegisterLink";
import Testimonial from "../Tesitmonial/Testimonial";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Olden Goods | Home
                </title>
            </Helmet>
            <Banner></Banner>
            <AfterBanner></AfterBanner>
            <Category></Category>
            <CategoryOverview></CategoryOverview>
            <RegisterLink></RegisterLink>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;