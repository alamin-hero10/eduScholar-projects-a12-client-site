import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner/Banner";
import TopScholarship from "../../components/TopScholarship/TopScholarship";
import UniversityLogo from "../../components/UniversityLogo/UniversityLogo";
import TutionFees from "../../components/TutionFees/TutionFees";

const Home = () => {
    return (
        <div className="min-h-screen">
            <Helmet>
                <title>Home | Education Scholarship</title>
            </Helmet>
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
            <div className="w-10/12 mx-auto">
                <UniversityLogo></UniversityLogo>
            </div>
            {/* ---Name--- */}
            <div className="w-10/12 mx-auto">
                <TutionFees></TutionFees>
            </div>
            {/* ---Name--- */}
            <div></div>
        </div>
    );
};

export default Home;