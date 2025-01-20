import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { GoArrowUpRight } from "react-icons/go";

const TutionFees = () => {
    return (
        <div className="grid grid-cols-3 items-center justify-center py-10">
            {/* Section-01 */}
            <div className="mx-auto">
                <h1 className="text-5xl font-semibold">Tution Fees At <br /> University</h1>
                <p className="text-base text-slate-500 my-9">At Unipix University Name we are committed to <br /> providing a high-quality education that is accessible <br /> to a diverse range of students.</p>
                <button className="btn btn-success text-white text-lg">
                    Plan Details
                    <GoArrowUpRight className="size-5"/>
                </button>
            </div>
            {/* Section-02 */}
            <div className="bg-[#00935F] p-14 text-white rounded-xl mx-auto">
                <h1 className="text-2xl mb-10">Undergraduate Programs</h1>
                {/* College of Arts and Sciences */}
                <div>
                    <h3 className="text-xl underline">College of Arts and Sciences</h3>
                    <div className="">
                        <div className="flex items-center gap-3 mt-6">
                            <IoCheckmarkDoneOutline className="size-5" />
                            <p>Full-Time Tuition (per semester): $241</p>
                        </div>
                        <div className="flex items-center gap-3 mt-3">
                            <IoCheckmarkDoneOutline className="size-5" />
                            <p>Full-Time Tuition (per semester): $241</p>
                        </div>
                    </div>
                </div>
                {/* School of Business */}
                <div className="mt-7">
                    <h3 className="text-xl underline">School of Business</h3>
                    <div className="">
                        <div className="flex items-center gap-3 mt-6">
                            <IoCheckmarkDoneOutline className="size-5" />
                            <p>Full-Time Tuition (per semester): $241</p>
                        </div>
                        <div className="flex items-center gap-3 mt-3">
                            <IoCheckmarkDoneOutline className="size-5" />
                            <p>Part-Time Tuition (per credit): $141</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Section-03 */}
            <div className="bg-slate-50 hover:bg-[#00935F] hover:text-white p-14 text-black mx-auto rounded-xl">
                <h1 className="text-2xl mb-10">Undergraduate Programs</h1>
                {/* College of Arts and Sciences */}
                <div>
                    <h3 className="text-xl underline">College of Arts and Sciences</h3>
                    <div className="">
                        <div className="flex items-center gap-3 mt-6">
                            <IoCheckmarkDoneOutline className="size-5" />
                            <p>Full-Time Tuition (per semester): $241</p>
                        </div>
                        <div className="flex items-center gap-3 mt-3">
                            <IoCheckmarkDoneOutline className="size-5" />
                            <p>Full-Time Tuition (per semester): $241</p>
                        </div>
                    </div>
                </div>
                {/* School of Business */}
                <div className="mt-7">
                    <h3 className="text-xl underline">School of Business</h3>
                    <div className="">
                        <div className="flex items-center gap-3 mt-6">
                            <IoCheckmarkDoneOutline className="size-5" />
                            <p>Full-Time Tuition (per semester): $241</p>
                        </div>
                        <div className="flex items-center gap-3 mt-3">
                            <IoCheckmarkDoneOutline className="size-5" />
                            <p>Part-Time Tuition (per credit): $141</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TutionFees;