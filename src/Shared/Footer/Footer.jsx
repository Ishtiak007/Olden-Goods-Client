import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa6';
import logo from '../../assets/image/logo.png'

const Footer = () => {
    return (
        <div className="bg-[#ECF5FF] mt-10 md:mt-20 md:px-6 lg:px-0">
            <div className="max-w-7xl mx-auto">
                <footer className="footer pl-10 md:pl-5 lg:pl-0 py-10 text-gray-600">
                    <aside>
                        <div className="flex justify-center items-center">
                            <img className="w-[90px] h-[70px]" src={logo} alt="logo" />
                            <p className="text-3xl font-semibold">Olden Goods</p>
                        </div>

                        <p className=" w-[80%] lg:w-[60%] md:font-semibold mt-3">
                            Design amazing digital experiences that create more happy in the
                            world.
                        </p>
                    </aside>

                    <nav>
                        <h6 className="footer-title">Product</h6>
                        <a className="link link-hover">Overview</a>
                        <a className="link link-hover">Features</a>
                        <a className="link link-hover">Solutions</a>
                        <a className="link link-hover">Tutorials</a>
                        <a className="link link-hover">Pricing</a>
                        <a className="link link-hover">Releases</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Careers</a>
                        <a className="link link-hover">Press</a>
                        <a className="link link-hover">News</a>
                        <a className="link link-hover">Media Kit</a>
                        <a className="link link-hover">Contact</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Resources</h6>
                        <a className="link link-hover">Blog</a>
                        <a className="link link-hover">NewsLetter</a>
                        <a className="link link-hover">Events</a>
                        <a className="link link-hover">Help Center</a>
                        <a className="link link-hover">Tutorials</a>
                        <a className="link link-hover">Support</a>
                    </nav>

                    <nav>
                        <h6 className="footer-title">Social</h6>
                        <a className="link link-hover">Twitter</a>
                        <a className="link link-hover">Linkedin</a>
                        <a className="link link-hover">Facebook</a>
                        <a className="link link-hover">GitHub</a>
                        <a className="link link-hover">AngleList</a>
                        <a className="link link-hover">Dribble</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms</a>
                        <a className="link link-hover">Privacy</a>
                        <a className="link link-hover">Cookies</a>
                        <a className="link link-hover">Lincenses</a>
                        <a className="link link-hover">Settings</a>
                        <a className="link link-hover">Contact</a>
                    </nav>
                </footer>

                <hr className=" border-[#C5E2FF]" />

                <footer className="footer items-center p-4 pl-10 md:pl-5 lg:pl-0 text-gray-600">
                    <aside className="items-center grid-flow-col">
                        <p>© 2024 Olden Goods . All rights reserved.</p>
                    </aside>
                    <nav className="grid-flow-col items-center gap-4 md:place-self-center md:justify-self-end">
                        <p className="font-semibold">Follow Us</p>
                        <FaFacebook></FaFacebook>
                        <FaGithub></FaGithub>
                        <FaLinkedin></FaLinkedin>
                        <FaInstagram></FaInstagram>
                    </nav>
                </footer>
            </div>
        </div>
    );
};

export default Footer;