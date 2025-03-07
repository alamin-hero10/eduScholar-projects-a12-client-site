import { FaMoneyCheckDollar, FaQuoteLeft } from "react-icons/fa6";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link, useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import PurchaseModal from "../SharedModal/PurchaseModal/PurchaseModal";

const ScholarshipDetails = () => {

    // ---Hook-useAxiosPublic---
    const axiosPublic = useAxiosPublic();

    // ---useParams---
    const { id } = useParams();

    // ---useQuery---
    const { data: scholarship = [] } = useQuery({
        queryKey: ["scholarship", id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/scholarship/${id}`)
            return res.data;
        }
    })

    // ---Scholarship Data---
    const { _id, universityName, selectDegree, universityCity, applicationFees, stipend, subjectName, subjectCategory, universityCountry, serviceCharge, applicationDeadline, scholarshipName, scholarshipCategory, worldRank, tuitionFees, postDeadline, scholarshipDescription, photoURL, adminUser } = scholarship || {};

    // ---useState---
    let [isOpen, setIsOpen] = useState(false)

    const closeModal = () => {
        setIsOpen(false)
    }

    // ---Return---
    return (
        <div className="w-10/12 mx-auto my-20 flex gap-10">
            {/* ---Description and Images--- */}
            <div>
                {/* ---Images--- */}
                <div>
                    <img
                        className="w-[640px] border border-solid border-blue-200 p-2"
                        src={photoURL}
                        alt="" />
                </div>
                {/* ---Description--- */}
                <div className="mt-10">
                    <p>{scholarshipDescription}</p>
                </div>
                {/* ---Rating and Review--- */}
                <div className="mt-10">
                    <h3 className="text-lg font-medium border-l-4 border-solid border-green-600"><span className="text-4xl font-bold my-3 ml-5">Rating and Review</span> </h3>
                    {/* <h1 className="text-4xl font-bold my-3">What Our Customer Say</h1> */}

                    {/* -----Carousel----- */}
                    <div className="max-w-sm md:max-w-xl">
                        <Carousel
                            showThumbs={false}
                            infiniteLoop
                            autoPlay
                            interval={3000}
                            showStatus={false}
                            stopOnHover
                            emulateTouch>
                            {/* ---Banner Carousel Image--- */}
                            {/* ---Carousel-01--- */}
                            <div className="mt-5">
                                {/* md */}
                                <div className="rating rating-md mt-7">
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                    <input
                                        type="radio"
                                        name="rating-7"
                                        className="mask mask-star-2 bg-orange-400"
                                        defaultChecked />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                </div>
                                <div>
                                    <p>Best Reviewing adherence to the legal and policy requirements of the destination country, such as financial capability or intent to return to the home country.</p>
                                </div>
                                <div className="flex float-end">
                                    <FaQuoteLeft className="size-8 text-yellow-400 my-14" />
                                </div>
                                <div className="flex items-center gap-5 mt-14">
                                    <div className="w-20 h-20 rounded-full">
                                        <img className="w-20 h-20 rounded-full" src="" alt="" />
                                    </div>
                                    <div className="">
                                        <h3 className="text-xl font-semibold">Anderson</h3>
                                        <p className="text-base">15-01-2025</p>
                                    </div>
                                </div>
                            </div>
                            {/* ---Carousel-02--- */}
                            <div className="mt-5">
                                {/* md */}
                                <div className="rating rating-md mt-7">
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                    <input
                                        type="radio"
                                        name="rating-7"
                                        className="mask mask-star-2 bg-orange-400"
                                        defaultChecked />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                </div>
                                <p>For rejected applications, a visa review may involve reconsideration or appeal, where the applicant submits additional evidence or clarifications.</p>
                                <div className="flex float-end">
                                    <FaQuoteLeft className="size-8 text-yellow-400 my-14" />
                                </div>
                                <div className="flex items-center gap-5 mt-14">
                                    <div className="w-20 h-20 rounded-full">
                                        <img className="w-20 h-20 rounded-full bg-contain" src="" alt="" />
                                    </div>
                                    <div className="">
                                        <h3 className="text-xl font-semibold">Anderson</h3>
                                        <p className="text-base">11-01-2025</p>
                                    </div>
                                </div>
                            </div>
                            {/* ---Carousel-03--- */}
                            <div className="mt-5">
                                {/* md */}
                                <div className="rating rating-md mt-7">
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                    <input
                                        type="radio"
                                        name="rating-7"
                                        className="mask mask-star-2 bg-orange-400"
                                        defaultChecked />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                </div>
                                <p>Ensuring the stated purpose of the visit aligns with the visa category. Cross-checking supporting documents like invitation letters, travel itineraries, or employment offers.</p>
                                <div className="flex float-end">
                                    <FaQuoteLeft className="size-8 text-yellow-400 my-14" />
                                </div>
                                <div className="flex items-center gap-5 mt-14">
                                    <div className="w-20 h-20 rounded-full">
                                        <img className="w-20 h-20 rounded-full bg-contain" src="" alt="" />
                                    </div>
                                    <div className="">
                                        <h3 className="text-xl font-semibold">Anderson</h3>
                                        <p className="text-base">07-01-2025</p>
                                    </div>
                                </div>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
            {/* ---Details--- */}
            <div className="mt-7 md:mt-0 border border-solid border-blue-200 px-10 py-7 w-[640px]">
                <span className="text-xl font-semibold border-y border-solid border-green-500 p-1">{universityName}</span>
                {/* fee */}
                <div className="flex items-center justify-between gap-3 mt-5">
                    <div className="flex items-center gap-3">
                        <div className="border border-solid border-red-500 rounded-full p-1.5">
                            <FaMoneyCheckDollar className="size-7 text-red-400 " />
                        </div>
                        <p className="text-lg">Fees:</p>
                    </div>
                    <div className="">
                        <p className="text-2xl font-bold">{subjectName}</p>
                    </div>
                </div>
                {/* Divider */}
                <div className="border-b py-2"></div>
                {/* fee */}
                <div className="flex items-center justify-between gap-3 mt-5">
                    <div className="flex items-center gap-3">
                        <div className="border border-solid border-red-500 rounded-full p-1.5">
                            <FaMoneyCheckDollar className="size-7 text-red-400 " />
                        </div>
                        <p className="text-lg">Fees:</p>
                    </div>
                    <div className="">
                        <p className="text-2xl font-bold">{subjectCategory}</p>
                    </div>
                </div>
                {/* Divider */}
                <div className="border-b py-2"></div>
                {/* fee */}
                <div className="flex items-center justify-between gap-3 mt-5">
                    <div className="flex items-center gap-3">
                        <div className="border border-solid border-red-500 rounded-full p-1.5">
                            <FaMoneyCheckDollar className="size-7 text-red-400 " />
                        </div>
                        <p className="text-lg">Fees:</p>
                    </div>
                    <div className="">
                        <p className="text-2xl font-bold">{scholarshipCategory}</p>
                    </div>
                </div>
                {/* Divider */}
                <div className="border-b py-2"></div>
                {/* fee */}
                <div className="flex items-center justify-between gap-3 mt-5">
                    <div className="flex items-center gap-3">
                        <div className="border border-solid border-red-500 rounded-full p-1.5">
                            <FaMoneyCheckDollar className="size-7 text-red-400 " />
                        </div>
                        <p className="text-lg">Fees:</p>
                    </div>
                    <div className="">
                        <p className="text-2xl font-bold">UniversityLocation</p>
                        {/* <p className="text-2xl font-bold">${UniversityLocation.Country}</p> */}
                    </div>
                </div>
                {/* Divider */}
                <div className="border-b py-2"></div>
                {/* fee */}
                <div className="flex items-center justify-between gap-3 mt-5">
                    <div className="flex items-center gap-3">
                        <div className="border border-solid border-red-500 rounded-full p-1.5">
                            <FaMoneyCheckDollar className="size-7 text-red-400 " />
                        </div>
                        <p className="text-lg">Fees:</p>
                    </div>
                    <div className="">
                        <p className="text-2xl font-bold">{postDeadline}</p>
                    </div>
                </div>
                {/* Divider */}
                <div className="border-b py-2"></div>
                {/* fee */}
                <div className="flex items-center justify-between gap-3 mt-5">
                    <div className="flex items-center gap-3">
                        <div className="border border-solid border-red-500 rounded-full p-1.5">
                            <FaMoneyCheckDollar className="size-7 text-red-400 " />
                        </div>
                        <p className="text-lg">Fees:</p>
                    </div>
                    <div className="">
                        <p className="text-2xl font-bold">${stipend}.00</p>
                    </div>
                </div>
                {/* Divider */}
                <div className="border-b py-2"></div>
                {/* fee */}
                <div className="flex items-center justify-between gap-3 mt-5">
                    <div className="flex items-center gap-3">
                        <div className="border border-solid border-red-500 rounded-full p-1.5">
                            <FaMoneyCheckDollar className="size-7 text-red-400 " />
                        </div>
                        <p className="text-lg">Fees:</p>
                    </div>
                    <div className="">
                        <p className="text-2xl font-bold">${serviceCharge}.00</p>
                    </div>
                </div>
                {/* Divider */}
                <div className="border-b py-2"></div>
                {/* fee */}
                <div className="flex items-center justify-between gap-3 mt-5">
                    <div className="flex items-center gap-3">
                        <div className="border border-solid border-red-500 rounded-full p-1.5">
                            <FaMoneyCheckDollar className="size-7 text-red-400 " />
                        </div>
                        <p className="text-lg">Fees:</p>
                    </div>
                    <div className="">
                        <p className="text-2xl font-bold">${applicationFees}.00</p>
                    </div>
                </div>
                {/* Divider */}
                <div className="border-b py-2"></div>
                {/* fee */}
                <div className="flex items-center justify-between gap-3 mt-5">
                    <div className="flex items-center gap-3">
                        <div className="border border-solid border-red-500 rounded-full p-1.5">
                            <FaMoneyCheckDollar className="size-7 text-red-400 " />
                        </div>
                        <p className="text-lg">Fees:</p>
                    </div>
                    <div className="">
                        <p className="text-2xl font-bold">{applicationDeadline}</p>
                    </div>
                </div>
                {/* Button */}
                <Link to={`/applyForm/${_id}`}>
                    <button className="btn btn-primary mt-14">Apply Scholarship</button>
                </Link>
                {/* Button */}
                <Link to={`/dashboard/payment`}>
                    <button
                    className="btn btn-primary mt-14">Purchase</button>
                </Link>
                {/* <button
                    onClick={() => setIsOpen(true)}
                    className="btn btn-primary mt-14">
                    Purchase
                </button> */}
            </div>
            {/* <PurchaseModal closeModal={closeModal} isOpen={isOpen}></PurchaseModal> */}
        </div>
    );
};

export default ScholarshipDetails;