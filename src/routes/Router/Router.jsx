import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Home from "../../pages/Home/Home";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import ScholarshipDetails from "../../components/ScholarshipDetails/ScholarshipDetails";
import ApplyForm from "../../components/ApplyForm/ApplyForm";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AllScholarship from "../../pages/AllScholarship/AllScholarship";
import Dashboard from "../../layouts/Dashboard/Dashboard";
import MyProfile from "../../pages/UserDashboard/MyProfile/MyProfile";
import MyApplications from "../../pages/UserDashboard/MyApplications/MyApplications";
import Payment from "../../pages/UserDashboard/Payment/Payment";
import Contact from "../../pages/UserDashboard/Contact/Contact";
import ContactUs from "../../pages/ContactUs/ContactUs";
import SignUp from "../../pages/SignUp/SignUp";
import ModeratorDashboard from "../../pages/ModeratorDashboard/ModeratorDashboard";

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
                element: <PrivateRoute><ScholarshipDetails></ScholarshipDetails></PrivateRoute>
            },
            {
                path: "/applyForm/:id",
                element: <PrivateRoute>
                    <ApplyForm></ApplyForm>
                </PrivateRoute>
            },
            {
                path: "/contactUs",
                element: <ContactUs></ContactUs>
            },
            {
                path: "/moderator",
                element: <PrivateRoute> <ModeratorDashboard></ModeratorDashboard></PrivateRoute >
            },
            {
                path: "/signUp",
                element: <SignUp></SignUp>
            }
        ]
    },
    // ---User-Dashboard---
    {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            // ---Admin User Routes---
            {

            },
            // ---Normal User Routes---
            {
                index: "true",
                element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute >
            },
            {
                path: "myApplication",
                element: <PrivateRoute>
                    <MyApplications></MyApplications>
                </PrivateRoute>
            },
            {
                path: "payment",
                element: <Payment></Payment>
            },
            {
                path: "contact",
                element: <Contact></Contact>
            }
        ]
    }
])

export default Router;