import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";

const Register = () => {

    // ---UseContext---
    const { handleRegister, manageUpdateProfile, handleGoogleLogin } = useContext(AuthContext)
    const [error, setError] = useState();
    const navigate = useNavigate();


    // ----- Handle Register Submit -----
    const handleRegisterSubmit = (event) => {
        event.preventDefault();
        toast("Your Log in Successfully")

        // ---Get Form Data---
        const name = event.target.name.value
        const photo = event.target.photo.value
        const email = event.target.email.value
        const password = event.target.password.value

        // ---Password Validation---
        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
        if (!passwordRegex.test(password)) {
            toast("Your Log in Password not Valid")
            setError("Password must be contains at least one Uppercase, one Lowercase, and length has to be at least 6 characters")
            return;
        }
        setError("")

        // ---Handle Register---
        handleRegister(email, password)
            .then(result => {
                if (result) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Your name and eamil Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
                // --------------------------------------------------------
                // const createAt = result?.user?.metadata?.creationTime;
                // const newUser = { name, email, createAt };
                // Save new user info to the database:
                // fetch(``, {
                //     method: "POST",
                //     headers: {
                //         "content-type": "application/json"
                //     },
                //     body: JSON.stringify(newUser)
                // })
                //     .then(res => res.json())
                //     .then(data => {
                //         console.log(data);
                //         if (data.insertedId) {
                //             Swal.fire({
                //                 title: 'success!',
                //                 text: 'Your name and eamil Successfully',
                //                 icon: 'success',
                //                 confirmButtonText: 'Cool'
                //             })
                //         }
                //     })
                manageUpdateProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        navigate("/");
                    })
                    .catch(error => {
                        alert("Update profile error")
                        console.log(error)
                    })
            })
    }

    // ---Google Login Handler---
    const googleLoginHandler = () => {
        toast("Google Log in Successfully")
        handleGoogleLogin()
            .then(res => {
                navigate("/")
                console.log(res)
            })
            .catch(error => {
                setError(error.message)
            })
    }

    // ---Return---
    return (
        <div>
            <Helmet>
                <title>Register | edu-Scholarship</title>
            </Helmet>
            <div className="hero mt-7">
                <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
                    <form onSubmit={handleRegisterSubmit} className="card-body">
                        <h2 className="text-2xl font-semibold text-center">Register Your Account</h2>
                        {/* Your Name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input
                                name="name"
                                type="name"
                                placeholder="Name"
                                className="input input-bordered"
                                required />
                        </div>
                        {/* Photo URL */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input
                                name="photo"
                                type="photo"
                                placeholder="Your Photo"
                                className="input input-bordered"
                                required
                            />
                        </div>
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
                                type="text"
                                placeholder="Password"
                                className="input input-bordered"
                                required />
                            {/* Forgot password */}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            {
                                error && <p className="text-red-600">{error}</p>
                            }
                            {/* Accept Term & Conditions */}
                            <div className="flex items-center space-x-3">
                                <input
                                    type="checkbox"
                                    className="checkbox" />
                                <p>Accept Term & Conditions</p>
                            </div>
                        </div>
                        {/* Register Button */}
                        {/* ---Login Button--- */}
                        <div className="form-control mt-6">
                            <button type="button" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-lg px-5 py-1.5 text-center me-2 mb-2">Register</button>
                            <p className="mt-3 text-center">Already have an Account. Please <NavLink to="/login" className="text-lg font-medium text-green-600 mt-3">Login</NavLink> </p>
                        </div>
                        {/* Google and Github Login */}
                        <div className="flex items-center justify-center gap-5 mt-5">
                            <div className="">
                                <button onClick={googleLoginHandler}><FcGoogle className="size-10" /></button>
                            </div>
                            <div className="">
                                <button onClick=""> <FaGithub className="size-10" /></button>
                            </div>
                        </div>
                    </form>
                </div>
                {/* Toast-Container */}
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                ></ToastContainer>
            </div>
        </div>
    );
};

export default Register;