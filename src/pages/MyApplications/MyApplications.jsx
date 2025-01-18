import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const MyApplications = () => {

    // ---useContext---
    const { user } = useContext(AuthContext);

    // ---axiosPublic---
    const axiosPublic = useAxiosPublic();

    // ---useQuery---
    const { data: applyData = [] } = useQuery({
        queryKey: ["applyData"],
        queryFn: async () => {
            const res = await axiosPublic.get(`/applyScholarship/${user?.email}`)
            return res.data;
        }
    })

    // ---Return---
    return (
        <div>
            <div className="w-11/12 md:mx-auto mx-3 my-10 min-h-screen">
                <Helmet>
                    <title>My Applications | Education Scholarship</title>
                </Helmet>
                {/* ---My Application Count--- */}
                <div className="">
                    <h3 className="text-lg font-semibold">My Application: <span className="bg-[#ECFDF5] text-xs text-[#059669] px-3 py-1 rounded-3xl">{applyData.length} application</span></h3>
                </div>
                {/* ---Table Formate--- */}
                <div className="overflow-x-auto mt-5">
                    <table className="table table-lg border border-solid">
                        <thead className="border border-solid bg-slate-100">
                            <tr className="text-[17px] text-black font-normal">
                                <th>Photo</th>
                                <th>University Name</th>
                                <th>Subject Category</th>
                                <th>Degree</th>
                                <th>Address</th>
                                <th>ApplicationFees</th>
                                <th>ServiceCharge</th>
                                <th>Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Dynamic tr My Application Table*/}
                            {
                                applyData.map((apply) =>
                                    <tr key={apply._id}>
                                        <td>
                                            <img className="w-[90px] border border-solid border-gray-300 p-1" src={apply.photo} alt="" />
                                        </td>
                                        <td>{apply.universityName}</td>
                                        <td>{apply.subjectCategory}</td>
                                        <td>{apply.selectDegree}</td>
                                        <td>{apply.applicationAddress}</td>
                                        <td>$ {apply.applicationFees}</td>
                                        <td>$ {apply.serviceCharge}</td>
                                        {/* <td>{format(new Date(room.date), 'P')}</td> */}
                                        <td>
                                            <div className="flex items-center gap-2">
                                                {/* <Link to={`/myBookingUpdate/${room._id}`}> */}
                                                <Link to="/">
                                                    <button className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-3 py-2 text-center">Update Date</button>
                                                </Link>
                                                <button
                                                    // onClick={() => document.getElementById('my_modal_4').showModal()}
                                                    className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2 text-center">
                                                    Review
                                                </button>
                                                <button
                                                    // onClick={() => handleCancelConfirm(room._id)}
                                                    className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2 text-center">Cancel</button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyApplications;