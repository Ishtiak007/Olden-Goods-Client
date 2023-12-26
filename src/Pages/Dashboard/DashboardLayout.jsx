import { NavLink, Outlet } from "react-router-dom";


const DashboardLayout = () => {
    const isAdmin = false;
    return (
        <div>
            <div className="lg:flex md:flex mt-4">
                <div className="lg:w-64 md:w-64 min-h-screen bg-sky-100 rounded-md">
                    <div className="menu space-y-3">
                        {
                            isAdmin ? <>
                                <h1 className="text-center my-5 font-bold text-2xl">Admin Dashboard</h1>

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
                                    <li>
                                        <NavLink to='/dashboard/addPet'>Add a pet (User)</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/createDonationCampaign'>Create Donation Campaign</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/myAddedPets'>My added pets</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/myDonationCampaign'>My Donation Campaigns</NavLink>
                                    </li>

                                    <li>
                                        <NavLink to='/dashboard/petAdoptor'>Adoption Request</NavLink>
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