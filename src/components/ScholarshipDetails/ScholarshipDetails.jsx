import axios from "axios";
import { useEffect, useState } from "react";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { useParams } from "react-router-dom";


const ScholarshipDetails = () => {

    // ---useParams---
    const { id } = useParams();

    // ---useState---
    const [scholarship, setScholarship] = useState({});

    // ---Scholarship Data---
    const { UniversityName, UniversityImage, ScholarshipCategory, UniversityLocation, ApplicationDeadline, SubjectName, SubjectCategory, ApplicationFees } = scholarship || {};

    // ---useEffect---
    useEffect(() => {
        fetchScholarshipData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    // ---Fetch Scholarship Data---
    const fetchScholarshipData = async () => {
        const { data } = await axios.get(`http://localhost:5100/scholarship/${id}`)
        setScholarship(data)
    }


    // ---Return---
    return (
        <div className="w-10/12 mx-auto my-20 flex gap-10">
            {/* Images */}
            <div>
                <img
                    className="w-[640px] border border-solid border-blue-200 p-2"
                    src={UniversityImage}
                    alt="" />
            </div>
            {/* Description */}
            <div className="mt-7 md:mt-0 border border-solid border-blue-200 p-3 w-[640px]">
                <h1>Event Information</h1>
                <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                        <div className="border border-solid border-red-500 rounded-full p-2">
                            <FaMoneyCheckDollar className="size-7 text-red-400 " />
                        </div>
                        <p>Fees:</p>
                    </div>
                    <div className="">
                        <p>${ApplicationFees}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScholarshipDetails;