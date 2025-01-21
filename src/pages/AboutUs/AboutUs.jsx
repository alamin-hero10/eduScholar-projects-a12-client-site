import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AboutUs = () => {
    // ---useContext---
    const { user } = useContext(AuthContext);

    // ---Hook-useAxiosPublic---
    const axiosPublic = useAxiosPublic();

    // Date Picker:
    const [startDate, setStartDate] = useState(new Date());

    // Date Picker:
    const [applicationDeadline, setApplicationDeadline] = useState(new Date());

    // ---useQuery---
    const { data: scholarship = [] } = useQuery({
        queryKey: ["scholarship"],
        queryFn: async () => {
            const res = await axiosPublic.get(`/scholarship/${id}`)
            return res.data;
        }
    })

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

        const newApplyData = { universityName, subjectCategory, scholarshipCategory, selectDegree, sscResult, hscResult, phoneNumber, applicationAddress, selectStudyGap, selectGender, photo, email, userName, currentDate }

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
        <div>
            <div className="card bg-base-100 w-full max-w-7xl mx-auto shrink-0 shadow-2xl mt-5 mb-14">
                <h2 className="text-2xl font-semibold text-center mt-5">Add Scholarship Data </h2>
                <form onSubmit={handleApplyScholarship}>
                    <div className="grid grid-cols-3">
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
                                            placeholder="University name"
                                            className="input input-bordered rounded-none"
                                            required />
                                    </div>
                                    {/* ---Applying Degree--- */}
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-lg">Degree</span>
                                        </label>
                                        <select name="selectDegree" className="select select-bordered w-full rounded-none">
                                            <option disabled selected>Select Degree</option>
                                            <option value="Diploma">Diploma</option>
                                            <option value="Bachelor">Bachelor</option>
                                            <option value="Masters">Masters</option>
                                        </select>
                                    </div>
                                    {/* ---University City--- */}
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-lg">University City</span>
                                        </label>
                                        <input
                                            name="universityCity"
                                            type="name"
                                            placeholder="City"
                                            className="input input-bordered rounded-none"
                                            required />
                                    </div>
                                    {/* ---Application Fees--- */}
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-lg">Application Fees</span>
                                        </label>
                                        <input
                                            name="applicationFees"
                                            type="number"
                                            placeholder="Fees"
                                            className="input input-bordered rounded-none"
                                            required />
                                    </div>
                                    {/* ---Study Gap--- */}
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-lg">Study Gap</span>
                                        </label>
                                        <select name="selectStudyGap" className="select select-bordered w-full rounded-none">
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
                                            <span className="label-text text-lg">Subject Name</span>
                                        </label>
                                        <input
                                            name="scholarshipCategory"
                                            type="name"
                                            placeholder="Subject Name"
                                            className="input input-bordered rounded-none"
                                            required />
                                    </div>
                                    {/* ---Subject Category--- */}
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-lg">Subject Category</span>
                                        </label>
                                        <select name="selectDegree" className="select select-bordered w-full rounded-none">
                                            <option disabled selected>Select Subject</option>
                                            <option value="Agriculture">Agriculture</option>
                                            <option value="Engineering">Engineering</option>
                                            <option value="Doctor">Doctor</option>
                                        </select>
                                    </div>
                                    {/* ---University Country--- */}
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-lg">University Country</span>
                                        </label>
                                        <input
                                            name="universityCountry"
                                            type="name"
                                            placeholder="Country"
                                            className="input input-bordered rounded-none"
                                            required />
                                    </div>
                                    {/* ---Service Charge--- */}
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-lg">Service Charge</span>
                                        </label>
                                        <input
                                            name="serviceCharge"
                                            type="number"
                                            placeholder="Service Charge"
                                            className="input input-bordered rounded-none"
                                            required />
                                    </div>
                                    {/* ---Application Deadline--- */}
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-lg">Application Deadline</span>
                                        </label>
                                        <DatePicker
                                            className="border p-2 rounded-none py-[10px] w-[360px]"
                                            selected={applicationDeadline}
                                            onChange={(date) => setApplicationDeadline(date)} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ----------Form-03---------- */}
                        <div className="hero">
                            <div className="card bg-base-100 w-full shrink-0">
                                <div className="card-body">
                                    {/* ---Scholarship Category--- */}
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-lg">Scholarship Name</span>
                                        </label>
                                        <input
                                            name="scholarshipCategory"
                                            type="name"
                                            placeholder="Scholarship Name"
                                            className="input input-bordered rounded-none"
                                            required />
                                    </div>
                                    {/* ---Scholarship Category--- */}
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-lg">Scholarship Category</span>
                                        </label>
                                        <select name="selectDegree" className="select select-bordered w-full rounded-none">
                                            <option disabled selected>Select Scholarship</option>
                                            <option value="Full-fund">Full Fund</option>
                                            <option value="Partial">Partial</option>
                                            <option value="Self-fund">Self Fund</option>
                                        </select>
                                    </div>
                                    {/* ---University World rank--- */}
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-lg">University World Rank</span>
                                        </label>
                                        <input
                                            name="worldRank"
                                            type="name"
                                            placeholder="World Rank"
                                            className="input input-bordered rounded-none"
                                            required />
                                    </div>
                                    {/* ---Tuition Fees,(optional)--- */}
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-lg">Tuition Fees(optional)</span>
                                        </label>
                                        <input
                                            name="tuitionFees"
                                            type="number"
                                            placeholder="Tuition Fees"
                                            className="input input-bordered rounded-none"
                                            required />
                                    </div>
                                    {/* ---Posted Deadline--- */}
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-lg">Posted Deadline</span>
                                        </label>
                                        <DatePicker
                                            className="border p-2 rounded-none py-[10px] w-[360px]"
                                            selected={startDate}
                                            onChange={(date) => setStartDate(date)} />
                                    </div>
                                    {/* <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-lg">Application Deadline</span>
                                        </label>
                                        <input
                                            name="tuitionFees"
                                            type="number"
                                            placeholder="Tuition Fees"
                                            className="input input-bordered rounded-none"
                                            required />
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ---Your Photo Upload--- */}
                    <div className="flex items-center">
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
                        {/* ---Add Visa Button--- */}
                        <div className="form-control w-full max-w-52 mx-auto">
                            <button className="bg-[#015CB5] py-3 px-7 text-xl font-semibold text-white rounded-lg hover:bg-[#4caf50]">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AboutUs;