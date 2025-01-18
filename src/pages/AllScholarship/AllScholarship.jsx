import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../components/Shared/SectionTitle/SectionTitle";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import AllScholarshipCard from "../../components/AllScholarshipCard/AllScholarshipCard";

const AllScholarship = () => {
    // ---Hook-useAxiosPublic---
    const axiosPublic = useAxiosPublic();

    // ---useQuery---
    const { data: allScholarship = [] } = useQuery({
        queryKey: ["allScholarship"],
        queryFn: async () => {
            const res = await axiosPublic.get(`/scholarships`)
            return res.data;
        }
    });

    // ---Return---
    return (
        <section className="w-11/12 mx-auto">
            <SectionTitle heading={"Top Scholarship"}>
            </SectionTitle>
            <div className="grid grid-cols-1 gap-y-9 md:grid-cols-3 lg:grid-cols-4 py-20">
                {
                    allScholarship.map((allCardData) => <AllScholarshipCard key={allCardData._id} allCardData={allCardData}></AllScholarshipCard>)
                }
            </div>
        </section>
    );
};

export default AllScholarship;