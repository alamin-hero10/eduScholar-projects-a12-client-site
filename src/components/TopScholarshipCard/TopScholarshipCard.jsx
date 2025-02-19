/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const TopScholarshipCard = ({ cardData }) => {

    // ---Card-Data---
    const { _id, universityName, selectDegree, universityCity, applicationFees, stipend, subjectName, subjectCategory, universityCountry, serviceCharge, applicationDeadline, scholarshipName, scholarshipCategory, worldRank, tuitionFees, postDeadline, scholarshipDescription, photoURL, adminUser } = cardData || {};

    // ---Return---
    return (
        <div className="drop-shadow-2xl bg-white rounded-xl mx-w-[400px] h-[500px]">
            <div>
                <img
                    className="mx-w-[400px] h-64 object-cover"
                    src={photoURL}
                    alt="" />
            </div>
            {/* Description */}
            <div className="p-4">
                <div>
                    <h3>{universityName}</h3>
                </div>
                <div>
                    <p>{scholarshipCategory}</p>
                    <div className="flex items-center gap-2">
                        <p>{universityCity},</p>
                        <p>{universityCountry}</p>
                    </div>
                </div>
                <div>
                    <p>{subjectCategory}</p>
                    <p>{subjectName}</p>
                </div>
                <div>
                    <p>$ {applicationFees}</p>
                    <p>{applicationDeadline}</p>
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