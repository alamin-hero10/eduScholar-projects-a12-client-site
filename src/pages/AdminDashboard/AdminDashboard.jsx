import { FaUserGraduate } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const AdminDashboard = () => {
    return (
        <div className="flex">
            {/* ---Dashboard Sidebar--- */}
            <div className="w-64 min-h-screen bg-green-300">
                <ul className="menu p-4">
                    <li className='text-xl text-black font-medium'>
                        <NavLink to="/dashboard/myProfile">
                            <FaUserGraduate className='size-6 text-blue-500' />
                            My Profile
                        </NavLink>
                    </li>
                    <li className='text-xl text-black font-medium'>
                        <NavLink to="/dashboard/myApplication">
                            <FaUserGraduate className='size-6 text-blue-500' />
                            My Application
                        </NavLink>
                    </li>
                    <li className='text-xl text-black font-medium'>
                        <NavLink to="/dashboard/myReviews">
                            <FaUserGraduate className='size-6 text-blue-500' />
                            My Reviews
                        </NavLink>
                    </li>
                    <li className='text-xl text-black font-medium'>
                        <NavLink to="/dashboard/myReviews">
                            <FaUserGraduate className='size-6 text-blue-500' />
                            My Reviews
                        </NavLink>
                    </li>
                    <li className='text-xl text-black font-medium'>
                        <NavLink to="/dashboard/contact">
                            <FaUserGraduate className='size-6 text-blue-500' />
                            Contact
                        </NavLink>
                    </li>
                    {/* ---Divider--- */}
                    <div className="divider"></div>
                    {/* ---Home-Page--- */}
                    <li className='text-xl text-black font-medium'>
                        <NavLink to="/">
                            <FaUserGraduate className='size-6 text-blue-500' />
                            Home
                        </NavLink>
                    </li>
                </ul>
            </div>
            {/* ---Dashboard-Content--- */}
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default AdminDashboard;