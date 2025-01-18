/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {

    // ---useContext---
    const { user, loading } = useContext(AuthContext);

    // ---useLocation---
    const location = useLocation();

    // ---Loading-Condition---
    if (loading) {
        return <span className="loading loading-bars loading-lg"></span>
    }

    // ---User-Condition-and-Return---
    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;