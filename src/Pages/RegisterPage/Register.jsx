
import useAuth from "../../Components/Hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from '../../assets/image/logReg.jpg'
import useAxiosPublic from "../../Components/Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useState } from "react";


const Register = () => {
    const { createUser, updateUserProfile } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const location = useLocation();
    const [showPassword, setShowPassword] = useState(false)

    const from = location.state?.from?.pathname || "/";

    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then(res => {
                const user = res.user;
                console.log(user)
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        // console.log('user Updated')
                        const userInfo = {
                            name: data.name,
                            email: data.email,
                            photoURL: data.photoURL
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('User added to the database')
                                    reset();
                                    Swal.fire({
                                        position: "center",
                                        icon: "success",
                                        title: "User Log in Successfully",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate(from, { replace: true });
                                }
                            })
                    })
                    .catch(error => console.log(error))
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">

            <div className="hero-content flex-col lg:flex-row">

                <div className="card bg-blue-500 bg-opacity-20 shadow-xl lg:max-w-[500px] max-w-[280px] w-full">

                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <h1 className="text-center text-xl font-bold">Register</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} placeholder="Name" className="input input-bordered" />
                            {errors.name && <span className='text-red-500'>This Name field is required</span>}
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Photo URL</span>
                            </label>
                            <input type="text" {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                            {errors.photoURL && <span className='text-red-500'>photoURL field is required</span>}
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} placeholder="Email" className="input input-bordered" />
                            {errors.email && <span className='text-red-500'>This Email field is required</span>}
                        </div>


                        <div className="form-control  relative">
                            <label className="label">
                                <span className="label-text font-bold">Password</span>
                            </label>
                            <input type={showPassword ? "text" : "password"} {...register("password",
                                {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 16,
                                    pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
                                })} placeholder="Password" className="input input-bordered" />
                            <span className='cursor-pointer text-xl absolute bottom-3 right-5' onClick={() => setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <FaRegEyeSlash></FaRegEyeSlash> : <FaRegEye></FaRegEye>
                                }
                            </span>
                            {errors.password && <span className='text-red-500'>This Password field is required</span>}
                            {errors.password?.type === "minLength" && (
                                <p className='text-red-400'>Password must me 6 character</p>
                            )}
                            {errors.password?.type === "pattern" && (
                                <p className='text-red-400'>Password must be A small letter, a capitel letter and a special character</p>
                            )}
                        </div>


                        <div className="form-control mt-6">
                            <button className="buttonProject3">Register Now</button>
                        </div>

                        <div>
                            <p className="my-3 text-center">Already have an account? so, please <Link to='/login' className="text-blue-600 underline">Login</Link></p>
                        </div>
                    </form>
                </div>

                <div className="mr-12 w-1/2">
                    <img className="rounded-lg shadow-2xl border-8  border-sky-300 " src={img} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Register;