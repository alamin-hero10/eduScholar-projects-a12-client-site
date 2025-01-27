import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin, FaSquareInstagram, FaTwitter } from "react-icons/fa6";
import { MdEmail, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <div className=" md:grid md:grid-cols-2 lg:grid-cols-4 pt-20 pb-14 items-center ">
                {/* ---Section-01--- */}
                <div className="text-white">
                    <h1 className="text-white text-3xl font-bold">Education Scholarship</h1>
                    <p className="text-gray-300 mt-3">Contact us to know about the Hotel <br /> or you can know about us through <br /> social media.</p>
                    <div className="flex items-center gap-2 my-3">
                        <MdEmail className="size-6 text-orange-400" />
                        <h3>Email: eduScholarship@gmail.com</h3>
                    </div>
                    <div className="flex items-center gap-7 mt-1 mb-2">
                        <a href="https://www.facebook.com/">
                            <FaFacebookSquare className="size-7 text-[#1877F2]" />
                        </a>
                        <a href="https://x.com/">
                            <FaTwitter className="size-7 text-[#03A9F4]" />
                        </a>
                        <a href="https://www.linkedin.com/">
                            <FaLinkedin className="size-7 text-[#0077B7]" />
                        </a>
                        <a href="https://www.instagram.com/">
                            <FaSquareInstagram className="size-7 text-[#f6a75c]" />
                        </a>
                    </div>
                </div>
                {/* ---Section-02--- */}
                <div className="text-white md:justify-self-center mt-10 md:mt-10 lg:mt-0">
                    <h1 className="text-xl font-semibold">Explore</h1>
                    <div className="w-[73px] border-t"></div>
                    <div className="flex flex-col gap-2 mt-5">
                        <Link to="/" className="flex items-center text-base text-gray-300">
                            <MdKeyboardDoubleArrowRight className="size-5" />
                            <span>Home</span>
                        </Link>
                        <Link to="/allScholarship" className="flex items-center text-base text-gray-300">
                            <MdKeyboardDoubleArrowRight className="size-5" />
                            <span>All Scholarship</span>
                        </Link>
                        <Link to="/adminDashboard" className="flex items-center text-base text-gray-300">
                            <MdKeyboardDoubleArrowRight className="size-5" />
                            <span>Admin Dashboard</span>
                        </Link>
                        <Link to="/moderator" className="flex items-center text-base text-gray-300">
                            <MdKeyboardDoubleArrowRight className="size-5" />
                            <span>Moderator Dashboard</span>
                        </Link>
                        <Link to="/contactUs" className="flex items-center text-base text-gray-300">
                            <MdKeyboardDoubleArrowRight className="size-5" />
                            <span>User Dashboard</span>
                        </Link>
                    </div>
                </div>
                {/* ---Section-03--- */}
                <div className="text-white mt-10 md:mt-10 lg:mt-0 md:justify-self-center">
                    <div>
                        <h1 className="text-lg font-semibold">Address:</h1>
                        <div className="w-[75px] border-t"></div>
                        <p className="text-base text-gray-300 mt-5">775 5th Ave, Dhaka,</p>
                        <p className="text-base text-gray-300">BD 1205 Bangladesh</p>
                    </div>
                    <div className="mt-10 md:mt-10 lg:mt-0">
                        <h1 className="text-lg font-semibold">Hours:</h1>
                        <p className="text-base text-gray-300 mt-2">9.30am - 6.30pm</p>
                        <p className="text-base text-gray-300">Friday to Thursday</p>
                    </div>
                </div>
                {/* ---Section-04--- */}
                <form className="mt-10 md:mt-10 lg:mt-0">
                    <h6 className="footer-title text-white">Education Scholarship</h6>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="label-text text-white">Enter your email address</span>
                        </label>
                        <div className="join">
                            <input
                                type="text"
                                placeholder="username@site.com"
                                className="input input-bordered join-item" />
                            <button className="btn btn-primary join-item">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Footer;