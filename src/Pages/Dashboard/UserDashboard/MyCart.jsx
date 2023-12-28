import Swal from "sweetalert2";
import useAxiosSecure from "../../../Components/Hooks/useAxiosSecure";
import useMyCart from "../../../Components/Hooks/useMyCart";
import { FaCheck, FaTrash } from "react-icons/fa6";
import Marquee from "react-fast-marquee";
import { FaShoppingCart } from "react-icons/fa";
import { SlCallOut } from "react-icons/sl";


const MyCart = () => {
    const [cart, refetch] = useMyCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const axiosSecure = useAxiosSecure();


    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/buyerProduct/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Cart has been deleted from cart.",
                                icon: "success"
                            });
                        }
                    })
                    .then(err => {
                        console.log(err);
                    })
            }
        });
    }
    return (
        <div>
            <div className="lg:flex justify-evenly">
                <h2 className="lg:text-4xl">Your total : <span className="text-green-500">{cart.length}</span> items</h2>
                <h2 className="lg:text-4xl">Total Order cost: <span className="text-green-500">{totalPrice}</span>$</h2>
            </div>
            <div className="my-5">
                <div>
                    <Marquee>
                        <h1 className="flex items-center bg-orange-400 p-4 lg:font-bold text-white rounded-md gap-2"><FaShoppingCart className="text-2xl"></FaShoppingCart> Contact to Seller for payment, As soon as possible <SlCallOut className="text-2xl"></SlCallOut></h1>
                    </Marquee>
                </div>
            </div>
            <div className="overflow-x-auto my-8">
                <table className="table">
                    {/* head */}
                    <thead className="bg-gray-600 text-white">
                        <tr>
                            <th>Index</th>
                            <th>Image</th>
                            <th>Item Name</th>
                            <th>Seller Name</th>
                            <th>Seller email</th>
                            <th>Seller Phone No</th>
                            <th>Cost</th>
                            <th>Cancle</th>
                            <th>Done</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            cart.map((item, index) => <tr key={item._id}>
                                <th className="text-base ">
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-14 h-14">
                                                <img src={item.image1} />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-base ">
                                    {item.name}
                                </td>
                                <td className="text-base ">
                                    {item.uploaderName}
                                </td>
                                <td className="text-sm ">
                                    {item.email}
                                </td>
                                <td className="text-base ">
                                    {item.uploaderPhone}
                                </td>
                                <td className="text-base ">{item.price} $</td>
                                <th>
                                    <button onClick={() => handleDelete(item._id)} className="buttonProject3 "><FaTrash className="text-lg text-red-500"></FaTrash></button>
                                </th>
                                <th>
                                    <button onClick={() => handleDelete(item._id)} className="buttonProject3 "><FaCheck className="text-lg text-green-500"></FaCheck></button>
                                </th>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyCart;