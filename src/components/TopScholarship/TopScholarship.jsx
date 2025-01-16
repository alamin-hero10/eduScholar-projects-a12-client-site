import { useEffect, useState } from "react";
import TopScholarshipCard from "../TopScholarshipCard/TopScholarshipCard";

// ---TopScholarship---
const TopScholarship = () => {

    // ---useState---
    const [uniCard, setUniCard] = useState([]);
    console.log(uniCard)
    
    // ---useEffect---
    useEffect(() => {
        fetch(`university.json`)
            .then(res => res.json())
            .then(data => setUniCard(data))
    }, [])
    // ---useEffect---
    // ---useEffect---

    // ---Return---
    return (
        <div className="grid grid-cols-1 gap-y-9 md:grid-cols-3 lg:grid-cols-4 py-32">
            {
                uniCard.map((cardData) => <TopScholarshipCard key={cardData.id} cardData={cardData}></TopScholarshipCard>)
            }
        </div>
    );
};

export default TopScholarship;