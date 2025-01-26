import TopScholarshipCard from "../TopScholarshipCard/TopScholarshipCard";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";

// ---TopScholarship---
const TopScholarship = () => {

    // ---Hook-useAxiosPublic---
    const axiosPublic = useAxiosPublic();

    // ---useQuery---
    const { data: allScholarship = [] } = useQuery({
        queryKey: ["allScholarship"],
        queryFn: async () => {
            const res = await axiosPublic.get(`/scholarship`)
            return res.data;
        }
    })

    // ---Return---
    return (
        <section>
            <SectionTitle heading={"Top Scholarship"}>
            </SectionTitle>
            <div className="grid grid-cols-1 gap-y-9 md:grid-cols-3 lg:grid-cols-4 py-20">
                {
                    allScholarship.map((cardData) => <TopScholarshipCard key={cardData._id} cardData={cardData}></TopScholarshipCard>)
                }
            </div>
        </section>
    );
};

export default TopScholarship;