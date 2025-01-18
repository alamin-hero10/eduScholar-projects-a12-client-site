import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Home from "../../pages/Home/Home";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import ScholarshipDetails from "../../components/ScholarshipDetails/ScholarshipDetails";
import ApplyForm from "../../components/ApplyForm/ApplyForm";
import MyApplications from "../../pages/UserDashboardPage/MyApplications/MyApplications";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AllScholarship from "../../pages/AllScholarship/AllScholarship";
import UserDashboard from "../../layouts/UserDashboard/UserDashboard";
import MyProfile from "../../pages/UserDashboardPage/MyProfile/MyProfile";

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
            }
        ]
    },
    {
        path: "/userDashboard",
        element: <UserDashboard></UserDashboard>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "myProfile",
                element: <MyProfile></MyProfile>
            },
            {
                path: "myApplication",
                element: <PrivateRoute>
                    <MyApplications></MyApplications>
                </PrivateRoute>
            }
        ]
    }
])

export default Router;