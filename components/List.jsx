"use client"
import React, { useState } from "react";
import CardItem from "./ListItemComponent"
import FilterIcon from "../public/FilterIcon.png"
import Image from "next/image";
import DownArrow from "../public/down-arrow.png"
import LuxurySection from "./LuxurySectionComponent";
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function List() {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const [toggle1, setToggle1] = useState(false);
    const [toggle2, setToggle2] = useState(false);
    const [completionStatus, setCompletionStatus] = useState("");
    const [propertyTypes, setPropertyTypes] = useState([]);

    const handleCheckboxChange = (type) => {
        setPropertyTypes((prev) =>
            prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
        );
    };
    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };
    return (
        <div>

            <div className="w-full h-fit flex px-8 py-2">
                <div className="w-5/7 px-12 pt-8 flex flex-col gap-6 relative">
                    {arr.map((item, index) => (
                        <React.Fragment key={item}>
                            {index === 4 && (
                    <div className="p-0 hidden md:block">
                                    <LuxurySection />
                                </div>
                            )}
                            <div className="">
                                <CardItem />
                            </div>
                        </React.Fragment>
                    ))}
                </div>
                <div className="w-2/7 px-12 pt-4 mt-8 bg-gray-200 h-fit rounded-lg shadow-md mr-7 hidden md:block">
                    <div>
                        <div className="flex items-start mb-4">
                            <div className="w-full flex items-start gap-2 ">
                                <span className="text-[16px] flex flex-grow font-bold">Filter</span>
                                <Image src={FilterIcon} alt="Verified" width={18} height={18} className="w-[18px] h-[18px] items-end" />
                            </div>
                        </div>
                        <hr style={{ width: "100%", borderTop: "1px solid #74788D57" }} />

                        <div className="space-y-3 mb-4 mt-4">
                            <div className="flex justify-between items-center">
                                <span className="font-normal text-[14px] text-[#45525D]">Mark already seen</span>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={toggle1}
                                        onChange={() => setToggle1(!toggle1)}
                                        className="sr-only peer"
                                    />
                                    <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-blue-600 relative transition-colors">
                                        <div
                                            className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform ${toggle1 ? "translate-x-5" : "translate-x-0"
                                                }`}
                                        ></div>
                                    </div>
                                </label>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="font-normal text-[14px] text-[#45525D]">Properties with photos</span>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={toggle2}
                                        onChange={() => setToggle2(!toggle2)}
                                        className="sr-only peer"
                                    />
                                    <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-blue-600 relative transition-colors">
                                        <div
                                            className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform ${toggle2 ? "translate-x-5" : "translate-x-0"
                                                }`}
                                        ></div>
                                    </div>
                                </label>
                            </div>
                        </div>

                        <details className=" rounded-lg p-2  border-gray-300">
                            <summary className="cursor-pointer text-[14px] text-[#45525E] font-bold flex justify-between items-center mb-4">
                                Completion Status
                                <span className="transition-transform duration-300 details-arrow"> <Image src={DownArrow} alt="down-arrow" width={12} height={12} className="w-[12px] h-[12px] items-end" />
                                </span>
                            </summary>
                            <hr style={{ width: "100%", borderTop: "1px solid #74788D57" }} />

                            <div className="mt-2 space-y-2 mt-4">
                                <label className="flex items-center gap-2 cursor-pointer font-normal text-[14px] text-[#45525D]">
                                    <input
                                        type="radio"
                                        name="completion-status"
                                        value="read"
                                        checked={completionStatus === "read"}
                                        onChange={() => setCompletionStatus("read")}
                                        className="hidden peer "
                                    />
                                    <span className="w-4 h-4 border-2 border-gray-400 rounded-full flex items-center justify-center peer-checked:border-[#12B28C]">
                                        <span className="w-2 h-2 bg-[#12B28C] rounded-full opacity-0 peer-checked:opacity-100 transition-opacity"></span>
                                    </span>
                                    Read
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer font-normal text-[14px] text-[#45525D]">
                                    <input
                                        type="radio"
                                        name="completion-status"
                                        value="off-plan"
                                        checked={completionStatus === "off-plan"}
                                        onChange={() => setCompletionStatus("off-plan")}
                                        className="hidden peer"
                                    />
                                    <span className="w-4 h-4 border-2 border-gray-400 rounded-full flex items-center justify-center peer-checked:border-[#12B28C]">
                                        <span className="w-2 h-2 bg-[#12B28C] rounded-full opacity-0 peer-checked:opacity-100 transition-opacity"></span>
                                    </span>
                                    Off-plan
                                </label>
                            </div>
                        </details>

                        <details className="rounded-lg p-2">
                            <summary className="cursor-pointer text-[14px] text-[#45525E] font-bold flex justify-between items-center mb-4">
                                Property Type
                                <span className="transition-transform duration-300 details-arrow">   <Image src={DownArrow} alt="down-arrow" width={12} height={12} className="w-[12px] h-[12px] items-end" /></span>
                            </summary>
                            <hr style={{ width: "100%", borderTop: "1px solid #74788D57" }} />

                            <div className="mt-2 space-y-2 mt-4">
                                {["Premium", "Apartments", "Ready to move", "Individual homes", "Townhouse", "Penthouse"].map((type) => (
                                    <label key={type} className="flex items-center gap-2 cursor-pointer font-normal text-[14px] text-[#45525D]">
                                        <input
                                            type="checkbox"
                                            checked={propertyTypes.includes(type)}
                                            onChange={() => handleCheckboxChange(type)}
                                            className="hidden peer"
                                        />
                                        <span className="w-5 h-5 border-2 border-gray-400 rounded-md flex items-center justify-center peer-checked:bg-[#12B28C] peer-checked:border-[#12B28C]">
                                            <svg className="w-4 h-4 text-transparent peer-checked:text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M20.285 6.709a1 1 0 00-1.414 0L9 16.586l-3.879-3.88a1 1 0 10-1.414 1.415l4.586 4.585a1 1 0 001.414 0l10.586-10.586a1 1 0 000-1.414z"></path>
                                            </svg>
                                        </span>
                                        {type}
                                    </label>
                                ))}
                            </div>
                        </details>

                        <details className="rounded-lg p-2">
                            <summary className="cursor-pointer text-[14px] text-[#45525E] font-bold flex justify-between items-center mb-4">
                                Furnished Status
                                <span className="transition-transform duration-300 details-arrow">   <Image src={DownArrow} alt="down-arrow" width={12} height={12} className="w-[12px] h-[12px] items-end" /></span>
                            </summary>
                            <hr style={{ width: "100%", borderTop: "1px solid #74788D57" }} />

                            <div className="mt-2 space-y-2 mt-4">
                                {["Furnished", "Semi-Furnished", "Un-Furnished"].map((type) => (
                                    <label key={type} className="flex items-center gap-2 cursor-pointer font-normal text-[14px] text-[#45525D]">
                                        <input
                                            type="checkbox"
                                            checked={propertyTypes.includes(type)}
                                            onChange={() => handleCheckboxChange(type)}
                                            className="hidden peer"
                                        />
                                        <span className="w-5 h-5 border-2 border-gray-400 rounded-md flex items-center justify-center peer-checked:bg-[#12B28C] peer-checked:border-[#12B28C]">
                                            <svg className="w-4 h-4 text-transparent peer-checked:text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M20.285 6.709a1 1 0 00-1.414 0L9 16.586l-3.879-3.88a1 1 0 10-1.414 1.415l4.586 4.585a1 1 0 001.414 0l10.586-10.586a1 1 0 000-1.414z"></path>
                                            </svg>
                                        </span>
                                        {type}
                                    </label>
                                ))}
                            </div>
                        </details>

                        <details className="rounded-lg p-2">
                            <summary className="cursor-pointer text-[14px] text-[#45525E] font-bold flex justify-between items-center mb-4">
                                Amenities
                                <span className="transition-transform duration-300 details-arrow">   <Image src={DownArrow} alt="down-arrow" width={12} height={12} className="w-[12px] h-[12px] items-end" /></span>
                            </summary>
                            <hr style={{ width: "100%", borderTop: "1px solid #74788D57" }} />

                            <div className="mt-2 space-y-2 mt-4">
                                {["Parking facility", "Gas Pipeline", "Power backup", "Security"].map((type) => (
                                    <label key={type} className="flex items-center gap-2 cursor-pointer font-normal text-[14px] text-[#45525D]">
                                        <input
                                            type="checkbox"
                                            checked={propertyTypes.includes(type)}
                                            onChange={() => handleCheckboxChange(type)}
                                            className="hidden peer"
                                        />
                                        <span className="w-5 h-5 border-2 border-gray-400 rounded-md flex items-center justify-center peer-checked:bg-[#12B28C] peer-checked:border-[#12B28C]">
                                            <svg className="w-4 h-4 text-transparent peer-checked:text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M20.285 6.709a1 1 0 00-1.414 0L9 16.586l-3.879-3.88a1 1 0 10-1.414 1.415l4.586 4.585a1 1 0 001.414 0l10.586-10.586a1 1 0 000-1.414z"></path>
                                            </svg>
                                        </span>
                                        {type}
                                    </label>
                                ))}
                            </div>
                        </details>

                        <details className="rounded-lg p-2">
                            <summary className="cursor-pointer text-[14px] text-[#45525E] font-bold flex justify-between items-center mb-4">
                                BHK Facility
                                <span className="transition-transform duration-300 details-arrow">   <Image src={DownArrow} alt="down-arrow" width={12} height={12} className="w-[12px] h-[12px] items-end" /></span>
                            </summary>
                            <hr style={{ width: "100%", borderTop: "1px solid #74788D57" }} />

                            <div className="mt-2 space-y-2 mt-4">
                                {["1 BHK", "2 BHK", "3 BHK", "4 BHK", "5 BHK", "Studio"].map((type) => (
                                    <label key={type} className="flex items-center gap-2 cursor-pointer font-normal text-[14px] text-[#45525D]">
                                        <input
                                            type="checkbox"
                                            checked={propertyTypes.includes(type)}
                                            onChange={() => handleCheckboxChange(type)}
                                            className="hidden peer"
                                        />
                                        <span className="w-5 h-5 border-2 border-gray-400 rounded-md flex items-center justify-center peer-checked:bg-[#12B28C] peer-checked:border-[#12B28C]">
                                            <svg className="w-4 h-4 text-transparent peer-checked:text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M20.285 6.709a1 1 0 00-1.414 0L9 16.586l-3.879-3.88a1 1 0 10-1.414 1.415l4.586 4.585a1 1 0 001.414 0l10.586-10.586a1 1 0 000-1.414z"></path>
                                            </svg>
                                        </span>
                                        {type}
                                    </label>
                                ))}
                            </div>
                        </details>

                        <details className="rounded-lg p-2">
                            <summary className="cursor-pointer text-[14px] text-[#45525E] font-bold flex justify-between items-center mb-4">
                                Bathrooms
                                <span className="transition-transform duration-300 details-arrow">   <Image src={DownArrow} alt="down-arrow" width={12} height={12} className="w-[12px] h-[12px] items-end" /></span>
                            </summary>
                            <hr style={{ width: "100%", borderTop: "1px solid #74788D57" }} />

                            <div className="mt-2 space-y-2 mt-4">
                                {["1 ", "2 ", "3+"].map((type) => (
                                    <label key={type} className="flex items-center gap-2 cursor-pointer font-normal text-[14px] text-[#45525D] mb-4">
                                        <input
                                            type="checkbox"
                                            checked={propertyTypes.includes(type)}
                                            onChange={() => handleCheckboxChange(type)}
                                            className="hidden peer"
                                        />
                                        <span className="w-5 h-5 border-2 border-gray-400 rounded-md flex items-center justify-center peer-checked:bg-[#12B28C] peer-checked:border-[#12B28C]">
                                            <svg className="w-4 h-4 text-transparent peer-checked:text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M20.285 6.709a1 1 0 00-1.414 0L9 16.586l-3.879-3.88a1 1 0 10-1.414 1.415l4.586 4.585a1 1 0 001.414 0l10.586-10.586a1 1 0 000-1.414z"></path>
                                            </svg>
                                        </span>
                                        {type}
                                    </label>
                                ))}
                            </div>
                        </details>
                    </div>
                </div>
            </div>
            <div className="w-full h-fit justify-center flex px-16 py-4 items-center">
                <Stack spacing={2}>
                    {/* <Typography>Page: {page}</Typography> */}
                    <Pagination count={10} page={page} onChange={handleChange} />
                </Stack>
            </div>
        </div>
    )
}