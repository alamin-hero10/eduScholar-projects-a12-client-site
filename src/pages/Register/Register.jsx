import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const Register = () => {

    // ---React-Hook-Form---
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // ----- UseContext -----
    const { Register, GoogleLogin, manageUpdateProfile } = useContext(AuthContext);

    // ---useNavigate---
    const [error, setError] = useState();

    // ---useNavigate---
    const navigate = useNavigate();

    // ---Form onSubmit---
    const onSubmit = (data) => {
        console.log(data);
        Register(
            data.email,
            data.password
        )
            .then(result => {
                const newUser = result.user;
                // ---manage Update Profile---
                manageUpdateProfile(data.name, data.photoURL)
                    .then(() => {
                        Swal.fire({
                            title: "Register Successfully!",
                            icon: "success",
                            draggable: true
                        });
                        navigate("/");
                    })
                    .catch(error => {
                        console.log(error)
                    });
            })
            .catch(error => {
                console.log(error)
            });
    };

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
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <h2 className="text-2xl font-semibold text-center">Register your account</h2>
                        {/* ---Your Name--- */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input
                                name="name"
                                type="name"
                                {...register("name", { required: true })}
                                placeholder="Name"
                                className="input input-bordered" />
                            {errors.name && <span className="text-red-500">This field is required</span>}
                        </div>
                        {/* ---Photo--- */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input
                                name="photoURL"
                                type="photo"
                                {...register("photoURL", { required: true })}
                                placeholder="Photo URL"
                                className="input input-bordered"
                            />
                            {errors.photo && <span className="text-red-500">This field is required</span>}
                        </div>
                        {/* ---Your Email--- */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input
                                name="email"
                                type="email"
                                {...register("email", { required: true })}
                                placeholder="Email"
                                className="input input-bordered" />
                            {errors.email && <span className="text-red-500">This field is required</span>}
                        </div>
                        {/* ---Password--- */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                name="password"
                                type="text"
                                {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 15,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })}
                                placeholder="Password"
                                className="input input-bordered"
                                required />
                            {/* Error Message */}
                            {errors.password?.type === "required" && (
                                <p className="text-red-500">Password is required</p>
                            )}
                            {errors.password?.type === "minLength" && (
                                <p className="text-red-500">Password must be 6 characters</p>
                            )}
                            {errors.password?.type === "maxLength" && (
                                <p className="text-red-500">Password must be less then 15 characters</p>
                            )}
                            {errors.password?.type === "pattern" && (
                                <p className="text-red-500">Password mut have one uppercase, one lowercase, one number and one special characters</p>
                            )}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            <div className="flex items-center space-x-3">
                                <input
                                    type="checkbox"
                                    className="checkbox" />
                                <p>Accept Term & Conditions</p>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                            <p className="text-center my-3">Already have an Account. Please <NavLink to="/login" className="text-green-600">Login</NavLink> </p>
                        </div>
                        {/* ---Google LogIn--- */}
                        <div className="text-center">
                            <button onClick={googleLoginHandler} className=""><FcGoogle className="size-10" /></button>
                        </div>
                        <div>
                            {
                                error && <p className="text-red-600">{error}</p>
                            }
                        </div>
                    </form>
                </div>
                {/* <ToastContainer
                    position="top-center"
                    autoClose={5000}
                ></ToastContainer> */}
            </div>
        </div>
    );
};

export default Register;