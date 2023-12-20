import { Link } from "react-router-dom";


const TimelineCard = ({ item }) => {
    const { image1, name, category, shortDescription, _id } = item;
    return (
        <div className="relative lg:flex md:flex w-full flex-row rounded-xl shadow-md">
            <div className="relative flex-1 m-0 overflow-hidden text-gray-700 bg-white lg:rounded-r-none md:rounded-r-none shrink-0 rounded-md bg-clip-border">
                <img
                    src={image1}
                    alt="image"
                    className="object-cover w-full h-full lg:h-[300px]"
                />
            </div>
            <div className="p-3 flex-1">
                <h4 className="text-xl font-bold ">Product : {name}</h4>
                <h3 className="font-semibold my-4">Category : {category}</h3>
                <div>
                    <p>{shortDescription}</p>
                </div>
                <div className="text-right">
                    <Link to={`/productDetails/${_id}`}><button className="buttonProject3 mt-5">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default TimelineCard;