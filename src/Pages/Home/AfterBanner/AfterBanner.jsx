import { TbWorldUpload } from "react-icons/tb";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FcOnlineSupport } from "react-icons/fc";
import { FaHandshakeSimple } from "react-icons/fa6";

const AfterBanner = () => {
    return (
        <div className="lg:flex justify-center gap-4 space-y-1">

            <div className="card flex-1 shadow-sm  lg:h-[250px] rounded-3xl">
                <div className="flex justify-center items-center mt-3"><TbWorldUpload className="text-8xl text-red-400 p-3 bg-orange-100  rounded-full"></TbWorldUpload></div>
                <div className="card-body text-center">
                    <h2 className="text-xl font-semibold text-center text-gray-600">
                        Post Your Olden Goods/products for sell
                    </h2>
                </div>
            </div>




            <div className="card flex-1 shadow-sm  lg:h-[250px] rounded-3xl">
                <div className="flex justify-center items-center mt-3"><HiOutlineShoppingCart className="text-8xl text-red-400 p-3 bg-orange-100 rounded-full"></HiOutlineShoppingCart></div>
                <div className="card-body text-center">
                    <h2 className="text-xl font-semibold text-center text-gray-600">
                        Add to cart your necessary products
                    </h2>
                </div>
            </div>


            <div className="card flex-1 shadow-sm  lg:h-[250px] rounded-3xl">
                <div className="flex justify-center items-center mt-3"><FcOnlineSupport className="text-8xl text-red-400 p-3 bg-orange-100 rounded-full"></FcOnlineSupport></div>
                <div className="card-body text-center">
                    <h2 className="text-xl font-semibold text-center text-gray-600">
                        Simplify transactions: Connect with buyer or seller.
                    </h2>
                </div>
            </div>



            <div className="card flex-1 shadow-sm   lg:h-[250px] rounded-3xl">
                <div className="flex justify-center items-center mt-3"><FaHandshakeSimple className="text-8xl text-red-400 bg-orange-100 rounded-full"></FaHandshakeSimple></div>
                <div className="card-body text-center">
                    <h2 className="text-xl font-semibold text-center text-gray-600">
                        Elevate Your online buying and selling Experience!
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default AfterBanner;