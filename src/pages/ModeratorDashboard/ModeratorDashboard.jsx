import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { imageUpload } from "../../api/utils";
import Swal from "sweetalert2";

const ModeratorDashboard = () => {

    // ---useContext---
    const { user } = useContext(AuthContext);
    console.log(user)

    // ---Hook-useAxiosPublic---
    const axiosPublic = useAxiosPublic();

    // Date Picker:
    const [postedDeadline, setPostedDeadline] = useState(new Date());

    // Date Picker:
    const [applyDeadline, setApplyDeadline] = useState(new Date());

    // ---Handle Apply Scholarship---
    const handleApplyScholarship = async (event) => {
        event.preventDefault();
        // Form Data:
        const form = event.target;
        const universityName = form.universityName.value;
        const selectDegree = form.selectDegree.value;
        const universityCity = form.universityCity.value;
        const applicationFees = form.applicationFees.value;
        const stipend = form.stipend.value;
        const subjectName = form.subjectName.value;
        const subjectCategory = form.subjectCategory.value;
        const universityCountry = form.universityCountry.value;
        const serviceCharge = form.serviceCharge.value;
        const applicationDeadline = applyDeadline;
        const scholarshipName = form.scholarshipName.value;
        const scholarshipCategory = form.scholarshipCategory.value;
        const worldRank = form.worldRank.value;
        const tuitionFees = form.tuitionFees.value;
        const postDeadline = postedDeadline;
        const scholarshipDescription = form.scholarshipDescription.value;
        const image = form.image.files[0];
        const photoURL = await imageUpload(image);

        // ---Regular User---
        const adminUser = {
            email: user?.email,
            userName: user?.displayName
        }

        const uploadData = { universityName, selectDegree, universityCity, applicationFees, stipend, subjectName, subjectCategory, universityCountry, serviceCharge, applicationDeadline, scholarshipName, scholarshipCategory, worldRank, tuitionFees, postDeadline, scholarshipDescription, photoURL, adminUser }

        // ---Axios Public---
        axiosPublic.post("/allScholarshipData", uploadData)
            .then(res => {
                if (res.data.insertedId) {
                    // --Swal--
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Scholarship data upload is Successfully!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    return (
        <div>
            <div className="card bg-base-100 w-full max-w-[1700px] mx-auto shrink-0 mt-5 mb-14">
                <h2 className="text-2xl font-semibold text-center mt-5">Add Scholarship Data </h2>
                <form onSubmit={handleApplyScholarship}>
                    <div className="grid md:grid-cols-3">
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
                                    {/* ---Degree--- */}
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-lg">Degree</span>
                                        </label>
                                        <select
                                            name="selectDegree"
                                            className="select select-bordered w-full rounded-none">
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
                                    {/* ---Stipend--- */}
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-lg">Stipend (If have)</span>
                                        </label>
                                        <input
                                            name="stipend"
                                            type="name"
                                            placeholder="Stipend"
                                            className="input input-bordered rounded-none"
                                            required />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ----------Form-02---------- */}
                        <div className="hero">
                            <div className="card bg-base-100 w-full shrink-0">
                                <div className="card-body">
                                    {/* ---Subject Name--- */}
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-lg">Subject Name</span>
                                        </label>
                                        <input
                                            name="subjectName"
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
                                        <select
                                            name="subjectCategory"
                                            className="select select-bordered w-full rounded-none">
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
                                            className="border p-2 rounded-none py-[10px] w-[500px]"
                                            selected={applyDeadline}
                                            onChange={(date) => setApplyDeadline(date)} />
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
                                            name="scholarshipName"
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
                                        <select
                                            name="scholarshipCategory"
                                            className="select select-bordered w-full rounded-none">
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
                                            className="border p-2 rounded-none py-[10px] w-[500px]"
                                            selected={postedDeadline}
                                            onChange={(date) => setPostedDeadline(date)} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ---Description and Photo Upload--- */}
                    <div className="card-body grid md:grid-cols-2">
                        <div className="">
                            <textarea
                                name="scholarshipDescription"
                                placeholder="Scholarship Description"
                                className="textarea textarea-bordered textarea-lg w-full max-w-3xl h-[115px] rounded-none"></textarea>
                        </div>
                        {/* ---Image Upload and Button--- */}
                        <div className="flex flex-col lg:flex-row items-center mt-10 md:mt-0">
                            <div className="form-control max-w-96 mx-auto border border-dotted border-[#015CB5] p-3">
                                <label className="label">
                                    <span className="label-text text-lg">Image Upload</span>
                                </label>
                                <input
                                    name="image"
                                    type="file"
                                    placeholder="Image"
                                    accept="image/*"
                                    // className="input input-bordered"
                                />
                            </div>
                            {/* ---Add Visa Button--- */}
                            <div className="form-control w-full max-w-52 mx-auto mt-16 md:mt-0">
                                <button className="bg-[#015CB5] py-3 px-7 text-xl font-semibold text-white rounded-none hover:bg-[#4caf50]">Submit</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ModeratorDashboard;