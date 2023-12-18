import { HiOutlineShoppingCart } from "react-icons/hi2";



const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div>
            <div className="md:w-4/12 mx-auto text-center my-8 ">
                <div className="flex justify-center items-center mt-3"><HiOutlineShoppingCart className="text-4xl rounded-full"></HiOutlineShoppingCart></div>
                <h3 className=" text-3xl font-bold border-gray-300 border-b-2 pb-2">{heading}</h3>
                <p className=" mb-3 mt-1 subheading-font text-gray-700">{subHeading}</p>
            </div>
        </div>
    );
};

export default SectionTitle;