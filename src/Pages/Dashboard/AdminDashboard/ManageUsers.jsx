import { useQuery } from "@tanstack/react-query";
import { FaTrash } from "react-icons/fa6";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Components/Hooks/useAxiosSecure";


const ManageUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    });


    const handleDeleteUser = (user) => {
        Swal.fire({
            title: "Make sense, Are you sure?",
            text: "You won't be able to delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Delete User!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    })
            }
        });
    }


    const handleMakeAdmin = (user) => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data);

                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${user.name} is an Admin now`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    return (
        <div>
            <div className="flex justify-evenly">
                <h2 className="text-2xl font-bold">All Users / Make Admin</h2>
                <h2 className="text-2xl font-bold">Total Users : {users.length}</h2>
            </div>

            <div className="overflow-x-auto">
                <table className="table table-zebra my-5">
                    {/* head */}
                    <thead className="bg-gray-500 ">
                        <tr>
                            <th className="text-white">Index</th>
                            <th className="text-white">Profile Photo</th>
                            <th className="text-white">Name</th>
                            <th className="text-white">Email</th>
                            <th className="text-white">Role</th>
                            <th className="text-white">Ban User/Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <th><div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={user?.photoURL} />
                                        </div>
                                    </div>
                                </div></th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {user.role === 'admin' ? 'Admin Now' : <button onClick={() => handleMakeAdmin(user)} className="buttonProject3">Make Admin</button>}
                                </td>
                                <td><button onClick={() => handleDeleteUser(user)} className="buttonProject3 flex items-center gap-2"><FaTrash className=" text-red-500"></FaTrash>Ban</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;