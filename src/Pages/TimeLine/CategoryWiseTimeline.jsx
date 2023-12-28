import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import TimelineCard from "./TimelineCard";
import timeline from '../../assets/image/timeLine.jpg'


const CategoryWiseTimeline = () => {
    const products = useLoaderData();
    const { category } = useParams();
    const product = products?.filter(item => item.category.toLowerCase() === category.toLowerCase())
    return (
        <div>
            <Helmet>
                <title>{category}</title>
            </Helmet>
            <Cover img={timeline} title={'Shop your Products'} description={'Choose and add to cart your product from here'}></Cover>


            <div className="flex justify-center gap-4 p-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5">
                    {
                        product.map(item => <TimelineCard key={item._id} item={item}></TimelineCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default CategoryWiseTimeline;