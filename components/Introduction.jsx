"use client";
import { useState } from "react";

export default function Introduction() {
    const [propertyType, setPropertyType] = useState("Price");

    return (
        <div className="px-6 pt-8 flex flex-wrap items-center justify-between gap-4">
            {/* Title & Listings Count */}
            <div>
                <p className="font-bold text-[20px] text-[#45525E]">
                    Properties for rent in United Arab Emirates
                </p>
                <p className="font-normal text-[15px] text-[#707070]">10 listings</p>
            </div>

            {/* Filter & Map Toggle */}
            <div className="w-full sm:w-auto flex flex-wrap gap-3 items-center">
                {/* Map View Toggle */}
                <div className="w-[170px] h-[50px] flex items-center justify-between px-4 shadow-md bg-white border border-gray-300 rounded-lg">
                    <p className="text-gray-700">Map View</p>
                    <label className="switch">
                        <input
                            type="checkbox"
                            checked={propertyType === "10000-50000"}
                            onChange={(e) =>
                                setPropertyType(e.target.checked ? "10000-50000" : "<10000")
                            }
                        />
                        <span className="slider round"></span>
                    </label>
                </div>

                {/* Price Range Dropdown */}
                <div className="w-[170px] h-[50px] flex items-center px-4 shadow-md bg-white border border-gray-300 rounded-lg">
                    <select
                        value={propertyType}
                        onChange={(e) => setPropertyType(e.target.value)}
                        className="bg-white w-full text-gray-700 text-sm h-full border-none rounded-md px-2 focus:outline-none cursor-pointer"
                    >
                        <option value="<10000">&lt; 10,000</option>
                        <option value="10000-50000">10,000 - 50,000</option>
                        <option value="50000-100000">50,000 - 100,000</option>
                        <option value=">100000">&gt; 100,000</option>
                    </select>
                </div>
            </div>

            {/* Custom Switch Styling */}
            <style jsx>{`
                .switch {
                    position: relative;
                    display: inline-block;
                    width: 50px;
                    height: 24px;
                }
                .switch input {
                    opacity: 0;
                    width: 0;
                    height: 0;
                }
                .slider {
                    position: absolute;
                    cursor: pointer;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: #ccc;
                    transition: 0.4s;
                    border-radius: 34px;
                }
                .slider:before {
                    position: absolute;
                    content: "";
                    height: 16px;
                    width: 16px;
                    border-radius: 50%;
                    left: 4px;
                    bottom: 4px;
                    background-color: white;
                    transition: 0.4s;
                }
                input:checked + .slider {
                    background-color: #2e96c6;
                }
                input:checked + .slider:before {
                    transform: translateX(26px);
                }
            `}</style>
        </div>
    );
}
