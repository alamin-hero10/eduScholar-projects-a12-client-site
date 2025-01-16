import Banner from "../../components/Banner/Banner";
import TopScholarship from "../../components/TopScholarship/TopScholarship";

const Home = () => {
    return (
        <div className="min-h-screen">
            {/* ---Banner--- */}
            <div>
                <Banner></Banner>
            </div>
            {/* ---Top-Scholarship--- */}
            <div className="bg-slate-100">
            <div className="w-11/12 mx-auto">
                <TopScholarship></TopScholarship>
            </div>
            </div>
            {/* ---Name--- */}
            <div></div>
            {/* ---Name--- */}
            <div></div>
            {/* ---Name--- */}
            <div></div>
        </div>
    );
};

export default Home;