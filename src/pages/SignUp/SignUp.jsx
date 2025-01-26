import { ImSpinner9 } from "react-icons/im";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import { useContext, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const SignUp = () => {

    // ----- UseContext -----
    const { Register, manageUpdateProfile, loading } = useContext(AuthContext);

    // ---Hook-useAxiosPublic---
    const axiosPublic = useAxiosPublic();

    // ---useState---
    const [error, setError] = useState();
    const navigate = useNavigate();

    // ----- Handle Register Submit -----
    const handleRegisterSubmit = (event) => {
        event.preventDefault();
        toast("Your Log in Successfully")

    // ---Get Form Data---
    const form = event.target
    const name = form.name.value
    const photo = form.photo.value
    const email = form.email.value
    const password = form.password.value

    // ---Password Validation---
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (!passwordRegex.test(password)) {
        toast("Your Log in Password not Valid")
        setError("Password must be contains at least one Uppercase, one Lowercase, and length has to be at least 6 characters")
        return;
    }
    setError("")

    // ---Handle Register---
        Register(email, password)
            .then(result => {
                console.log(result)
                if (result) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Your name and eamil Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
                manageUpdateProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        // Create user entry in the database
                        const userInfo = {
                            name: name,
                            email: email,
                            photoURL: photo,
                            role: "regularUser"
                        }
                        axiosPublic.post("/users", userInfo)
                            .then(res => {
                                console.log(res.data)
                                if (res.data.insertedId) {
                                    // --Swal--
                                    Swal.fire({
                                        title: "Register Successfully!",
                                        icon: "success",
                                        draggable: true
                                    });
                                    navigate("/");
                                }
                            })
                    })
                    .catch(error => {
                        console.log(error)
                    });
            })
            .catch(error => {
                console.log(error)
            });
    }

    // ---Return---
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
                        <form onSubmit={handleRegisterSubmit} className="card-body">
                        <h2 className="text-2xl font-semibold text-center">Sign Up your account</h2>
                        {/* ---Your Name--- */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input
                                name="name"
                                type="name"
                                placeholder="Name"
                                className="input input-bordered rounded-none" />
                        </div>
                        {/* ---Photo--- */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Upload</span>
                            </label>
                            <input
                                name="photo"
                                type="photo"
                                placeholder="Photo URL"
                                className="input input-bordered rounded-none"
                            />
                        </div>
                        {/* ---Your Email--- */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input
                                name="email"
                                type="email"
                                placeholder="Email"
                                className="input input-bordered rounded-none" />
                        </div>
                        {/* ---Password--- */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                name="password"
                                type="text"
                                placeholder="Password"
                                className="input input-bordered rounded-none"
                                required />
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
                            <button className="btn btn-primary rounded-none">
                                {
                                    loading ? (
                                        <ImSpinner9 className="animate-spin m-auto size-4"></ImSpinner9 >
                                    ) : ('Register')
                                }

                            </button>
                            <p className="text-center my-3">Already have an Account. Please <Link to="/login" className="text-green-600">Login</Link> </p>
                        </div>
                        {/* ---Google LogIn--- */}
                        <div className="text-center">
                            <SocialLogin></SocialLogin>
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

export default SignUp;