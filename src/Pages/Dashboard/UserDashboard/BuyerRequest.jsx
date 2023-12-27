import Swal from "sweetalert2";
import useAxiosSecure from "../../../Components/Hooks/useAxiosSecure";
import useBuyerRequest from "../../../Components/Hooks/useBuyerRequest";
import { FaCheck } from "react-icons/fa6";


const BuyerRequest = () => {
    const [whoRequest, refetch] = useBuyerRequest();
    const axiosSecure = useAxiosSecure()


    const handleDeleteItem = (item) => {
        console.log(item)
        Swal.fire({
            title: "Are you sure?",
            text: "This person made his paid?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, handover it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/buyerProduct/${item._id}`);
                if (res.data.deletedCount > 0) {
                    // refetch to update the profile
                    refetch();
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Product has been handovered",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
        });
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                Index ({whoRequest.length})
                            </th>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Buyer Email</th>
                            <th>Phone Number</th>
                            <th>Buyer Location</th>
                            <th>Status</th>
                            <th>Handover</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            whoRequest.map((item, index) => <tr key={item._id}>
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
                                <td>{item.buyerEmail}</td>
                                <td>{item.phoneNumber}</td>
                                <td>
                                    {item.buyerAddress}
                                </td>
                                <td>
                                    <span className="text-red-500 font-bold">{item.status}</span>

                                </td>
                                <td>
                                    <button onClick={() => handleDeleteItem(item)} className="btn"><FaCheck className="text-green-600"></FaCheck></button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BuyerRequest;