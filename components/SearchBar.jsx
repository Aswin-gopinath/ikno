"use client";
import Image from "next/image";
import SearchIcon from "../public/search.png";
import LocationIcon from "../public/location.png";
import { Button } from "@mui/material";
import { useState } from "react";

export default function SearchBar() {
    const [propertyType, setPropertyType] = useState("All");
    const [active, setActive] = useState("buy");

    return (
        <div className="flex flex-wrap items-center justify-between gap-2 p-4 lg:p-6">
            {/* Buy / Rent Toggle */}
            <div className="w-full sm:w-[200px] h-[50px] bg-gray-100 rounded-lg flex overflow-hidden">
                <span
                    onClick={() => setActive("buy")}
                    style={{
                        backgroundColor: active === "buy" ? "#2E96C6" : "#D1D5DB",
                        color: active === "buy" ? "white" : "black",
                    }}
                    className="w-1/2 text-[15px] font-normal flex items-center justify-center cursor-pointer"
                >
                    <p>Buy</p>
                </span>
                <span
                    onClick={() => setActive("rent")}
                    style={{
                        backgroundColor: active === "rent" ? "#2E96C6" : "#D1D5DB",
                        color: active === "rent" ? "white" : "black",
                    }}
                    className="w-1/2 text-[15px] font-normal flex items-center justify-center cursor-pointer rounded-r-lg"
                >
                    <p>Rent</p>
                </span>
            </div>

            {/* Search Input */}
            <div className="w-full sm:w-[60%] lg:w-[870px] h-[50px] rounded-lg flex items-center px-4 shadow-md bg-white">
                <Image src={SearchIcon} alt="Search" width={20} height={20} />
                <input
                    type="text"
                    placeholder="Search Property"
                    className="flex-1 outline-none px-3 text-sm placeholder-gray-500"
                />
                <Image src={LocationIcon} alt="Location" width={20} height={20} />
            </div>

            {/* Property Type Dropdown */}
            <div className="w-full sm:w-[250px] h-[50px] rounded-lg flex items-center px-4 shadow-md bg-white border border-gray-300">
                <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="bg-white w-full text-gray-700 text-sm h-full border-none rounded-md px-2 focus:outline-none cursor-pointer"
                >
                    <option value="All">All</option>
                    <option value="Apartment">Apartment</option>
                    <option value="House">House</option>
                    <option value="Villa">Villa</option>
                    <option value="Office">Office</option>
                </select>
            </div>

            {/* Find Button */}
            <div>
                <Button
                    style={{
                        background: "#FF916E",
                        borderRadius: "10px",
                        color: "white",
                        fontSize: "15px",
                        textTransform: "none",
                        width: "180px",
                        height: "54px",
                    }}
                    variant="contained"
                >
                    Find
                </Button>
            </div>
        </div>
    );
}
