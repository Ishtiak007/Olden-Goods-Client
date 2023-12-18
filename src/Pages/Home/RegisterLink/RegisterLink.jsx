import img1 from '../../../assets/image/sale.jpg'
import img2 from '../../../assets/image/openShop.jpg'
import { Link } from 'react-router-dom';

const RegisterLink = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='lg:w-1/2 space-y-5 p-4'>
                        <h3 className='text-orange-600 text-2xl font-bold'>About Our Food Quality . . . . </h3>
                        <h1 className="text-3xl font-bold">Elevate Your Tastebuds with Our Unparalleled Food Quality</h1>
                        <div className="py-3">Welcome to Food Fastival! Indulge in a culinary journey where exquisite flavors and impeccable quality converge.
                            <p className='my-2'>Our restaurant promises a delectable experience with meticulously crafted dishes using only the finest ingredients. Savor the excellence in every bite, as we redefine your dining expectations with our commitment to exceptional food quality</p>
                        </div>
                        <Link to=''><button className="px-4 py-2 bg-[#FF4860] rounded-2xl btn-outline text-white font-bold">Order Now From Menu</button></Link>
                    </div>
                    <div className='lg:w-1/2 relative'>
                        <img src={img1} className="w-3/4 rounded-lg shadow-2xl border-8  border-white " />
                        <img src={img2} className='w-1/2 absolute right-5 top-1/2 rounded-lg shadow-2xl' alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterLink;