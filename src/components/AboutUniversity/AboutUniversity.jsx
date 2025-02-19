import { IoSchoolOutline } from "react-icons/io5";
import { GoArrowUpRight } from "react-icons/go";
import imgLogo1 from "../../assets/scholarship/scholarship-100.png"
import imgLogo2 from "../../assets/scholarship/university-96.png"
import imageCard1 from "../../assets/card/scholarship1.jpg"
import imageCard2 from "../../assets/card/scholarship2.jpg"

const AboutUniversity = () => {
    return (
        <div className="grid md:grid-cols-2 gap-20 py-32">
            {/* Image */}
            <div className="relative">
                <div className="md:flex items-center justify-center gap-7">
                    <img className="w-[300px] h-[475px] mt-14" src={imageCard1} alt="" />
                    <img className="w-[300px] h-[475px]" src={imageCard2} alt="" />
                </div>
                <div className="absolute w-44 h-44 rounded-full bg-green-500 z-10 top-40 left-[225px] backdrop-contrast-50 bg-green-500/50 text-white">
                    <h3 className="absolute top-[54px] left-6 text-2xl font-semibold text-center">University <br /> Scholarship</h3>
                </div>
            </div>
            {/* Image */}
            <div>
                <div className="flex items-center gap-3">
                    <IoSchoolOutline className="size-9" />
                    <h3 className="text-lg font-semibold">knowledge meets innovation</h3>
                </div>
                <div className="mt-7">
                    <h1 className="text-4xl font-semibold">About University</h1>
                    <p className="text-slate-500 my-7">At Unipix University, we believe in the transformative power of education and the <br /> boundless potential that resides within each individual.</p>
                    <p className="text-slate-500">Our mission is to foster intellectual curiosity, empower individuals to realize their <br /> fullest potential, and contribute meaningfully to the betterment of society. <br /> commitment to academic excellence, diversity, and community engagement.</p>
                </div>
                <div className="md:flex items-center gap-7 mt-10">
                    {/* card-01 */}
                    <div className="flex items-center gap-5 border border-green-500 w-[300px] h-20">
                        <img className="w-16" src={imgLogo1} alt="" />
                        <h3 className="text-lg font-medium">University Mission <br /> Statement</h3>
                    </div>
                    {/* card-02 */}
                    <div className="flex items-center gap-5 border border-green-500 w-[300px] h-20">
                        <img className="w-16" src={imgLogo2} alt="" />
                        <h3 className="text-lg font-medium">University Vision <br /> Achievement</h3>
                    </div>
                </div>
                {/* Button */}
                <div className="mt-14">
                    <button className="btn btn-success text-white text-lg rounded-none">
                        <h5>View Our Program</h5>
                        <GoArrowUpRight className="size-5" />
                    </button>
                </div>
                {/* Animation */}
                {/* <div className="relative w-60 h-60 flex items-center justify-center bg-green-500 rounded-full">
                    <div className="w-20 h-20 bg-white rounded-full z-10"></div>
                    <motion.div
                        className="absolute w-48 h-48 flex items-center justify-center rounded-full border-transparent"
                        animate={{
                            rotate: 360
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    >
                        <div className="relative w-full h-full">
                            <p className="text-center text-white text-xl font-semibold uppercase tracking-wide">
                                <span className="animate-spin-slow">University Explore Future</span>
                            </p>
                        </div>
                    </motion.div>
                </div> */}
            </div>
        </div>
    );
};

export default AboutUniversity;