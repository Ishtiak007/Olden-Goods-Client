import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {
    Navigation,
    Pagination,
    Scrollbar,
    EffectCube,
    Autoplay,
} from "swiper/modules";
import TestimonialCard from "./TestimonialCard";



const Testimonial = () => {
    const testimonialData = [
        {
            "rating": "4.5",
            "review": "Olden Goods has a fantastic selection of vintage treasures! I found the perfect antique lamp for my living room. The entire process was smooth and the customer service was exceptional. Highly recommend!",
            "authorName": "Ishtiak Ahmed",
            "authorPosition": "Web Developer",
            "imageUrl":
                "https://i.ibb.co/KNG2vV3/IMG-20210618-180837-1.jpg"
        },
        {
            "rating": "4.5",
            "review": "If you're looking for unique and rare items, Olden Goods is the place to go. I discovered a beautiful old typewriter that now sits proudly on my desk. What a gem of a website!",
            "authorName": "Dinesh Selvaraj",
            "authorPosition": "Doctor",
            "imageUrl":
                "https://images.unsplash.com/photo-1500048993953-d23a436266cf?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            "rating": "3.8",
            "review": "I was skeptical about buying antiques online, but Olden Goods exceeded my expectations. The quality of the items is top-notch, and they arrive exactly as described. I'm a very happy customer!",
            "authorName": "Harsh",
            "authorPosition": "Engineer",
            "imageUrl":
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            "rating": "5.0",
            "review": "Olden Goods offers amazing prices for such high-quality antiques. I've made several purchases and always feel like I'm getting a great deal. Love this site!",
            "authorName": "Alex Rodriguez",
            "authorPosition": "Food Blogger",
            "imageUrl":
                "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ]
    return (
        <div className="p-5">
            <SectionTitle heading={'Feedback about our platform'} subHeading={'Our regular seller and buyer about our platform'}></SectionTitle>
            <Swiper
                // pagination={true}
                modules={[Autoplay, Navigation, Pagination, Scrollbar, EffectCube]}
                className="mySwiper"
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                loop={true}
                speed={2000}
            >
                {testimonialData.map((testimonial) => (
                    <SwiperSlide key={testimonial.imageUrl}>
                        <TestimonialCard testimonial={testimonial} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Testimonial;