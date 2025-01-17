import { useContext, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { toast } from "react-toastify";


const Login = () => {

    // ---Use Context---
    const { LogIn, GoogleLogin } = useContext(AuthContext);

    // ---Use State---
    const [error, setError] = useState();

    // ---useNavigate---
    const navigate = useNavigate();

    // ---Handle LogIn Submit---
    const handleLogInSubmit = (event) => {
        event.preventDefault();

        // --- Get form data ---
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // Firebase Auth Provider:
        LogIn(email, password)
            .then(result => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Login Successfully!",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate("/")
            })
            .catch(error => {
                setError(error.message)
            })
    }
    // ---Google Login Handler---
    const googleLoginHandler = () => {
        toast("Google Log in Successfully")
        GoogleLogin()
            .then(result => {
                Swal.fire({
                    title: "Google Log in Successfully!",
                    icon: "success",
                    draggable: true
                });
                navigate("/")
            })
            .catch(error => {
                setError(error.message)
            })
    }


    // ---Return---
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
                    <form onSubmit={handleLogInSubmit} className="card-body">
                        <h2 className="text-2xl font-semibold text-center">Login Your Account</h2>
                        {/* Your Email */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input
                                name="email"
                                type="email"
                                placeholder="Email"
                                className="input input-bordered"
                                required />
                        </div>
                        {/* Password */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                name="password"
                                type="password"
                                placeholder="Password"
                                className="input input-bordered"
                                required />
                            <label onClick="" className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        {/* Error Message */}
                        <div>
                            {
                                error &&
                                <p className="label text-red-600">
                                    {error}
                                </p>
                            }
                        </div>
                        {/* ---Login Button--- */}
                        <div className="form-control mt-6">
                            <button type="submit" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-lg px-5 py-1.5 text-center me-2 mb-2">Login</button>
                            <p className="mt-3 text-center">Don’t have an Account ? <Link to="/register" className="text-lg font-medium text-green-600 mt-3">Register</Link></p>
                        </div>
                    </form>
                    {/* Google and Github Login */}
                    <div className="flex items-center justify-center gap-5 mb-5">
                        <div className="">
                            <button onClick={googleLoginHandler}><FcGoogle className="size-10" /></button>
                        </div>
                        <div className="">
                            <button onClick=""> <FaGithub className="size-10" /></button>
                        </div>
                    </div>
                </div>
                {/* <ToastContainer
                    position="bottom-right"
                    autoClose={5000}
                ></ToastContainer> */}
            </div >
        </div>
    );
};

export default Login;