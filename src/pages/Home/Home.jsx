import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner/Banner";
import TopScholarship from "../../components/TopScholarship/TopScholarship";
import UniversityLogo from "../../components/UniversityLogo/UniversityLogo";
import TutionFees from "../../components/TutionFees/TutionFees";
import AboutUniversity from "../../components/AboutUniversity/AboutUniversity";

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
            {/* ---AboutUniversity--- */}
            <div className="w-10/12 mx-auto">
                <AboutUniversity></AboutUniversity>
            </div>
            {/* ---Top-Scholarship--- */}
            <div className="bg-slate-100">
                <div className="w-11/12 mx-auto">
                    <TopScholarship></TopScholarship>
                </div>
            </div>
            {/* ---TutionFees--- */}
            <div className="w-10/12 mx-auto">
                <TutionFees></TutionFees>
            </div>
            {/* ---UniversityLogo--- */}
            <div className="w-10/12 mx-auto">
                <UniversityLogo></UniversityLogo>
            </div>
        </div>
    );
};

export default Home;