import { Link } from "react-router-dom";
import { FaBars, FaUser } from "react-icons/fa6";
import logo from '../../assets/image/logo.png'
import useAuth from "../../Components/Hooks/useAuth";
import Swal from "sweetalert2";
import { FaBell } from "react-icons/fa6";
import useBuyerRequest from "../../Components/Hooks/useBuyerRequest";

const Navbar = () => {
    const { user, logOut } = useAuth();
    const [whoRequest,] = useBuyerRequest();

    const navLinks = <>
        <li><Link className='font-semibold text-white' to='/'>Home</Link></li>
        <li><Link className='font-semibold text-white' to='/timeline'>Timeline</Link></li>
        <li><Link className='font-semibold text-white' to='/contactUs'>Contact Us</Link></li>
        <li><Link className='font-semibold text-white' to='/dashboard/addProduct'>Dashboard</Link></li>
        <li><Link className='font-semibold text-white' to='/login'>Login</Link></li>
        <li><Link className='font-semibold text-white' to='/dashboard/buyerRequest'><span className="flex gap-1 items-center"><FaBell className="text-xl"></FaBell> <span className="text-yellow-300"><div className="badge badge-secondary">{whoRequest.length}</div></span></span></Link></li>

    </>
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
        <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white px-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <FaBars className="text-2xl"></FaBars>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-400 space-y-2 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link to='/'><img src={logo} className="lg:w-[120px] md:w-[120px] lg:h-16 ml-5" alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-left z-10">
                    <label tabIndex={0} className="m-5">
                        <div className="avatar">
                            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                {
                                    user ? <div><img className="mr-3 w-[40px] rounded-full" src={user.photoURL} alt="" /></div> : <FaUser className='mx-auto text-3xl'></FaUser>
                                }
                            </div>
                        </div>
                    </label>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-red-400 rounded-box w-52">
                        <div>
                            <div className='my-5 text-xs text-white'>User Email : <br />{user ? <>{user.email}</> : <span className='text-black font-bold'>You are not Logged in</span>}</div>

                            <li><Link to='/dashboard/addProduct' className='font-semibold text-gray-200 my-2 mx-auto'><button className='px-3 py-1 rounded-md bg-blue-500 hover:bg-orange-600  w-full'>Dashboard</button></Link></li>

                            <li><Link className='font-semibold text-gray-200 mx-auto' ><button onClick={handleLogOut} className='px-3 py-1 rounded-md bg-blue-500 hover:bg-orange-600 w-full'>Log Out</button></Link></li>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;