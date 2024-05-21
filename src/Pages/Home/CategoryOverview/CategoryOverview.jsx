
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "blue" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "blue" }}
            onClick={onClick}
        />
    );
}

const CategoryOverview = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        focusOnSelect: true,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className="slider-container my-10 px-4 lg:px-0">
            <Slider {...settings}>
                {/* 1 */}
                <div className=" bg-gray-50 overflow-hidden rounded-lg">
                    <div className="relative">
                        <img
                            className="object-cover object-center  w-full h-56"
                            src="https://i.ibb.co/G33QMMK/kenny-eliason-i-Aftd-Icgp-Fc-unsplash.jpg"
                            alt="image"
                        />
                        <button className=" absolute bottom-4 left-4 flex justify-center items-center gap-2 bg-white px-2 py-1 text-sm rounded-lg ">
                            <p className="text-sm md:text-base">1</p>
                        </button>
                    </div>

                    <div className=" relative px-6 py-4">
                        <div className=" flex gap-2 justify-between pb-3">
                            <p className="bg-blue-100 px-2 py-1 text-sm">HOME AND LIVING</p>
                        </div>
                        <hr className="border" />
                        <div className="space-y-1 md:space-y-3">
                            <p className="text-lg font-semibold pt-2">
                                HOME AND LIVING category related essentials can be found here
                            </p>
                            <div className=" flex gap-2 items-center">

                                <p className="text-sm md:text-base text-gray-500">
                                    More than 5 kinds of products are available
                                </p>
                                <Link to='/timeline' className="buttonProject4">Timeline</Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 2 */}
                <div className=" bg-gray-50 overflow-hidden rounded-lg">
                    <div className="relative">
                        <img
                            className="object-cover object-center  w-full h-56"
                            src="https://i.ibb.co/bPgHzqb/daria-nepriakhina-x-Y55b-L5m-ZAM-unsplash.jpg"
                            alt="image"
                        />
                        <button className=" absolute bottom-4 left-4 flex justify-center items-center gap-2 bg-white px-2 py-1 text-sm rounded-lg ">

                            <p className="text-sm md:text-base">2</p>
                        </button>
                    </div>

                    <div className=" relative px-6 py-4">
                        <div className=" flex gap-2 justify-between pb-3">
                            <p className="bg-blue-100 px-2 py-1 text-sm">EDUCATION</p>

                        </div>
                        <hr className="border" />
                        <div className="space-y-1 md:space-y-3">
                            <p className="text-lg font-semibold pt-2">
                                EDUCATION category related essentials can be found here
                            </p>
                            <div className=" flex gap-2 items-center">

                                <p className="text-sm md:text-base text-gray-500">
                                    More than 3 kinds of products are available
                                </p>
                                <Link to='/timeline' className="buttonProject4">Timeline</Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 3 */}
                <div className=" bg-gray-50 overflow-hidden rounded-lg">
                    <div className="relative">
                        <img
                            className="object-cover object-center  w-full h-56"
                            src="https://i.ibb.co/417YNB8/manu-b-Tlk-Jdq-H6m-UQ-unsplash.jpg"
                            alt="image"
                        />
                        <button className=" absolute bottom-4 left-4 flex justify-center items-center gap-2 bg-white px-2 py-1 text-sm rounded-lg ">

                            <p className="text-sm md:text-base">3</p>
                        </button>
                    </div>

                    <div className=" relative px-6 py-4">
                        <div className=" flex gap-2 justify-between pb-3">
                            <p className="bg-blue-100 px-2 py-1 text-sm">VEHICLES</p>

                        </div>
                        <hr className="border" />
                        <div className="space-y-1 md:space-y-3">
                            <p className="text-lg font-semibold pt-2">
                                VEHICLES category related essentials can be found here
                            </p>
                            <div className=" flex gap-2 items-center">

                                <p className="text-sm md:text-base text-gray-500">
                                    More than 6 kinds of products are available
                                </p>
                                <Link to='/timeline' className="buttonProject4">Timeline</Link>
                            </div>
                        </div>
                    </div>
                </div>


                {/* 4 */}
                <div className=" bg-gray-50 overflow-hidden rounded-lg">
                    <div className="relative">
                        <img
                            className="object-cover object-center  w-full h-56"
                            src="https://i.ibb.co/sJhPPc6/david-lezcano-Nf-Zi-OJz-Zgcg-unsplash.jpg"
                            alt="image"
                        />
                        <button className=" absolute bottom-4 left-4 flex justify-center items-center gap-2 bg-white px-2 py-1 text-sm rounded-lg ">

                            <p className="text-sm md:text-base">4</p>
                        </button>
                    </div>

                    <div className=" relative px-6 py-4">
                        <div className=" flex gap-2 justify-between pb-3">
                            <p className="bg-blue-100 px-2 py-1 text-sm">MENS FASHION & GROOMING</p>

                        </div>
                        <hr className="border" />
                        <div className="space-y-1 md:space-y-3">
                            <p className="text-lg font-semibold pt-2">
                                MENS FASHION & GROOMING category related essentials can be found here
                            </p>
                            <div className=" flex gap-2 items-center">

                                <p className="text-sm md:text-base text-gray-500">
                                    More than 8 kinds of products are available
                                </p>
                                <Link to='/timeline' className="buttonProject4">Timeline</Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 5 */}
                <div className=" bg-gray-50 overflow-hidden rounded-lg">
                    <div className="relative">
                        <img
                            className="object-cover object-center  w-full h-56"
                            src="https://i.ibb.co/BqsKfgn/jamie-street-a-Muq-Xz7-R-M-unsplash.jpg"
                            alt="image"
                        />
                        <button className=" absolute bottom-4 left-4 flex justify-center items-center gap-2 bg-white px-2 py-1 text-sm rounded-lg ">

                            <p className="text-sm md:text-base">5</p>
                        </button>
                    </div>

                    <div className=" relative px-6 py-4">
                        <div className=" flex gap-2 justify-between pb-3">
                            <p className="bg-blue-100 px-2 py-1 text-sm">WOMENS FASHION & BEAUTY</p>

                        </div>
                        <hr className="border" />
                        <div className="space-y-1 md:space-y-3">
                            <p className="text-lg font-semibold pt-2">
                                WOMENS FASHION & BEAUTY category related essentials can be found here
                            </p>
                            <div className=" flex gap-2 items-center">

                                <p className="text-sm md:text-base text-gray-500">
                                    More than 3 kinds of products are available
                                </p>
                                <Link to='/timeline' className="buttonProject4">Timeline</Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 6 */}
                <div className=" bg-gray-50 overflow-hidden rounded-lg">
                    <div className="relative">
                        <img
                            className="object-cover object-center  w-full h-56"
                            src="https://i.ibb.co/KrBVDgx/alessandro-bogliari-o-Ds-Axe-R5g4-unsplash.jpg"
                            alt="image"
                        />
                        <button className=" absolute bottom-4 left-4 flex justify-center items-center gap-2 bg-white px-2 py-1 text-sm rounded-lg ">

                            <p className="text-sm md:text-base">6</p>
                        </button>
                    </div>

                    <div className=" relative px-6 py-4">
                        <div className=" flex gap-2 justify-between pb-3">
                            <p className="bg-blue-100 px-2 py-1 text-sm">HOBBIES-SPORTS</p>

                        </div>
                        <hr className="border" />
                        <div className="space-y-1 md:space-y-3">
                            <p className="text-lg font-semibold pt-2">
                                HOBBIES-SPORTS category related essentials can be found here
                            </p>
                            <div className=" flex gap-2 items-center">

                                <p className="text-sm md:text-base text-gray-500">
                                    More than 9 kinds of products are available
                                </p>
                                <Link to='/timeline' className="buttonProject4">Timeline</Link>
                            </div>
                        </div>
                    </div>
                </div>


                {/* 7 */}
                <div className=" bg-gray-50 overflow-hidden rounded-lg">
                    <div className="relative">
                        <img
                            className="object-cover object-center  w-full h-56"
                            src="https://i.ibb.co/f22qQ07/jerry-wang-LXIH6-QHz6ko-unsplash.jpg"
                            alt="image"
                        />
                        <button className=" absolute bottom-4 left-4 flex justify-center items-center gap-2 bg-white px-2 py-1 text-sm rounded-lg ">

                            <p className="text-sm md:text-base">7</p>
                        </button>
                    </div>

                    <div className=" relative px-6 py-4">
                        <div className=" flex gap-2 justify-between pb-3">
                            <p className="bg-blue-100 px-2 py-1 text-sm">KIDS</p>

                        </div>
                        <hr className="border" />
                        <div className="space-y-1 md:space-y-3">
                            <p className="text-lg font-semibold pt-2">
                                KIDS category related essentials can be found here
                            </p>
                            <div className=" flex gap-2 items-center">

                                <p className="text-sm md:text-base text-gray-500">
                                    More than 8 kinds of products are available
                                </p>
                                <Link to='/timeline' className="buttonProject4">Timeline</Link>
                            </div>
                        </div>
                    </div>
                </div>


                {/* 8 */}
                <div className=" bg-gray-50 overflow-hidden rounded-lg">
                    <div className="relative">
                        <img
                            className="object-cover object-center  w-full h-56"
                            src="https://i.ibb.co/BP7MczL/img3.jpg"
                            alt="image"
                        />
                        <button className=" absolute bottom-4 left-4 flex justify-center items-center gap-2 bg-white px-2 py-1 text-sm rounded-lg ">

                            <p className="text-sm md:text-base">8</p>
                        </button>
                    </div>

                    <div className=" relative px-6 py-4">
                        <div className=" flex gap-2 justify-between pb-3">
                            <p className="bg-blue-100 px-2 py-1 text-sm">PETS AND ANIMAL</p>

                        </div>
                        <hr className="border" />
                        <div className="space-y-1 md:space-y-3">
                            <p className="text-lg font-semibold pt-2">
                                PETS AND ANIMAL category related essentials can be found here
                            </p>
                            <div className=" flex gap-2 items-center">

                                <p className="text-sm md:text-base text-gray-500">
                                    More than 4 kinds of products are available
                                </p>
                                <Link to='/timeline' className="buttonProject4">Timeline</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default CategoryOverview;