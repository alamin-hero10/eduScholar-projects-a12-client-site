import { useEffect, useState } from "react";
import TopScholarshipCard from "../TopScholarshipCard/TopScholarshipCard";
import axios from "axios";

// ---TopScholarship---
const TopScholarship = () => {

    // ---useState---
    const [scholarships, setScholarships] = useState([]);

    // ---useEffect---
    useEffect(() => {
        fetchAllScholarship()
    }, [])

    // ---Return---
    const fetchAllScholarship = async () => {
    const { data } = await axios.get(`http://localhost:5100/scholarships`)
    setScholarships(data)
}

// ---Return---
return (
    <div className="grid grid-cols-1 gap-y-9 md:grid-cols-3 lg:grid-cols-4 py-32">
        {
            scholarships.map((cardData) => <TopScholarshipCard key={cardData._id} cardData={cardData}></TopScholarshipCard>)
        }
    </div>
);
};

export default TopScholarship;