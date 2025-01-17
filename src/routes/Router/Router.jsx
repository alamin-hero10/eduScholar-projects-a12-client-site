import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Home from "../../pages/Home/Home";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import ScholarshipDetails from "../../components/ScholarshipDetails/ScholarshipDetails";
import ApplyForm from "../../components/ApplyForm/ApplyForm";
import MyApplications from "../../pages/MyApplications/MyApplications";

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
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/scholarshipDetails/:id",
                element: <ScholarshipDetails></ScholarshipDetails>
            },
            {
                path: "/applyForm/:id",
                element: <ApplyForm></ApplyForm>
            },
            {
                path: "/myApplication",
                element: <MyApplications></MyApplications>
            }
        ] 
    }
])

export default Router;