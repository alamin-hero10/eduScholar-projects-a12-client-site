import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SocialLogin = () => {

    // ---Hook-useAxiosPublic---
    const axiosPublic = useAxiosPublic();

    // ---useContext---
    const { GoogleLogin } = useContext(AuthContext);

    // ---useNavigate---
    const navigate = useNavigate();

    // ---useNavigate---
    const [error, setError] = useState();

    // ---Google Login Handler---
    const googleLoginHandler = () => {
        toast("Google Log in Successfully")
        GoogleLogin()
            .then(result => {
                // Create user entry in the database
                const userGoogleInfo = {
                    name: result.user.displayName,
                    email: result.user.email,
                    photo: result.user.photoURL,
                    signInTime: result.user.metadata.lastSignInTime
                }
                axiosPublic.post("/users", userGoogleInfo)
                    .then(res => {
                        if (res.data.insertedId) {
                            // --Swal--
                            Swal.fire({
                                title: "Google Log in Successfully!",
                                icon: "success",
                                draggable: true
                            });
                            navigate("/")
                        }
                    })

            })
            .catch(error => {
                setError(error.message)
            })
    }

    // ---Return---
    return (
        <div>
            <div>
                <button onClick={googleLoginHandler} className=""><FcGoogle className="size-10" /></button>
            </div>
            {/* Error */}
            <div>
                {
                    error && <p className="text-red-600">{error}</p>
                }
            </div>
        </div>
    );
};

export default SocialLogin;