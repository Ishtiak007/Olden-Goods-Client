import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import logo from '../../assets/image/logo.png'

const Navbar = () => {

    const navLinks = <>
        <li><Link className='font-semibold text-white' to='/'>Home</Link></li>
        <li><Link className='font-semibold text-white' to='/timeline'>Timeline</Link></li>
        <li><Link className='font-semibold text-white' to='/'>Contact Us</Link></li>
        <li><Link className='font-semibold text-white' to='/'>Dashboard</Link></li>
        <li><Link className='font-semibold text-white' to='/'>Login</Link></li>

    </>
    return (
        <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white px-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <FaBars></FaBars>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link to='/'><img src={logo} className="lg:w-[120px] lg:h-16 ml-5" alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
            </div>
        </div>
    );
};

export default Navbar;