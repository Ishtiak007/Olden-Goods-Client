import { Link } from "react-router-dom";
import useProducts from "../../../Components/Hooks/useProducts";
import { FaTrash } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Components/Hooks/useAxiosSecure";


const ManageAllProducts = () => {
    const [products, , refetch] = useProducts();
    const axiosSecure = useAxiosSecure();

    const handleDeleteProduct = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/products/${item._id}`);
                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${item.name}, ${item.category} has been deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
        });
    }
    return (
        <div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    Index ({products.length})
                                </th>
                                <th>Image</th>
                                <th>Product
                                    +Name</th>
                                <th>Category</th>
                                <th>Age (Month)</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((item, index) => <tr key={item._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image1} />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>{item.category}</td>
                                    <td>{item.age} Month</td>
                                    <td>
                                        <Link to={`/dashboard/updateProduct/${item._id}`}>
                                            <button className="buttonProject3"><FaEdit className="text-green-400"></FaEdit></button>
                                        </Link>
                                    </td>
                                    <td><button onClick={() => handleDeleteProduct(item)} className="buttonProject3"><FaTrash className="text-red-500"></FaTrash></button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageAllProducts;