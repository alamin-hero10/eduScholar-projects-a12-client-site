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
            <div className="bg-slate-500">
                <TopScholarship></TopScholarship>
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