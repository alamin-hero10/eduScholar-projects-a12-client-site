import Marquee from "react-fast-marquee";
import univLogo1 from "../../assets/universityLogo/Australian_National_University-Logo.wine.png"
import univLogo2 from "../../assets/universityLogo/Columbia_University-Logo.wine.png"
import univLogo4 from "../../assets/universityLogo/Cornell_University-Logo.wine.png"
import univLogo3 from "../../assets/universityLogo/Massachusetts_Institute_of_Technology-Logo.wine.png"
import univLogo5 from "../../assets/universityLogo/National_University_of_Singapore-Logo.wine.png"
import univLogo6 from "../../assets/universityLogo/Princeton_University-Logo.wine.png"
import univLogo7 from "../../assets/universityLogo/Seoul_National_University-Logo.wine.png"
import univLogo8 from "../../assets/universityLogo/Stanford_University-Logo.wine.png"
import univLogo9 from "../../assets/universityLogo/University_of_California,_Berkeley-Logo.wine.png"
import univLogo10 from "../../assets/universityLogo/University_of_Cambridge-Logo.wine.png"
import univLogo11 from "../../assets/universityLogo/University_of_Pennsylvania-Logo.wine.png"
import univLogo12 from "../../assets/universityLogo/University_of_Pennsylvania-Logo.wine.png"
import univLogo13 from "../../assets/universityLogo/Yale_University-Logo.wine.png"

const UniversityLogo = () => {
    return (
        <div className="my-32">
            <Marquee>
                {/* ---Image--- */}
                <div className="ml-14">
                    <img
                        className="w-52 border"
                        src={univLogo1}
                        alt="" />
                </div>
                {/* ---Image--- */}
                <div className="ml-14">
                    <img
                        className="w-52 border"
                        src={univLogo2}
                        alt="" />
                </div>
                {/* ---Image--- */}
                <div className="ml-14">
                    <img
                        className="w-52 border"
                        src={univLogo3}
                        alt="" />
                </div>
                {/* ---Image--- */}
                <div className="ml-14">
                    <img
                        className="w-52 border"
                        src={univLogo4}
                        alt="" />
                </div>
                {/* ---Image--- */}
                <div className="ml-14">
                    <img
                        className="w-52 border"
                        src={univLogo5}
                        alt="" />
                </div>
                {/* ---Image--- */}
                <div className="ml-14">
                    <img
                        className="w-52 border"
                        src={univLogo6}
                        alt="" />
                </div>
                {/* ---Image--- */}
                <div className="ml-14">
                    <img
                        className="w-52 border"
                        src={univLogo7}
                        alt="" />
                </div>
                {/* ---Image--- */}
                <div className="ml-14">
                    <img
                        className="w-52 border"
                        src={univLogo8}
                        alt="" />
                </div>
                {/* ---Image--- */}
                <div className="ml-14">
                    <img
                        className="w-52 border"
                        src={univLogo9}
                        alt="" />
                </div>
                {/* ---Image--- */}
                <div className="ml-14">
                    <img
                        className="w-52 border"
                        src={univLogo10}
                        alt="" />
                </div>
                {/* ---Image--- */}
                <div className="ml-14">
                    <img
                        className="w-52 border"
                        src={univLogo11}
                        alt="" />
                </div>
                {/* ---Image--- */}
                <div className="ml-14">
                    <img
                        className="w-52 border"
                        src={univLogo12}
                        alt="" />
                </div>
                {/* ---Image--- */}
                <div className="ml-14">
                    <img
                        className="w-52 border"
                        src={univLogo13}
                        alt="" />
                </div>
            </Marquee>
        </div>
    );
};

export default UniversityLogo;