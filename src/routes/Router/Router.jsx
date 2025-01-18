import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Home from "../../pages/Home/Home";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import ScholarshipDetails from "../../components/ScholarshipDetails/ScholarshipDetails";
import ApplyForm from "../../components/ApplyForm/ApplyForm";
import MyApplications from "../../pages/MyApplications/MyApplications";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AllScholarship from "../../pages/AllScholarship/AllScholarship";
import Dashboard from "../../layouts/Dashboard/Dashboard";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/allScholarship",
                element: <AllScholarship></AllScholarship>,
            },
            {
                path: "/scholarshipDetails/:id",
                element: <ScholarshipDetails></ScholarshipDetails>
            },
            {
                path: "/applyForm/:id",
                element: <PrivateRoute>
                    <ApplyForm></ApplyForm>
                </PrivateRoute>
            },
            {
                path: "/myApplication",
                element: <PrivateRoute>
                    <MyApplications></MyApplications>
                </PrivateRoute>
            }
        ] 
    },
    {
        path: "/dashboaed",
        element: <Dashboard></Dashboard>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/dashboard/myProfile",
                element: <p>My Profile</p>
            },
            {
                path: "/dashboard/myProfile",
                element: <p>My Profile</p>
            },
            {
                path: "/dashboard/myProfile",
                element: <p>My Profile</p>
            }
        ]
    }
])

export default Router;