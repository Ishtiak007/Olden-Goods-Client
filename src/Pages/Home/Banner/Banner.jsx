import img from '../../../assets/image/bannerImg.jpg'
import Marquee from "react-fast-marquee";
import { FaUpload } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Banner = () => {
    return (
        <div className="hero h-[650px]" style={{
            backgroundImage: `url(${img})`, backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
        }}>
            <div className="hero-overlay bg-teal-950 bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-5xl">
                    <Marquee>
                        <p className="mb-5 lg:text-lg text-yellow-300">Quality products for sale, seamless transactions. Buy with confidence, sell with ease. Happy trading!</p>
                    </Marquee>
                    <h1 className="mb-5 lg:text-5xl font-bold">Discover great deals, hassle-free buying. Sell easily, trade with trust</h1>
                    <div className='lg:flex justify-center gap-5'>
                        <Link to='/dashboard/addProduct'><button className='buttonProject flex items-center gap-2 mt-2'>Uploade your products <FaUpload></FaUpload></button></Link>
                        <Link to='/timeline'><button className='buttonProject2 flex items-center gap-2 mt-2'>Buy your products <FaShoppingCart></FaShoppingCart></button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;