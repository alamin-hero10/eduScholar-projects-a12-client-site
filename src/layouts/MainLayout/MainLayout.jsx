import { Outlet } from "react-router-dom";
import Footer from "../../pages/Footer/Footer";
import Navbar from "../../pages/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div>
            {/* ---Navbar--- */}
            <div className="bg-[#F1F5F9] sticky top-0 z-50 drop-shadow-xl">
                <Navbar></Navbar>
            </div>
            {/* ---Outlet--- */}
            <div className="min-h-screen">
                <Outlet></Outlet>
            </div>
            {/* ---Footer--- */}
            <div className="bg-slate-800 mt-20">
                <div className="w-11/12 mx-auto">
                    <Footer></Footer>
                </div>
                {/* Divider */}
                <div className="border-b border-solid border-[#5EEAD4]"></div >
                {/* CopyRight */}
                <footer className="footer footer-center text-white py-2">
                    <aside>
                        <p className="text-base">Copyright © {new Date().getFullYear()} - All right reserved by Education Scholarship Ltd</p>
                    </aside>
                </footer>
            </div>
        </div>
    );
};

export default MainLayout;