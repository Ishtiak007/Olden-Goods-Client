
import logo from '../../assets/image/logo.png'
import { motion } from "framer-motion";
import {
    BsFacebook,
    BsInstagram,
    BsTwitter,
    BsPinterest,
} from "react-icons/bs";

const Footer = () => {
    return (
        <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "auto" }}
            transition={{ duration: 1 }}
            className="bg-teal-800 p-10"
        >
            <div className="grid md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 place-items-start gap-8 text-white">
                <div>
                    <div className="flex justify-center items-center">
                        <img className="w-[70px] h-[50px]" src={logo} alt="logo" />
                        <p className="text-3xl font-semibold">Olden Goods</p>
                    </div>

                    <p className=" w-[80%] lg:w-[80%] mt-3">
                        Design amazing digital experiences that create more happy in the
                        world.
                    </p>
                </div>
                <div>
                    <div className="font-bold mb-6">Services</div>
                    <div className="flex flex-col gap-4">
                        <a href="" className="text-sm hover:underline">
                            Web Design
                        </a>
                        <a href="" className="text-sm hover:underline">
                            Web Development
                        </a>
                        <a href="" className="text-sm hover:underline">
                            {" "}
                            Science
                        </a>
                        <a href="" className="text-sm hover:underline">
                            Digital Marketing
                        </a>
                    </div>
                </div>
                <div>
                    <div className="font-bold mb-6">Company</div>
                    <div className="flex flex-col gap-4">
                        <a href="" className="text-sm hover:underline">
                            Privacy Policy
                        </a>
                        <a href="" className="text-sm hover:underline">
                            Sitemap
                        </a>
                        <a href="" className="text-sm hover:underline">
                            Careers
                        </a>
                        <a href="" className="text-sm hover:underline">
                            Terms & Conditions
                        </a>
                    </div>
                </div>
                <div>
                    <div className="font-bold mb-6">Follow us</div>
                    <div className="text-sm mb-4">ishtiakahmed18899@gmail.com</div>
                    <div className="text-sm">+8801521742729</div>
                    <div className="flex gap-4 mt-4">
                        <a href="" className="hover:scale-110 text-xl">
                            <BsFacebook />
                        </a>
                        <a href="" className="hover:scale-110 text-xl">
                            <BsInstagram />
                        </a>
                        <a href="" className="hover:scale-110 text-xl">
                            <BsTwitter />
                        </a>
                        <a href="" className="hover:scale-110 text-xl">
                            <BsPinterest />
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Footer;