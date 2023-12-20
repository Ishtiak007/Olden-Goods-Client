import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import timeLine from '../../assets/image/timeLine.jpg'
import useProducts from "../../Components/Hooks/useProducts";
import TimelineCard from "./TimelineCard";


const TimeLine = () => {
    const [products] = useProducts();
    return (
        <div>
            <Helmet>
                <title>Olden Goods | Timeline</title>
            </Helmet>
            <Cover img={timeLine} title={'Shop your Products'} description={'Choose and add to cart your product from here'}></Cover>

            <div className="flex justify-center gap-4 p-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5">
                    {
                        products.map(item => <TimelineCard key={item._id} item={item}></TimelineCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default TimeLine;