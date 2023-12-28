import { FaQuoteRight } from "react-icons/fa";

import { useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';
import { FaComments } from "react-icons/fa";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";



const Testimonial = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://olden-goods-backend.vercel.app/userReview')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className="">
            <SectionTitle heading={'Feedback about our platform'} subHeading={'Our regular seller and buyer about our platform'}></SectionTitle>
            <Swiper spaceBetween={30}
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
                className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className="lg:my-16 lg:mx-24 flex flex-col items-center lg:max-w-2xl p-3 shadow-xl bg-gray-400 bg-opacity-10 rounded-2xl">

                            <h3 className="lg:text-2xl font-bold flex items-center gap-2 my-3">{review.name}
                                <p><FaQuoteRight className="text-5xl mx-auto text-gray-200"></FaQuoteRight></p></h3>

                            <div className="avatar">
                                <div className="w-24 rounded-full">
                                    <img src="https://i.ibb.co/8sDBq9w/avatar-3637425-1280.png" />
                                </div>
                            </div>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <div className="my-8">
                                <p>{review.details} </p>
                            </div>
                            <FaComments className="text-5xl text-gray-200"></FaComments>
                        </div>
                    </SwiperSlide>)
                }

            </Swiper>
        </section>
    );
};

export default Testimonial;