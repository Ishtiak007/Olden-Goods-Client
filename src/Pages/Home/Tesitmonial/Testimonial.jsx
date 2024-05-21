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
    const testimonialData = [
        {
            "rating": "4.5",
            "review": "I was impressed by the food festival's commitment to sustainability! From eco-friendly packaging to composting stations, it was clear that minimizing environmental impact was a priority. It's refreshing to see an event that cares about more than just good food.",
            "authorName": "Ishtiak Ahmed",
            "authorPosition": "Web Developer",
            "imageUrl":
                "https://i.ibb.co/x1dS58K/IMG-20210618-180837.jpg"
        },
        {
            "rating": "4.5",
            "review": "I loved that the food festival showcased so many local vendors and artisans! It was a fantastic opportunity to support small businesses while indulging in some truly delicious food. I'll definitely be returning to some of my new favorite spots.",
            "authorName": "Nitish Bhushan",
            "authorPosition": "Food Blogger",
            "imageUrl":
                "https://images.unsplash.com/photo-1500048993953-d23a436266cf?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            "rating": "3.8",
            "review": "Attending the food festival was worth every penny! With so many mouthwatering food options to choose from and plenty of entertainment included in the ticket price, it felt like a great value. I left feeling fully satisfied and already looking forward to next year's event.",
            "authorName": "Jane Smith",
            "authorPosition": "Food Blogger",
            "imageUrl":
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            "rating": "5.0",
            "review": "Not only was the food festival delicious, but it was also educational! I loved learning about different cooking techniques, ingredients, and cultural traditions from the talented chefs and vendors. It was a truly enriching experience.",
            "authorName": "Alex Rodriguez",
            "authorPosition": "Food Blogger",
            "imageUrl":
                "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ]
    return (
        <section className="">
            <SectionTitle heading={'Feedback about our platform'} subHeading={'Our regular seller and buyer about our platform'}></SectionTitle>
            <Swiper spaceBetween={10}
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
                className="mySwiper text-center mx-auto">
                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className="lg:my-16 lg:mx-24 flex flex-col items-center lg:max-w-2xl mx-auto p-3 shadow-xl bg-gray-400 bg-opacity-10 rounded-2xl">

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