import Swal from "sweetalert2";
import useAxiosSecure from "../../../Components/Hooks/useAxiosSecure";
import useMyCart from "../../../Components/Hooks/useMyCart";
import { FaTrash } from "react-icons/fa6";


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
                                text: "Your Cart has been deleted.",
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
            <div className="flex justify-evenly">
                <h2 className="lg:text-4xl">Your total : <span className="text-green-500">{cart.length}</span> items</h2>
                <h2 className="lg:text-4xl">Total Order cost: <span className="text-green-500">{totalPrice}</span>$</h2>
            </div>
            <div className="flex justify-center my-4">
                {/* <div>
                    {

                        cart.length ? <Link to='/dashboard/payment'>
                            <button className="px-4 py-2 bg-[#FF4860] rounded-2xl btn-outline text-white font-bold flex items-center gap-3">{`Pay ${totalPrice}$ now `}<FaCcStripe className="text-2xl"></FaCcStripe></button>
                        </Link>
                            :

                            <button disabled className="px-4 py-2 bg-[#FF4860] rounded-2xl btn-outline text-white font-bold flex items-center gap-3">Pay now <FaCcStripe className="text-2xl"></FaCcStripe></button>

                    }
                </div> */}
            </div>
            <div className="overflow-x-auto my-8">
                <table className="table">
                    {/* head */}
                    <thead className="bg-gray-600 text-white">
                        <tr>
                            <th className="text-lg font-bold">
                                Index
                            </th>
                            <th className="text-lg font-bold">Image</th>
                            <th className="text-lg font-bold">Item Name</th>
                            <th className="text-lg font-bold">Cost</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            cart.map((item, index) => <tr key={item._id}>
                                <th className="text-base font-bold">
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-16 h-16">
                                                <img src={item.image1} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-base font-bold">
                                    {item.name}
                                </td>
                                <td className="text-base font-bold">{item.price} $</td>
                                <th>
                                    <button onClick={() => handleDelete(item._id)} className="btn btn-ghost "><FaTrash className="text-xl text-red-500"></FaTrash></button>
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