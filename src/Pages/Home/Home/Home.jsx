import AfterBanner from "../AfterBanner/AfterBanner";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import CategoryOverview from "../CategoryOverview/CategoryOverview";
import RegisterLink from "../RegisterLink/RegisterLink";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AfterBanner></AfterBanner>
            <Category></Category>
            <CategoryOverview></CategoryOverview>
            <RegisterLink></RegisterLink>
        </div>
    );
};

export default Home;