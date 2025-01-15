import { Link } from "react-router-dom";
import harvard from "../../assets/card01.jpg"

const TopScholarship = () => {
    return (
        <div>
            <div className="drop-shadow-2xl bg-white rounded-xl w-[400px] h-[500px]">
                <div>
                    <img
                        className="w-[400px] h-64 object-cover"
                        src={harvard}
                        alt="" />
                </div>
                {/* Description */}
                <div>
                    <div>
                        <h3>Harvard University</h3>
                    </div>
                    <div>
                        <p>Fully Funded</p>
                        <p>USA, Cambridge</p>
                    </div>
                    <div>
                        <p>STEM</p>
                        <p>Fully Funded</p>
                    </div>
                    <div>
                        <p>$75</p>
                        <p>2025-03-15</p>
                    </div>
                </div>
                {/* Button */}
                <Link>
                    <button className="btn btn-accent">Details</button>
                </Link>
            </div>
        </div>
    );
};

export default TopScholarship;