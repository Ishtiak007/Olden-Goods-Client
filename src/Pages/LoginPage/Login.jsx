import { Helmet } from "react-helmet-async";
import googleLogo from '../../assets/logo/googleLogo.png'
import useAuth from "../../Components/Hooks/useAuth";
import useAxiosPublic from "../../Components/Hooks/useAxiosPublic";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import img from '../../assets/image/logReg.jpg'

const Login = () => {
    const { signIn, googleSignIn } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const location = useLocation();
    const [showPassword, setShowPassword] = useState(false)
    const from = location.state?.from?.pathname || "/";


    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const user = { email, password }
        console.log(user);

        signIn(email, password)
            .then(res => {
                const user = res.user;
                console.log(user)
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "User Log in Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleGoogleLogIn = () => {
        googleSignIn()
            .then(res => {
                console.log(res);
                const userInfo = {
                    email: res.user?.email,
                    name: res.user?.displayName,
                    photoURL: res.user?.photoURL
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "User Log in Successfully",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        console.log(res.user);
                        navigate(location?.state ? location.state : '/');
                    })
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div>
            <Helmet>
                <title>Olden Goods | Login</title>
            </Helmet>

            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="lg:mr-12 lg:w-1/2">
                        <img className="rounded-lg shadow-2xl border-8  border-sky-300 " src={img} alt="" />
                    </div>
                    <div className="card bg-gray-500 bg-opacity-20 shadow-xl lg:max-w-[500px] max-w-[280px]  w-full">
                        <form onSubmit={handleLogin} className='lg:p-5 p-2'>
                            <div>
                                <p className="py-4 text-center text-xl font-semibold text-white-900">Login Here</p>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Enter Your Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text text-lg">Password</span>
                                </label>
                                <input type={showPassword ? "text" : "password"} name="password" placeholder="Enter Password" className="input input-bordered" required />
                                <span className='cursor-pointer text-xl absolute bottom-3 right-5' onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <FaRegEyeSlash></FaRegEyeSlash> : <FaRegEye></FaRegEye>
                                    }
                                </span>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white  font-semibold">Login</button>
                            </div>
                            <div>
                                <hr className="my-4" />
                                <h1 className="text-xl font-bold text-center mt-4">You can also Login With</h1>
                                <div className="space-y-3 my-4">
                                    <button onClick={handleGoogleLogIn} className="flex items-center gap-3 w-full justify-center rounded-3xl p-2 outline outline-1 outline-slate-800 mx-auto"><img src={googleLogo} className="w-6" alt="" /> Continue With Google</button>
                                    {/* <button onClick={handleGithubLogIn} className="flex items-center gap-3 w-3/4 rounded-3xl p-2 outline outline-1 outline-slate-800 mx-auto"><FaGithub></FaGithub>Continue With Github</button> */}
                                </div>
                            </div>
                            <div>
                                <p className="text-base my-3 text-center">Create an account <Link to='/register' className="text-blue-600 underline">Register</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;