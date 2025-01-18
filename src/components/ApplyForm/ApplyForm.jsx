import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";

const ApplyForm = () => {

    // ---useParams---
    const { user } = useContext(AuthContext);

    // ---Hook-useAxiosPublic---
    const axiosPublic = useAxiosPublic();

    // ---useParams---
    const { id } = useParams();
    console.log(id)

    // ---useQuery---
    const { data: scholarship = [] } = useQuery({
        queryKey: ["scholarship"],
        queryFn: async () => {
            const res = await axiosPublic.get(`/scholarship/${id}`)
            return res.data;
        }
    })

    // ---Scholarship Data---
    const { _id, UniversityName, ScholarshipCategory, SubjectCategory, ApplicationFees, ServiceCharge } = scholarship || {};

    // ---Handle Apply Scholarship---
    const handleApplyScholarship = (event) => {
        event.preventDefault();
        // -----Form Data-----
        const form = event.target;
        const universityName = form.universityName.value;
        const subjectCategory = form.subjectCategory.value;
        const scholarshipCategory = form.scholarshipCategory.value;
        const selectDegree = form.selectDegree.value;
        const sscResult = form.sscResult.value;
        const hscResult = form.hscResult.value;
        const phoneNumber = form.phoneNumber.value;
        const applicationAddress = form.applicationAddress.value;
        const selectStudyGap = form.selectStudyGap.value;
        const selectGender = form.selectGender.value;
        const photo = form.yourPhoto.value;
        const email = user?.email;
        const userName = user?.displayName;
        const currentDate = new Date().toDateString();
        const scholarshipId = _id;
        const applicationFees = ApplicationFees;
        const serviceCharge = ServiceCharge;

        const newApplyData = { universityName, subjectCategory, scholarshipCategory, selectDegree, sscResult, hscResult, phoneNumber, applicationAddress, selectStudyGap, selectGender, photo, email, userName, currentDate, scholarshipId, applicationFees, serviceCharge }

        // ---Axios Public---
        axiosPublic.post("/applyScholarship", newApplyData)
            .then(res => {
                if (res.data.insertedId) {
                    // --Swal--
                    Swal.fire({
                        title: `${userName}, Your Application has been Successfully!`,
                        icon: "success",
                        draggable: true
                    });
                }
            })
    }

    // ---Return---
    return (
        <div className="card bg-base-100 w-full max-w-4xl mx-auto shrink-0 shadow-2xl mt-5 mb-14">
            <h2 className="text-2xl font-semibold text-center mt-5">Apply for the Scholarship</h2>
            <form onSubmit={handleApplyScholarship}>
                <div className="grid grid-cols-2">
                    {/* ---Form-02--- */}
                    <div className="hero">
                        <div className="card bg-base-100 w-full shrink-0">
                            <div className="card-body">
                                {/* ---University Name--- */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg">University Name</span>
                                    </label>
                                    <input
                                        name="universityName"
                                        type="name"
                                        defaultValue={UniversityName}
                                        readOnly
                                        className="input input-bordered"
                                        required />
                                </div>
                                {/* ---Subject Category--- */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg">Subject Category</span>
                                    </label>
                                    <input
                                        name="subjectCategory"
                                        type="name"
                                        defaultValue={SubjectCategory}
                                        readOnly
                                        className="input input-bordered"
                                        required />
                                </div>
                                {/* ---SSC Result--- */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg">SSC Result</span>
                                    </label>
                                    <input
                                        name="sscResult"
                                        type="number"
                                        placeholder="Result"
                                        className="input input-bordered"
                                        required />
                                </div>
                                {/* ---Phone Number--- */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg">Phone Number</span>
                                    </label>
                                    <input
                                        name="phoneNumber"
                                        type="number"
                                        placeholder="Phone"
                                        className="input input-bordered"
                                        required />
                                </div>
                                {/* ---Study Gap--- */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg">Study Gap</span>
                                    </label>
                                    <select name="selectStudyGap" className="select select-bordered w-full">
                                        <option disabled selected>Select Study Gap</option>
                                        <option value="3 Month">3 Month</option>
                                        <option value="6 Month">6 Month</option>
                                        <option value="1 Year">1 Year</option>
                                        <option value="2 Year">2 Year</option>
                                        <option value="3 Year">3 Year</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ----------Form-02---------- */}
                    <div className="hero">
                        <div className="card bg-base-100 w-full shrink-0">
                            <div className="card-body">
                                {/* ---Scholarship Category--- */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg">Scholarship Category</span>
                                    </label>
                                    <input
                                        name="scholarshipCategory"
                                        type="name"
                                        defaultValue={ScholarshipCategory}
                                        readOnly
                                        className="input input-bordered"
                                        required />
                                </div>
                                {/* ---Applying Degree--- */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg">Degree</span>
                                    </label>
                                    <select name="selectDegree" className="select select-bordered w-full">
                                        <option disabled selected>Select Degree</option>
                                        <option value="Diploma">Diploma</option>
                                        <option value="Bachelor">Bachelor</option>
                                        <option value="Masters">Masters</option>
                                    </select>
                                </div>
                                {/* ---HSC Result--- */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg">HSC Result</span>
                                    </label>
                                    <input
                                        name="hscResult"
                                        type="number"
                                        placeholder="Result"
                                        className="input input-bordered"
                                        required />
                                </div>
                                {/* ---Applicant Address--- */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg">Applicant Address</span>
                                    </label>
                                    <input
                                        name="applicationAddress"
                                        type="text"
                                        placeholder="Address"
                                        className="input input-bordered"
                                        required />
                                </div>
                                {/* ---Gender--- */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg">Gender</span>
                                    </label>
                                    <select name="selectGender" className="select select-bordered w-full">
                                        <option disabled selected>Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Others">Others</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ---Your Photo Upload--- */}
                <div className="">
                    <div className="form-control max-w-96 mx-auto">
                        <label className="label mx-auto">
                            <span className="label-text text-lg">Your Photo Upload</span>
                        </label>
                        <input
                            name="yourPhoto"
                            type="photo"
                            placeholder="Your Photo"
                            className="input input-bordered"
                            required />
                    </div>
                </div>
                {/* ---Add Visa Button--- */}
                <div className="form-control w-full max-w-52 mx-auto my-5">
                    <button className="bg-[#015CB5] py-3 px-7 text-xl font-semibold text-white rounded-lg hover:bg-[#4caf50]">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default ApplyForm;