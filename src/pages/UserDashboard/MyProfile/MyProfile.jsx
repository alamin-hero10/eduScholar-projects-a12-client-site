import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider/AuthProvider";

const MyProfile = () => {
    // ---useContext---
    const { user } = useContext(AuthContext);
    console.log(user)

    // ---useContext---
    const { displayName, email, photoURL } = user || {};

    // ---Return---
    return (
        <div className="pt-5 ml-14">
            <div>
                <span className="text-2xl text-black font-medium border-y border-solid border-green-500">My Profile</span>
            </div>
            {/* ---Divider--- */}
            <div className="divider"></div>
            {/* ---User Info--- */}
            <div>
                <img
                    className="w-32 h-32 rounded-full"
                    src={photoURL}
                    alt="" />
                <div>
                    <h1 className="text-2xl">Your name: {displayName}</h1>
                    <p className="text-2xl">Email: {email}</p>
                    <p className="text-2xl">Mobile Number: 0170000000</p>
                </div>
            </div>
            {/* ---Divider--- */}
        </div>
    );
};

export default MyProfile;