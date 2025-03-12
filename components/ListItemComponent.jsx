"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";
import RoomImage from "../public/room.png";
import TimerImage from "../public/clock.png"
import Tick from "../public/normalTick.png"
import BlackHeadphone from "../public/blackHeadphone.png"
import Location from "../public/blueLocation.png"
import Whatsapp from "../public/whatsapp.png"
import Telephone from "../public/blackPhone.png"
import MailIcon from "../public/mail.png"
import OrangeTick from "../public/orangeTick.png"
import Headset from "../public/earphone.png"
import Arrow from "../public/sideArrow.png"
import Bed from "../public/bed.png"
import Hanger from "../public/hanger.png"
import Car from "../public/car.png"
import RightArrow from "../public/rightArrow.png"

export default function CardItem({ item }) {
    const splideRef = useRef(null);
    useEffect(() => {
        if (splideRef.current) {
            new Splide(splideRef.current, {
                type: "fade",
                rewind: true,
                autoplay: true,
                interval: 3000,
                arrows: true,
                pagination: true,
            }).mount();
        }
    }, []);

    return (
        <div className="bg-gray-200 rounded-lg shadow-md flex flex-row  gap-8 w-full">
            <div ref={splideRef} className="splide w-[40%]">
                <div className="splide__track">
                    <ul className="splide__list">
                        {[1, 2, 3, 4].map((_, index) => (
                            <li key={index} className="splide__slide">
                                <div className="relative w-full h-[310px] flex  items-center">
                                    <Image src={RoomImage} alt="Room" fill className="object-cover rounded-md" />
                                    <div className="absolute top-4 left-[22px] flex items-center gap-1 bg-[#00000070] text-white px-2 py-1 mr-1 rounded-l-md">
                                        <Image src={TimerImage} alt="Timer" width={15} height={15} className="rounded-md" />
                                        <p className="text-[12px] whitespace-nowrap">Listed 5 days ago</p>
                                    </div>
                                    <div className="absolute top-4 right-11 flex items-center gap-1 bg-[#FF916E] text-white px-2 py-1 w-[50%]">
                                        <Image src={Tick} alt="Verified" width={16} height={16} className="rounded-md" />
                                        <p className="text-[12px] whitespace-nowrap">Verified by Athirad</p>
                                    </div>
                                    <div className="absolute top-4 right-4 bg-[#FFD86E] p-1 rounded-r-md">
                                        <Image src={BlackHeadphone} alt="Support" width={16} height={16} className="rounded-md" />
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="w-[60%] py-3 justify-between items-start">
                <div className="flex">
                    <div className="flex flex-col">
                        <div className="flex flex-col gap-2">
                            <p className="font-semibold text-[14px] text-[#45525D]">VILLA 370 MIRA OASIS 1</p>
                            <p className="font-semibold text-[30px] text-[#FF916E]">
                                2,50,190 <span className="text-[16px]">AED Yearly</span>
                            </p>
                            <span className="flex gap-2 items-center">
                                <Image src={Location} alt="location" width={14} height={14} className="w-[16px] h-[20px]" />
                                <p className="font-normal text-[15px]">118, Dubailand, Dubai, UAE</p>
                            </span>
                            <p className="text-gray-700 text-sm flex items-center gap-2">
                                For Rent
                                <span className="w-[2px] h-[16px] bg-[#74788D38] rounded-full"></span>
                                Vacant Now
                                <span className="w-[2px] h-[16px] bg-[#74788D38] rounded-full"></span>
                                Atharid Premium
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div className="bg-[#12B28C] flex rounded-md items-center justify-center px-3 w-[127px] h-[47px]">
                            <Image src={Whatsapp} alt="whatsapp" width={20} height={20} className="w-[20px] h-[20px] rounded-md" />
                            <p className="font-bold text-white text-[12px] rounded-md ml-2 mb-1">WHATSAPP</p>
                        </div>
                        <div className="bg-[#FFFFFF] flex rounded-md items-center justify-center w-[47px] h-[47px]">
                            <Image src={Telephone} alt="telephone" width={20} height={20} className="w-[20px] h-[20px] rounded-md" />
                        </div>
                        <div className="bg-[#FFFFFF] flex rounded-md items-center justify-center w-[47px] h-[47px]">
                            <Image src={MailIcon} alt="mail" width={20} height={20} className="w-[20px] h-[20px] rounded-md" />
                        </div>
                    </div>
                </div>
                <div className="">
                    <hr className="my-3" />
                    <div className="flex my-4">
                        <div className="">
                            <span className="flex gap-2 items-center">
                                <Image src={OrangeTick} alt="orangetick" width={14} height={14} className="w-[14px] h-[14px]" />
                                <p className="font-normal text-[15px]">Ready to move</p>
                            </span>
                            <span className="flex gap-2 items-center">
                                <Image src={Headset} alt="orangetick" width={14} height={14} className="w-[14px] h-[14px]" />
                                <p className="font-normal text-[15px]">Premium customer support</p>
                            </span>
                        </div>
                        <div className="flex flex-grow justify-end mr-4">
                            <span className="flex gap-2 items-center">
                                <Image src={Arrow} alt="sideArror" width={24} height={24} className="w-[24px] h-[24px]" />

                                <p className="text-[#12B2AF] font-bold text-[15px]">1500.00 square ft</p>
                            </span>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div className="w-[143px] h-[47px] flex items-center justify-evenly bg-white rounded-md p-3">
                            <Image src={Bed} alt="bed" width={14} height={14} className="w-[14px] h-[14px]" />
                            <p className="font-normal text-[14px]">1 Bedrooms</p>
                        </div>
                        <div className="w-[143px] h-[47px] flex items-center justify-evenly bg-white rounded-md p-3">
                            <Image src={Hanger} alt="hanger" width={14} height={14} className="w-[14px] h-[14px]" />
                            <p className="font-normal text-[14px]">2 Bathroom</p>
                        </div>
                        <div className="w-[145px] h-[47px] flex items-center justify-evenly bg-white rounded-md p-3">
                            <Image src={Car} alt="car" width={14} height={14} className="w-[14px] h-[14px]" />
                            <p className="font-normal text-[14px]">Parking Avail</p>
                        </div>
                        <div className="w-[49px] h-[49px] flex items-center justify-evenly bg-white rounded-md p-3">
                            <Image src={RightArrow} alt="rightArrow" width={14} height={14} className="w-[14px] h-[14px]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
