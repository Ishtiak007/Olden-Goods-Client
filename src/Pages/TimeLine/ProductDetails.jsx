// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './style.css';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link, useLoaderData } from 'react-router-dom';
import useAuth from '../../Components/Hooks/useAuth';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Components/Hooks/useAxiosSecure';



const ProductDetails = () => {
    const productDetails = useLoaderData();
    const { image1, image2, image3, image4, name, age, date, category, longDescription, price, uploaderName, uploaderPhone, uploaderLocation, email } = productDetails;
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();


    const handleAddInformation = (e) => {
        e.preventDefault();
        const form = e.target;
        const buyerName = user?.displayName;
        const buyerEmail = user?.email;
        const phoneNumber = form.phoneNumber.value;
        const buyerAddress = form.address.value;
        const status = 'Pending'


        const buyerProduct = {
            buyerName, buyerEmail, phoneNumber, buyerAddress, status, image1, name, age, date, category, price, uploaderName, uploaderPhone, uploaderLocation, email
        }
        axiosSecure.post('/buyerProduct', buyerProduct)
            .then(res => {

                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-right",
                        icon: "success",
                        title: `${name} added to the cart`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }


    return (
        <div>
            <div style={{
                backgroundImage: `url(${image1})`, backgroundAttachment: 'fixed',
                backgroundSize: 'cover',
            }}
                className=' relative overflow-hidden rounded-b-md bg-no-repeat text-center h-[200px] lg:h-[500px]'>
                <div className="absolute bottom-0 left-0 right-0 top-0  overflow-hidden bg-fixed bg-[#3a3a3ac4]">
                    <div className="w-full h-full flex justify-center items-center">
                        <div>
                            <div>
                                <div className="card mx-auto bg-base-100 bg-opacity-60 shadow-xl">
                                    <div className="card-body">
                                        <h1 className="text-2xl uppercase font-bold text-black">Details of : {name}</h1>
                                        <h2 className="text-center font-bold">Uploader Name : {uploaderName}</h2>
                                        <p className='font-medium'>Contact Email : {email}</p>
                                        <p className='font-medium'>Contact Number : {uploaderPhone}</p>
                                        <p className='font-medium'>{uploaderLocation}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>






            <div className="lg:flex my-7 gap-4">

                <div className="flex-1">
                    <div className="card w-full bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title font-bold">Product : {name}</h2>
                            <p className="font-medium">Age: {age} Month</p>
                            <p className="font-medium">Category: {category}</p>
                            <p className="font-medium">Post Date: {date}</p>
                            <p className=" text-orange-700 font-bold badge badge-outline p-4">Price : {price} $</p>
                            <p className="text-gray-500">{longDescription}</p>
                        </div>
                        <div className="card-actions justify-center  my-4">
                            <Link><button onClick={() => document.getElementById('my_modal_5').showModal()} className="buttonProject3">Buy Now</button></Link>
                            {/* Open the modal using document.getElementById('ID').showModal() method */}
                            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                <div className="modal-box">
                                    <h3 className="font-bold text-lg text-center">Please Full-fill the form</h3>
                                    <div className="modal-action">
                                        <form onSubmit={handleAddInformation} method="dialog" className="card-body">
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text font-semibold">Name</span>
                                                </label>
                                                <input type="text" name="name" defaultValue={user?.displayName} disabled placeholder="Name" className="input input-bordered" required />
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text font-semibold">Email</span>
                                                </label>
                                                <input type="email" name="email" defaultValue={user?.email} disabled placeholder="email" className="input input-bordered" required />
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text font-semibold">Phone Number</span>
                                                </label>
                                                <input type="text" name="phoneNumber" placeholder="Your Phone Number" className="input input-bordered" required />
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text font-semibold">Your Address</span>
                                                </label>
                                                <input type="text" name="address" placeholder="Your Address" className="input input-bordered" required />
                                            </div>
                                            <div className="form-control mt-3">
                                                <button className="buttonProject3">Submit</button>
                                                <p className="text-center my-1">Press ESC key to exit</p>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                        </div>
                    </div>
                </div>
                <div className="flex-1 h-[600px]">
                    <img src={image1} className=" mx-auto h-full rounded-md border-8 border-gray-200" alt="" />
                </div>
            </div>



            <div className="relative overflow-hidden rounded-b-md  h-[450px] lg:h-[600px] bg-cover">
                <div className="absolute bottom-0 left-0 right-0 top-0  overflow-hidden bg-fixed">
                    <h1 className='text-center my-6 font-bold text-2xl'>Some Photo about this product</h1>
                    <div className="h-full flex justify-center items-center">

                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className=" p-3">
                                    <img className="rounded-lg w-full" src={image2} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className=" p-3">
                                    <img className="rounded-lg w-full" src={image3} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className=" p-3">
                                    <img className="rounded-lg w-full" src={image4} alt="" />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;