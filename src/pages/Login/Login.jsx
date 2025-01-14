import { Helmet } from "react-helmet";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { NavLink, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../../AuthProvider/AuthProvider/AuthProvider";
import { useContext, useRef, useState } from "react";

const Login = () => {

    const { handleLogIn, handleGoogleLogin, handleForgotPassword } = useContext(AuthContext)

    const [error, setError] = useState();
    const emailRef = useRef();

    const navigate = useNavigate();

    // HandleLogInSubmit
    const handleLogInSubmit = (event) => {
        event.preventDefault();
        toast("Your Log in Successfully")

        // --- Get form data ---
        const email = event.target.email.value;
        const password = event.target.password.value;

        // Firebase Auth Provider:
        handleLogIn(email, password)
            .then(result => {
                navigate("/")
            })
            .catch(error => {
                setError(error.message)
            }
            )

        // ---Password Validation---
        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
        if (!passwordRegex.test(password)) {
            setError("Password must be contains at least one Uppercase, one Lowercase, and length has to be at least 6 characters")
            return;
        }
    }

    // -----Google Login Handler-----
    const googleLoginHandler = async (email) => {
        toast("Google Log in Successfully")
        try {
            await handleGoogleLogin()
            navigate("/")
        }
        catch (error) {
            setError(error.message)
        }
    }

    // -----Forgot Password Handler-----
    const ForgotPasswordHandler = () => {
        const email = emailRef.current.value;
        if (!email) {
            toast("Please provide a valid email address")
        }
        else {
            handleForgotPassword(email)
                .then(() => {
                    toast("Password reset email sent, Please check your email")
                })
        }
    }


    return (
        <div>
            <Helmet>
                <title>Login | Modern Hotel</title>
            </Helmet>
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
                                ref={emailRef}
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
                                type="text"
                                placeholder="Password"
                                className="input input-bordered"
                                required />
                            <label onClick={ForgotPasswordHandler} className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
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
                            <button type="button" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-lg px-5 py-1.5 text-center me-2 mb-2">Login</button>
                            <p className="mt-3 text-center">Don’t have an Account ? <NavLink to="/register" className="text-lg font-medium text-green-600 mt-3">Register</NavLink> </p>
                        </div>
                    </form>
                    {/* Google and Github Login */}
                    <div className="flex items-center justify-center gap-5 mb-5">
                        <div className="">
                            <button onClick={googleLoginHandler}><FcGoogle className="size-10" /></button>
                        </div>
                        <div className="">
                            <button onClick={googleLoginHandler}> <FaGithub className="size-10" /></button>
                        </div>
                    </div>
                </div>
                <ToastContainer
                    position="bottom-right"
                    autoClose={5000}
                ></ToastContainer>
            </div >
        </div>
    );
};

export default Login;