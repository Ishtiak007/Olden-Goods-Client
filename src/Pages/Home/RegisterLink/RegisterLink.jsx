import img1 from '../../../assets/image/sale.jpg'
import img2 from '../../../assets/image/openShop.jpg'
import { Link } from 'react-router-dom';

const RegisterLink = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='lg:w-1/2 space-y-5 p-4'>
                        <h3 className='text-orange-600 text-2xl font-bold'>Best buying and selling platform out there</h3>
                        <h1 className="text-3xl font-bold">Register for exclusive deals and personalized shopping!</h1>
                        <p>Welcome to Olden Goods! a Open buying and selling platform, </p>
                        <p>Unlock exclusive deals and personalized shopping. Register now for a seamless online shopping experience for all!</p>
                        <Link to='/register'><button className="buttonProject3 mt-5">Register Now</button></Link>
                    </div>
                    <div className='lg:w-1/2 relative'>
                        <img src={img1} className="w-3/4 cardEffect rounded-lg shadow-2xl border-8  border-white " />
                        <img src={img2} className='w-1/2 absolute cardEffect right-5 top-1/2 rounded-lg shadow-2xl' alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterLink;