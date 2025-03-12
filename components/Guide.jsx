import Image from "next/image";
import ArrowIcon from "../public/ArrowIcon.png"
import LinkArrow from "../public/linkArrow.png"
import CompassIcon from "../public/Compass.png"
import { Button } from "@mui/material";
export default function Guide() {
    return (
        <div className="w-full flex flex-col sm:flex-row px-6 py-6 gap-4">
            <div className="border-1 border-[#CBCEDE] rounded-lg w-5/7 p-5 px-8">
                <p className="font-bold text-[20px] text-[#45525E]">Still not found ?</p>
                <p className="font-normal text-[15px] text-[#74788D]">Tell us what are you looking for</p>
                <span className="flex gap-3 items-center justify-center mt-8">
                    <p className="w-auto font-normal text-[15px] text-[#45525D]">PopularSearches</p>
                    <hr style={{ width: "100%", borderTop: "1px solid #74788D57" }} />
                </span>
                <div className="mt-4 flex gap-8">
                    <div className="flex flex-col gap-3">
                        <div className="flex gap-4">
                            <div className="bg-[#FFF2ED] w-[58px] h-[58px] flex justify-center items-center rounded-md">
                                <Image src={ArrowIcon} alt="arrowIcon" />
                            </div>
                            <span>
                                <p className="font-bold text-[14px] text-[#192E40]">Dubai - Marina</p>
                                <p className="font-normal text-[14px] text-[#FF916E] flex gap-2 items-center underline">View all Listings <span><Image src={LinkArrow} alt="arrowIcon" />
                                </span></p>
                            </span>
                        </div>
                        <div className="flex gap-4">
                            <div className="bg-[#FFF2ED] w-[58px] h-[58px] flex justify-center items-center rounded-md">
                                <Image src={ArrowIcon} alt="arrowIcon" />
                            </div>
                            <span>
                                <p className="font-bold text-[14px] text-[#192E40]">Dubai - Marina</p>
                                <p className="font-normal text-[14px] text-[#FF916E] flex gap-2 items-center underline">View all Listings <span><Image src={LinkArrow} alt="arrowIcon" />
                                </span></p>
                            </span>
                        </div>
                    </div>
                    <div className="gap-2 flex flex-col text-[14px] text-[#45525D]">
                        <li>
                            Flats for Rent in Whitefield
                        </li>
                        <li>
                            Flats for Rent in Sarjapur Road
                        </li>
                        <li>
                            Flats for Rent in Koramangala
                        </li>
                        <li>
                            Flats for Rent in Dubai
                        </li>
                    </div>
                    <div className="gap-2 flex flex-col text-[14px] text-[#45525D]">
                        <li>
                            Flats for Rent in Marathahalli</li>
                        <li>
                            Flats for Rent in Hebbal</li>
                        <li>
                            Flats for Rent in Kanakapura</li>
                        <li>
                            Flats for Rent in Bellandur</li>
                    </div>
                </div>
            </div>
            <div className="w-2/7 bg-[#FF916E] rounded-lg p-5">
                <span className="flex justify-center">
                    <Image src={CompassIcon} alt="compass" />
                </span>
                <p className="font-bold text-[35px] text-[#FEFEFE] justify-center flex mt-2">Buyer’s guide</p>
                <p className="font-bold text-[16px] text-[#FEFEFE] text-center flex mt-2">The complete guide to locating and purchasing a home in Dubai</p>
                <span className="flex items-center justify-center mt-2"><Button
                    style={{
                        background: "#FEFEFE",
                        borderRadius: "10px",
                        color: "#74788D",
                        fontSize: "15px",
                        textTransform: "none",
                        width: "323px",
                        height: "57px"
                    }}
                    variant="contained"
                >
                    Download PDF
                </Button></span>
            </div>
        </div>
    )
}