import { useRef } from "react";
import { FaPhone } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Swal from "sweetalert2";
import img from '../../../assets/image/logReg.jpg'

import emailjs from '@emailjs/browser';
import { FaComments, FaHeadset, FaLocationArrow } from "react-icons/fa6";

const ContactUs = () => {
    const form = useRef();



    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ae1gq0o', 'template_f3kyxvg', form.current, '0EucXb_zUMFzsGLwF')
            .then((result) => {
                console.log(result.text);
                if (result.text === 'OK') {
                    Swal.fire(
                        'Good job!',
                        'Message has been sent successfully!',
                        'success'
                    )

                    e.target.reset();
                }
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className="bg-black bg-opacity-5 ">
            <div className="hero h-[650px]" style={{
                backgroundImage: `url(${img})`, backgroundAttachment: 'fixed',
                backgroundSize: 'cover',
            }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-5xl">
                        <div className='lg:flex justify-center gap-5'>
                            <h1 className="mb-5 lg:text-5xl font-bold">Contact Us</h1>
                        </div>
                    </div>
                </div>
            </div>



            <div className="hero min-h-[550px] bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left flex-1">
                        <h1 className="lg:text-5xl font-bold">Contact With Us </h1>
                        <p className="lg:py-6">Connect with us for inquiries, support, or collaboration. Your feedback matters. Lets communicate effectively and efficiently.</p>
                    </div>
                    <div className="flex-1 card">
                        <form ref={form} onSubmit={sendEmail} className=" space-y-3">

                            <div className="form-control">
                                <label className="uppercase">Your Name</label>
                                <input name='from_name' className="input input-bordered" type="text" required="required" />
                            </div>

                            <div className="form-control">
                                <label className="uppercase">Your Email</label>
                                <input name='from_email' className="input input-bordered" type="email" required="required" />
                            </div>

                            <div className="form-control">
                                <label className="uppercase">Subject</label>
                                <input name='from_subject' className="input input-bordered" type="text" required="required" />
                            </div>

                            <div className="form-control">
                                <label className="uppercase">Phone Number</label>
                                <input name='phoneNumber' className="input input-bordered" type="number" required="required" />
                            </div>

                            <div className="form-control">
                                <label className="uppercase">Message</label>
                                <textarea name='message' className="textarea textarea-bordered" required="required"></textarea>
                            </div>

                            <div className="form-control">
                                <button className="buttonProject3">Send Message</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>



            <div>
                <div className="lg:flex justify-evenly my-5 space-y-2">

                    <div className="card lg:w-80 md:w-96 md:mx-auto">
                        <div className="card-body">
                            <FaLocationArrow className="text-4xl text-orange-400"></FaLocationArrow>
                            <h1 className="text-2xl font-bold my-3">Address</h1>
                            <p className="text-gray-500 cursor-pointer hover:text-blue-500">Ulipur,Munshipara,Kurigram</p>
                            <p className="text-gray-500 cursor-pointer hover:text-blue-500">Road : Thanamore, 01</p>
                            <p className="text-gray-500 cursor-pointer hover:text-blue-500">Building : # 1228</p>
                        </div>
                    </div>
                    <div className="card lg:w-80 md:w-96 md:mx-auto">
                        <div className="card-body">
                            <FaPhone className="text-4xl text-orange-400"></FaPhone>
                            <h1 className="text-2xl font-bold my-3">Phone</h1>
                            <p className="text-gray-500 flex items-center hover:text-blue-500 cursor-pointer"><FaComments className="mr-2"></FaComments >phn: 01737-223990</p>
                            <p className="text-gray-500 flex items-center my-2 hover:text-blue-500 cursor-pointer"><FaPhone className="mr-2"></FaPhone>phn: 01853-196899</p>
                            <p className="text-gray-500 flex items-center hover:text-blue-500 cursor-pointer"><FaHeadset className="mr-2"></FaHeadset >tel: +0089-86234</p>
                        </div>
                    </div>
                    <div className="card lg:w-80 md:w-96 md:mx-auto">
                        <div className="card-body">
                            <IoIosMail className="text-4xl text-orange-400"></IoIosMail>
                            <h1 className="text-2xl font-bold my-3">Email</h1>
                            <p className="text-gray-500 cursor-pointer hover:text-blue-500"> ishtiak.sparrow98@gmail.com</p>
                            <p className="text-gray-500 cursor-pointer hover:text-blue-500"> ishtiakahmed01999@gmail.com</p>
                            <p className="text-gray-500 cursor-pointer hover:text-blue-500">ishtiakahmed.web007@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    );
};

export default ContactUs;