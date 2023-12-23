// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './style.css';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useLoaderData } from 'react-router-dom';



const ProductDetails = () => {
    const productDetails = useLoaderData();
    const { image1, image2, image3, image4, name, age, date, category, longDescription, price, phone, location, uploaderName, email } = productDetails;

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
                                        <p className='font-medium'>Contact Number : {phone}</p>
                                        <p className='font-medium'>{location}</p>
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
                            <h2 className="card-title font-bold">Name : {name}</h2>
                            <p className="font-bold">Age: {age} Month</p>
                            <p className="font-bold">Category: {category}</p>
                            <p className="font-bold">Adding Date: {date}</p>
                            <p className=" text-orange-700 font-bold badge badge-outline p-4">Price : {price}</p>
                            <p className="text-gray-500">{longDescription}</p>
                        </div>
                        <div className='flex justify-center my-7'>
                            <button className='buttonProject3 w-1/3'>Buy Now</button>
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