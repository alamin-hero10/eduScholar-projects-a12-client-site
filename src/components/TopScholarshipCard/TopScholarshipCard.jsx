/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const TopScholarshipCard = ({ cardData }) => {

    // ---Card-Data---
    const { _id, UniversityName, UniversityImage, ScholarshipCategory, UniversityLocation, ApplicationDeadline, SubjectName, SubjectCategory, ApplicationFees } = cardData || {};

    // ---Return---
    return (
        <div className="drop-shadow-2xl bg-white rounded-xl w-[400px] h-[500px]">
            <div>
                <img
                    className="w-[400px] h-64 object-cover"
                    src={UniversityImage}
                    alt="" />
            </div>
            {/* Description */}
            <div className="px-5">
                <div>
                    <h3>{UniversityName}</h3>
                </div>
                <div>
                    <p>{ScholarshipCategory}</p>
                    <div className="flex items-center gap-2">
                        <p>{UniversityLocation.City},</p>
                        <p>{UniversityLocation.Country}</p>
                    </div>
                </div>
                <div>
                    <p>{SubjectCategory}</p>
                    <p>{SubjectName}</p>
                </div>
                <div>
                    <p>$ {ApplicationFees}</p>
                    <p>{ApplicationDeadline}</p>
                </div>
                {/* Button */}
                <Link to={`/scholarshipDetails/${_id}`}>
                    <button className="btn btn-success text-white">Details</button>
                </Link>
            </div>
        </div>
    );
};

export default TopScholarshipCard;