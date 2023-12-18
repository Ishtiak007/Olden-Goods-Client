
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const CategoryOverview = () => (
    <div className='my-5'>
        <div className="relative overflow-hidden rounded-b-md  h-[450px] lg:h-[550px] bg-cover">
            <div className="absolute bottom-0 left-0 right-0 top-0  overflow-hidden bg-fixed bg-[#3a3a3aaa]">

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
                                <img className="rounded-lg w-full" src="https://i.ibb.co/G33QMMK/kenny-eliason-i-Aftd-Icgp-Fc-unsplash.jpg" alt="" />
                            </div>
                        </SwiperSlide>


                        <SwiperSlide>
                            <div className=" p-3">
                                <img className="rounded-lg w-full" src="https://i.ibb.co/yRfcpDn/alienware-Bp3-Km-TZQlfw-unsplash.jpg" alt="" />
                            </div>
                        </SwiperSlide>


                        <SwiperSlide>
                            <div className=" p-3">
                                <img className="rounded-lg w-full" src="https://i.ibb.co/bPgHzqb/daria-nepriakhina-x-Y55b-L5m-ZAM-unsplash.jpg" alt="" />
                            </div>
                        </SwiperSlide>


                        <SwiperSlide>
                            <div className=" p-3">
                                <img className="rounded-lg w-full" src="https://i.ibb.co/417YNB8/manu-b-Tlk-Jdq-H6m-UQ-unsplash.jpg" alt="" />
                            </div>
                        </SwiperSlide>


                        <SwiperSlide>
                            <div className=" p-3">
                                <img className="rounded-lg w-full" src="https://i.ibb.co/sJhPPc6/david-lezcano-Nf-Zi-OJz-Zgcg-unsplash.jpg" alt="" />
                            </div>
                        </SwiperSlide>


                        <SwiperSlide>
                            <div className=" p-3">
                                <img className="rounded-lg w-full" src="https://i.ibb.co/BqsKfgn/jamie-street-a-Muq-Xz7-R-M-unsplash.jpg" alt="" />
                            </div>
                        </SwiperSlide>


                        <SwiperSlide>
                            <div className=" p-3">
                                <img className="rounded-lg w-full" src="https://i.ibb.co/KrBVDgx/alessandro-bogliari-o-Ds-Axe-R5g4-unsplash.jpg" alt="" />
                            </div>
                        </SwiperSlide>


                        <SwiperSlide>
                            <div className=" p-3">
                                <img className="rounded-lg w-full" src="https://i.ibb.co/f22qQ07/jerry-wang-LXIH6-QHz6ko-unsplash.jpg" alt="" />
                            </div>
                        </SwiperSlide>


                        <SwiperSlide>
                            <div className=" p-3">
                                <img className="rounded-lg w-full" src="https://i.ibb.co/BP7MczL/img3.jpg" alt="" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    </div>
);

export default CategoryOverview;