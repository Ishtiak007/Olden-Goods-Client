import { Link, NavLink, Outlet } from "react-router-dom";
import useAuth from "../../Components/Hooks/useAuth";
import { FaUser } from "react-icons/fa6";
import useBuyerRequest from "../../Components/Hooks/useBuyerRequest";
import useMyCart from "../../Components/Hooks/useMyCart";
import Swal from "sweetalert2";
import useAdmin from "../../Components/Hooks/useAdmin";


const DashboardLayout = () => {
    const { user, logOut } = useAuth();
    const [whoRequest,] = useBuyerRequest();
    const [cart,] = useMyCart();
    const [isAdmin] = useAdmin();


    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Logout Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(() => {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
    }
    return (
        <div>
            <div className="lg:flex">
                <div className="lg:w-56 md:w-2/3 mx-auto min-h-screen bg-red-400">
                    <div className="menu space-y-3">
                        {
                            isAdmin ? <>
                                <h2 className="text-black text-center my-5 font-bold text-2xl ">Admin Dashboard</h2>


                                <li className="font-bold text-white bg-gray-800 bg-opacity-20 rounded-md">
                                    <NavLink to='/dashboard/addProduct'>Add Your Product (Admin)</NavLink>
                                </li>
                                <li className="font-bold text-white bg-gray-800 bg-opacity-20 rounded-md">
                                    <NavLink to='/dashboard/manageUsers'>All Users / Make Admin</NavLink>
                                </li>
                                <li className="font-bold text-white bg-gray-800 bg-opacity-20 rounded-md">
                                    <NavLink to='/dashboard/manageAllProducts'>Manage All Products</NavLink>
                                </li>
                                <li className="font-bold text-white bg-gray-800 bg-opacity-20 rounded-md">
                                    <NavLink to='/dashboard/myAddedProducts'>Admin Added Products</NavLink>
                                </li>
                                <li className="font-bold text-white bg-gray-800 bg-opacity-20 rounded-md">
                                    <NavLink to='/dashboard/buyerRequest'>Buyer Request <span className="text-yellow-300">({whoRequest.length})</span></NavLink>
                                </li>

                            </>
                                :

                                <>
                                    <h1 className="text-center my-5 font-bold text-2xl">User Dashboard</h1>


                                    <li className="font-bold text-white bg-gray-800 bg-opacity-20 rounded-md">
                                        <NavLink to='/dashboard/addProduct'>Add Your Product</NavLink>
                                    </li>
                                    <li className="font-bold text-white bg-gray-800 bg-opacity-20 rounded-md">
                                        <NavLink to='/dashboard/myCarts'>My Cart <span className="text-green-300">({cart.length})</span></NavLink>
                                    </li>
                                    <li className="font-bold text-white bg-gray-800 bg-opacity-20 rounded-md">
                                        <NavLink to='/dashboard/myAddedProducts'>My Added Products</NavLink>
                                    </li>
                                    <li className="font-bold text-white bg-gray-800 bg-opacity-20 rounded-md">
                                        <NavLink to='/dashboard/buyerRequest'>Buyer Request <span className="text-yellow-300">({whoRequest.length})</span></NavLink>
                                    </li>
                                </>
                        }
                    </div>
                </div>
                <div className="flex-1 lg:p-8 bg-sky-400 bg-opacity-10">
                    <Outlet></Outlet>
                </div>
                <div className="lg:w-40 md:w-2/3 mx-auto min-h-screen bg-red-400">
                    <div className="menu space-y-3">


                        <div className="mx-auto my-6">
                            <div className="dropdown dropdown-left z-10">
                                <label tabIndex={0} className="m-5">
                                    <div className="avatar">
                                        <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            {
                                                user ? <div><img className="mr-3 w-[50px] rounded-full" src={user.photoURL} alt="" /></div> : <FaUser className='mx-auto text-3xl'></FaUser>
                                            }
                                        </div>
                                    </div>
                                </label>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-green-500 rounded-box w-52">
                                    <div>
                                        <li><Link className='font-semibold text-gray-200 mx-auto' ><button onClick={handleLogOut} className='px-3 py-1 rounded-md bg-blue-500 hover:bg-orange-600 w-full'>Log Out</button></Link></li>
                                    </div>
                                </ul>
                            </div>

                        </div>
                        <li><NavLink className='font-semibold text-white' to='/'>Home</NavLink></li>
                        <li><NavLink className='font-semibold text-white' to='/timeline'>Timeline</NavLink></li>
                        <li><NavLink className='font-semibold text-white' to='/contactUs'>Contact Us</NavLink></li>
                        <li><NavLink className='font-semibold text-white' to='/dashboard'>Dashboard</NavLink></li>
                        <li><NavLink className='font-semibold text-white' to='/login'>Login</NavLink></li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;