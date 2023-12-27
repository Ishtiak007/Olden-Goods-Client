import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../../Components/Hooks/useAuth";
import { FaUser } from "react-icons/fa6";
import useBuyerRequest from "../../Components/Hooks/useBuyerRequest";
import useMyCart from "../../Components/Hooks/useMyCart";


const DashboardLayout = () => {
    const { user } = useAuth();
    const [whoRequest,] = useBuyerRequest();
    const [cart,] = useMyCart();
    const isAdmin = true;
    return (
        <div>
            <div className="lg:flex">
                <div className="lg:w-56 md:w-2/3 mx-auto min-h-screen bg-red-400">
                    <div className="menu space-y-3">
                        {
                            isAdmin ? <>
                                <h2 className="text-black text-center my-5 font-bold text-2xl ">Admin Dashboard</h2>

                                <li>
                                    <NavLink to='/dashboard/manageUsers'>All Users / Make Admin</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/manageAllProducts'>Manage All Products</NavLink>
                                </li>
                                <li className="font-bold text-white bg-gray-800 bg-opacity-20 rounded-md">
                                    <NavLink to='/dashboard/addProduct'>Add Your Product (Admin)</NavLink>
                                </li>
                                <li className="font-bold text-white bg-gray-800 bg-opacity-20 rounded-md">
                                    <NavLink to='/dashboard/myAddedProducts'>Admin Added Products</NavLink>
                                </li>
                                <li className="font-bold text-white bg-gray-800 bg-opacity-20 rounded-md">
                                    <NavLink to='/dashboard/buyerRequest'>Buyer Request <span className="text-yellow-300">({whoRequest.length})</span></NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/paymentHistory'>Payment History</NavLink>
                                </li>

                            </>
                                :

                                <>
                                    <h1 className="text-center my-5 font-bold text-2xl">User Dashboard</h1>
                                    <li className="font-bold text-white bg-gray-800 bg-opacity-20 rounded-md">
                                        <NavLink to='/dashboard/myCarts'>My Cart <span className="text-green-300">({cart.length})</span></NavLink>
                                    </li>
                                    <li className="font-bold text-white bg-gray-800 bg-opacity-20 rounded-md">
                                        <NavLink to='/dashboard/addProduct'>Add Your Product</NavLink>
                                    </li>
                                    <li className="font-bold text-white bg-gray-800 bg-opacity-20 rounded-md">
                                        <NavLink to='/dashboard/myAddedProducts'>My Added Products</NavLink>
                                    </li>
                                    <li className="font-bold text-white bg-gray-800 bg-opacity-20 rounded-md">
                                        <NavLink to='/dashboard/buyerRequest'>Buyer Request <span className="text-yellow-300">({whoRequest.length})</span></NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/paymentHistory'>Payment History</NavLink>
                                    </li>
                                </>
                        }
                    </div>
                </div>
                <div className="flex-1 p-8">
                    <Outlet></Outlet>
                </div>
                <div className="lg:w-40 md:w-2/3 mx-auto min-h-screen bg-red-400">
                    <div className="menu space-y-3">
                        <div className="avatar mx-auto my-6">
                            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                {
                                    user ? <div><img className="mr-3 w-[40px] rounded-full" src={user.photoURL} alt="" /></div> : <FaUser className='mx-auto text-3xl'></FaUser>
                                }
                            </div>
                        </div>
                        <li><NavLink className='font-semibold text-white' to='/'>Home</NavLink></li>
                        <li><NavLink className='font-semibold text-white' to='/timeline'>Timeline</NavLink></li>
                        <li><NavLink className='font-semibold text-white' to='/'>Contact Us</NavLink></li>
                        <li><NavLink className='font-semibold text-white' to='/dashboard'>Dashboard</NavLink></li>
                        <li><NavLink className='font-semibold text-white' to='/login'>Login</NavLink></li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;