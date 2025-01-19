import AdminDashboard from "../../pages/AdminDashboard/AdminDashboard";
import UserDashboard from "../../pages/UserDashboard/UserDashboard";

const Dashboard = () => {

    // ---Admin---
    const isAdmin = false;

    // ---Return---
    return (
        <div>
            {
                isAdmin ? <>
                <AdminDashboard></AdminDashboard>
                </>
                    :
                    <>
                    <UserDashboard></UserDashboard>
                    </>
            }
        </div>
    );
};

export default Dashboard;