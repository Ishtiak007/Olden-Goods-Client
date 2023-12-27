import { NavLink, Outlet } from "react-router-dom";


const DashboardLayout = () => {
    const isAdmin = false;
    return (
        <div>
            <div className="lg:flex md:flex">
                <div className="lg:w-72 md:w-64 min-h-screen bg-red-400">
                    <div className="menu space-y-3">
                        {
                            isAdmin ? <>
                                <h2 className="text-black text-center my-5 font-bold text-2xl ">Admin Dashboard</h2>

                                <li>
                                    <NavLink to='/dashboard/makeAdmin'>All Users / Make Admin</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/manageAllPets'>Manage All Pets</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/allDonations'>All Donation Campaigns</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/addPet'>Add a pet (Admin)</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/createDonationCampaign'>Create Donation Campaign</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/myAddedPets'>Admin added pets</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/petAdoptor'>Adoption Request</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/paymentHistory'>My Donations</NavLink>
                                </li>

                            </>
                                :

                                <>
                                    <h1 className="text-center my-5 font-bold text-2xl">User Dashboard</h1>
                                    <li className="font-bold text-white bg-gray-800 bg-opacity-40 rounded-md">
                                        <NavLink to='/dashboard/addProduct'>Add Your Product</NavLink>
                                    </li>
                                    <li className="font-bold text-white bg-gray-800 bg-opacity-40 rounded-md">
                                        <NavLink to='/dashboard/myAddedProducts'>My Added Products</NavLink>
                                    </li>
                                    <li className="font-bold text-white bg-gray-800 bg-opacity-40 rounded-md">
                                        <NavLink to='/dashboard/myCarts'>My Cart</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/buyResponse'>Who Requested?</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/paymentHistory'>My Donations</NavLink>
                                    </li>
                                </>
                        }
                    </div>
                </div>
                <div className="flex-1 p-8">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;