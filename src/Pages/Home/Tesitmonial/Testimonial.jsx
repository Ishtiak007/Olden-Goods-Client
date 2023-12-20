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
        fetch('http://localhost:5000/userReview')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className="my-20">
            <SectionTitle heading={'Regular Buyer about us'}></SectionTitle>
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
                        <div className="lg:my-16 lg:mx-24 flex flex-col items-center lg:max-w-2xl p-3 shadow-xl rounded-2xl bg-slate-50">

                            <h3 className="lg:text-2xl text-orange-400 flex items-center gap-2 my-3">{review.name}
                                <p><FaQuoteRight className="text-5xl mx-auto text-gray-200"></FaQuoteRight></p></h3>

                            <div className="avatar">
                                <div className="w-24 rounded-full">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
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